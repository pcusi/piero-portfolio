import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themeStore: string = localStorage.getItem('theme-bg');

  ngOnInit() {

  }

  setTheme() {
    if (this.themeStore === 'theme-dark') {
      //toggle and switch
      localStorage.setItem('theme-bg', 'theme-light');
      this.themeStore = localStorage.getItem('theme-bg');
    } else {
      localStorage.setItem('theme-bg', 'theme-dark');
      this.themeStore = localStorage.getItem('theme-bg');
    }
  }

}
