import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../shared/shared-module';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  standalone: true,
  imports: [SharedModule, FormsModule]
})
export class SettingsComponent {

  originalTitle = '';

  user: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private titleService: Title) {
  }

  ngOnInit() {

    this.activatedRoute.data.subscribe((data) => {
      console.log(data); // Object {title: 'Einstellungen'}
    });

    this.originalTitle = this.titleService.getTitle();
    const title = this.activatedRoute.snapshot.data['title'];
    if (title) {
      this.titleService.setTitle(title);
    }
  }

  ngOnDestroy() {
    this.titleService.setTitle(this.originalTitle);
  }

}
