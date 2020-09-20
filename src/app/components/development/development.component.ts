import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  inputDataDev = {
    "dataUnit": [
      {
        name: 'Prossess Dev',
        module: [
          {
            name: "Prossess Development",
            description: "Prossess Development",
            database: "DAVOS",
            url: "http://prossessdevse.scania.com/forms/frmservlet?",
            version: "Release: 2020.2",
            
          }
        ]
      },
     
    ],
    name:'vishal',
    
    "commonApplication": [
      {
        name: 'COM',
        module: [
          {
            "name": "com",
            "description": "COM",
            "database": null,
            "url": "http://prossessprodse.scania.com/forms/frmservlet?",
            "version": "Release: 08.001.02"
            
          }
        ]
      },
      {
        name: 'SIAM',
        module: [
          {
            "name": "siam",
            "description": "SIAM",
            "database": null,
            "url": "http://monadevse.scania.com/forms/frmservlet?",
            "version": "Release: 08.001.02"
           
          }
        ]
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
