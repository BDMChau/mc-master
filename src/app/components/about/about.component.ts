import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  colorBtn: string = '#0000002e';

  constructor() { }

  ngOnInit(): void {
  }


}
