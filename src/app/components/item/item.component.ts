import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items = [
    { link: 'https://www.facebook.com/mchau105', img: 'assets/img/facebook.svg' },
    { link: 'https://github.com/BDMChau', img: 'assets/img/github.svg' },
    { link: 'https://stackoverflow.com/users/13441094/mchau105', img: 'assets/img/stackoverflow.svg' }
  ];

  colorBtn = '#0000002b';

  constructor() { }

  ngOnInit(): void {
  }

}
