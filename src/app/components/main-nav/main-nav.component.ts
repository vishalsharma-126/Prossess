import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  
  
  items = [{
      value: 'PRODUCTION - SEU',
      route:"/production-seu"
    },
    {
      value: 'ACCEPTANCE - SEU',
      route:"/acceptance-seu"
    },
    {
      value: 'DEVELOPMENT',
      route:"/development"
    },
    {
      value: 'INFORMATION',
      route:"/information"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
