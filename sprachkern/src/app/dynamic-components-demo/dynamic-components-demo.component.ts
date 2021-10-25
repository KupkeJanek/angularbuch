import {
  AfterViewInit,
  Component, Injector,
  Input,
  OnDestroy, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'ch-circle',
  template: `<div [ngStyle]="{'background-color' : color}"></div>`,
  styles: [`
     div {
       border-radius: 50%;
       border: 1px solid black;
       width: 40px;
       height: 40px;
       display: inline-block;
       margin: 3px;
     }
  `]
})
export class CircleComponent implements OnDestroy {
  @Input() color = 'black';
  ngOnDestroy() {
    console.log('Destroy circle');
  }
}

@Component({
    template: `<div></div>`,
    styles: [`
     div {
       background-color: black;
       border: 1px solid black;
       width: 40px;
       height: 40px;
       display: inline-block;
       margin: 3px;
     }
  `]
})
export class SquareComponent {
}

export class DialogConfig {
  title: string = '';
  text: string = '';
  confirmFunction: Function = () => {};
}

@Component({
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">{{config.title}}</div>
    <div class="panel-body">{{config.text}}</div>
    <div class="panel-footer">
      <button class="btn btn-sm" (click)="confirm()">OK</button>
    </div>
  </div>
 `,
})
export class DynamicDialogComponent  {
  constructor(public config: DialogConfig) { }
  confirm() {
    this.config.confirmFunction();
  }
}


@Component({
  selector: 'ch-dynamic-components-demo',
  templateUrl: './dynamic-components-demo.component.html',
  styleUrls: ['./dynamic-components-demo.component.css']
})
export class DynamicComponentsDemoComponent implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;

  @ViewChild('todoContainer', {read: ViewContainerRef, static: false}) todoContainer?: ViewContainerRef;
  @ViewChild('todoTemplate') todoTemplate!: TemplateRef<any>;

  circleComponent = CircleComponent;
  geoComponent: any = CircleComponent;


  repeatCnt = 4;

  dialogInjector: Injector;
  dialogComponent = DynamicDialogComponent;

  constructor(private injector: Injector) {

      const dialogConfig: DialogConfig = {
        title: 'Eintrag löschen',
        text: 'Wollen Sie den Eintrag wirklich löschen',
        confirmFunction: () => {
          console.log('Eintrag wurde gelöscht');
        }
      };
      this.dialogInjector = Injector.create({
          providers: [
            {provide: DialogConfig, useValue: dialogConfig}
          ],
          parent: injector
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.container.createComponent(CircleComponent);
      this.container.createComponent(CircleComponent);
      this.addCircle('white');

      this.moveCircle(1, 0);

      const circleRef = this.addCircle('gray');
      this.container?.move(circleRef.hostView, 1);

      this.container?.remove(this.container.length - 1); // letzten Kreis löschen

      this.todoContainer?.createEmbeddedView(this.todoTemplate, {
        todoParam: {
          text: 'Aufräumen',
          done: true
        }
      });
    });
  }

  addCircle(color: string) {
    const circleRef = this.container.createComponent(CircleComponent, {index: 0});
    circleRef.instance.color = color;
    return circleRef;
  }

  moveCircle(oldIndex: number, newIndex: number) {
    const viewRef = this.container.get(oldIndex);
    if (viewRef) {
      this.container.move(viewRef, newIndex);
    }
  }

  toggleGeoComponent() {
   this.geoComponent = this.geoComponent === CircleComponent ? SquareComponent
                                                             : CircleComponent;
  }
}

