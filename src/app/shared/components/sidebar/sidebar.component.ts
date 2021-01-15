import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public logo = './assets/img/logo.png';
  public sidedarIsOpen = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSidebarCollapse() {
    console.log('clicked');
    this.sidedarIsOpen = !this.sidedarIsOpen;
  }
}
