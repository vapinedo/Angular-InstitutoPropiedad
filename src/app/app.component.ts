import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registro-vehicular';

  @HostBinding('class') componentCssClass: any;

  constructor(  public overlayContainer: OverlayContainer ) { }

  onSetTheme(event: any) {
    const theme = event.checked ? 'dark-theme' : 'light-theme';
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
