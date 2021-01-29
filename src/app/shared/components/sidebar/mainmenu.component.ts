import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./styles.component.scss']
})
export class MainmenuComponent implements OnInit {

  public sidedarIsOpen = false;
  public readonly logo = './assets/img/logo.png';
  
  constructor(
    private router: Router,
    private authSvc: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSidebarCollapse() {
    this.sidedarIsOpen = !this.sidedarIsOpen;
  }

  onLogout() {
    this.authSvc.logout();
    this.router.navigate(['/login']);
  }
}