import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  public mainColors = [
    { name: 'Principal', code: '#001a5a' },
    { name: 'Secundario', code: '#3f4f97' },
    { name: 'Alternativo', code: '#a79142' }
  ];
  public highlightsColors = [
    { name: 'Turquesa', code: '#4698cb' },
    { name: 'Verde', code: '#f2d750' },
    { name: 'Gris Claro', code: '#a8a8a8' },
    { name: 'Rojo', code: '#cd0c21'},
    { name: 'Gris Oscuro', code: '#707070'}
  ];
  public textColor = [
    { name:  'Blanco', code: '#f0f7ff' },
    { name:  'Negro', code: '#1b1c1e' },
    { name:  'Negro Claro', code: '#2b2b2b' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
