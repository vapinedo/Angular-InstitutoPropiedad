import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./styles.component.scss']
})
export class MainmenuComponent implements OnInit {

  public sidedarIsOpen = false;
  public readonly logo = './assets/img/logo.png';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSidebarCollapse() {
    this.sidedarIsOpen = !this.sidedarIsOpen;
  }
}