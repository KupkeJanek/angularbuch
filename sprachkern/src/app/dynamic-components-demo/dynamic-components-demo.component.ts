import {
    Component,
    AfterViewInit,
    Input,
    ViewChild,
    AfterContentInit,
    OnDestroy,
    Inject,
    Injector,
    ComponentRef
} from '@angular/core';
import {ViewContainerRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core';

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
  title: string;
  text: string;
  confirmFunction: Function;
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
  @ViewChild('container', {read: ViewContainerRef, static: true}) container;

  @ViewChild('todoContainer', {read: ViewContainerRef, static: false}) todoContainer;
  @ViewChild('todoTemplate') todoTemplate;

  circleComponent = CircleComponent;
  geoComponent: any = CircleComponent;


  repeatCnt = 4;

  circleFactory: ComponentFactory<CircleComponent>;

  dialogInjector: Injector;
  dialogComponent = DynamicDialogComponent;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
    this.circleFactory = this.resolver.resolveComponentFactory(CircleComponent);

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
      this.container.createComponent(this.circleFactory);
      this.container.createComponent(this.circleFactory);
      this.addCircle('white');

      this.moveCircle(1, 0);

      const circleRef = this.addCircle('gray');
      this.container.move(circleRef.hostView, 1);

      this.container.remove(this.container.length - 1); // letzten Kreis löschen

      this.todoContainer.createEmbeddedView(this.todoTemplate, {
        todoParam: {
          text: 'Aufräumen',
          done: true
        }
      });
    });
  }

  addCircle(color: string) {
    const circleRef = this.container.createComponent(this.circleFactory, 0);
    circleRef.instance.color = color;
    return circleRef;
  }

  moveCircle(oldIndex, newIndex) {
    const viewRef = this.container.get(oldIndex);
    this.container.move(viewRef, newIndex);
  }

  changeGeoComponent() {
   this.geoComponent = this.geoComponent === CircleComponent ? SquareComponent
                                                             : CircleComponent;
  }
}

