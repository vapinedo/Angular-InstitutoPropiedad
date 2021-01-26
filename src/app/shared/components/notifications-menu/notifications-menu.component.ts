import { Component, OnInit, OnDestroy } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.scss']
})
export class NotificationsMenuComponent implements OnInit, OnDestroy {

  public showNotificationMenu = false;
  private trigger = 'notifications-icon';
  private subscription = new Subscription();

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
    console.log('notification menu has been destroyed');
    this.subscription.unsubscribe();
  }
}