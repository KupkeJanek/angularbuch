import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  createBlogEntry(title: string, image: string, text: string) {
    console.log(title, image, text);
  }
}

