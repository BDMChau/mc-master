import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() isBorder: boolean;
  @Input() isBorder2: boolean;

  colorBtn = '#0000002e';

  constructor() { }

  ngOnInit(): void {
  }




}
