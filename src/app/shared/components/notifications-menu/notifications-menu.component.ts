import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.scss']
})
export class NotificationsMenuComponent implements OnInit {

  public menuIsOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuCollapse() {
    console.log(this.menuIsOpen);
    this.menuIsOpen = !this.menuIsOpen;
  }
}
