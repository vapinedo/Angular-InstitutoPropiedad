import { Component, OnInit } from '@angular/core';

import { NotificationMenu } from '../../../core/services/notification-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public titleFromBreadCrumbs: string;

  constructor(private notificationMenuSvc: NotificationMenu) { }

  ngOnInit(): void {
  }

  getTitle(title: string): void {
    this.titleFromBreadCrumbs = title;
  }

  onOpenMenu() {
    this.notificationMenuSvc.OpenMenu();
  }

}