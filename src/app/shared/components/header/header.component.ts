import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public titleFromBreadCrumbs: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(title: string): void {
    this.titleFromBreadCrumbs = title;
  }

}