import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { NotificationMenu } from '../../../core/services/notification-menu.service';

@Component({
  selector: 'app-notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.scss']
})
export class NotificationsMenuComponent implements OnInit, OnDestroy {

  public menuIsOpen = false;
  private subscription1 = new Subscription();

  constructor(private notificationMenuSvc: NotificationMenu) { 
    this.subscription1 = this.notificationMenuSvc.showMenu$
      .subscribe(data => this.menuIsOpen = data);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
