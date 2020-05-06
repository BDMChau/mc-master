import { Injectable } from "@angular/core";
import { Theme, light, dark } from "./theme.model";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private current: Theme = light;


  isDarkTheme(): boolean {
    return this.current.name === dark.name;
  }

  setDarkTheme(): void {
    this.setCurrentTheme(dark);
  }

  setLightTheme(): void {
    this.setCurrentTheme(light);
  }

  setCurrentTheme(theme: Theme): void {
    this.current = theme;

    Object.keys(this.current.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.current.properties[property]
      );
    });
  }
}
