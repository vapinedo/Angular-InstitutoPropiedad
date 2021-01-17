import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidedarIsOpen = false;
  public logo = './assets/img/logo.png';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSidebarCollapse() {
    console.log('clicked');
    this.sidedarIsOpen = !this.sidedarIsOpen;
  }
}
