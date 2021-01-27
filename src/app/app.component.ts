import { Component } from '@angular/core';

import { DatetimeService } from './core/services/datetime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Registro Vehicular';

  constructor(private datetimeSvc: DatetimeService) {
    const unix = 161168719;
    const date = this.datetimeSvc.unixTimeToDate(unix);
    console.log(date);
  }
}
