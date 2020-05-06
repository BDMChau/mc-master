import { Component, OnInit } from '@angular/core';
import { ThemeService } from './components/theme/theme.service';
import { particles_bg } from './components/particles';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MChau105';
  isDark: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.particlesLoad();
  }

  particlesLoad = () => {
    particlesJS('particles-js', particles_bg, () => { });
  }

  toggleTheme = () => {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.isDark = !this.isDark;

    } else {
      this.themeService.setDarkTheme();
      this.isDark = !this.isDark;
    }
  }
}
