import { Component, OnInit, OnDestroy } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.scss']
})
export class NotificationsMenuComponent implements OnInit, OnDestroy {

  public showNotificationMenu = false;
  private subscription = new Subscription();
  private trigger = 'notifications-icon'; // On headerComponent HTML Template

  constructor() {}

  ngOnInit(): void {
    const element = document.getElementById(this.trigger);
    const clickOnNotificationsIcon = fromEvent(element, 'click');

    this.subscription = clickOnNotificationsIcon
      .subscribe((event: MouseEvent) => {
        this.showNotificationMenu = !this.showNotificationMenu
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}