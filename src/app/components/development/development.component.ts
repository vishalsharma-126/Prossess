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
            name: "Development",
            description: "Prossess Development",
            database: "DAVOS",
            url: "sfstarter:http://prossessdevse.scania.com/forms/frmservlet?config=pros&userid=@DAVOS[!]PROSSESS_FRMSAL_DEV_SEU",
            img: "../../../assets/images/scania_truck.png",
            version: "Release: 2020.2",
            
          }
        ]
      },
     
    ],

    "commonApplication": [
      {
        name: 'COM',
        module: [
          {
            "name": "COM",
            "description": "COM",
            "database": null,
            "url": "sfstarter:http://prossessdevse.scania.com/forms/frmservlet?config=com8000",
             img: "../../../assets/images/com.JPG",
            "version": "Release: 08.001.02"
            
          }
        ]
      },
      {
        name: 'SIAM',
        module: [
          {
            "name": "SIAM",
            "description": "SIAM",
            "database": null,
            "url": "http://monadevse.scania.com/forms/frmservlet?",
             img: "../../../assets/images/siam.JPG",
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
