import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./styles.component.scss']
})
export class SubmenuComponent implements OnInit {

  @Input() showSubmenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}