import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceptance-seu',
  templateUrl: './acceptance-seu.component.html',
  styleUrls: ['./acceptance-seu.component.scss']
})
export class AcceptanceSeuComponent implements OnInit {

  inputDataAcc = {
    "dataUnit": [
      {
        name: 'Chassis Truck & Bus (Södertälje)',
        module: [
          {
            name: "Prossess Truck",
            description: "Chassis Truck Södertälje",
            database: "ROXAS",
            url: "http://prossessprodse.scania.com/forms/frmservlet?",
            version: "Release: 2020.2",
            
          },
          {
            name: "Prossess Bus",
            description: "Chassis Bus Södertälje",
            database: "BOGRA",
            url: "http://prossesstestse.scania.com/forms/frmservlet?",
            version: "Release: 2020.2",
            
          }
        ]
      },
      {
        name: 'Chassis (Angers)',
        module: [

          {
            name: "truck Angers",
            description: "Chassis Truck Angers",
            database: "NAMUR",
            url: "http://prossessprodse.scania.com/forms/frmservlet?",
            version: "Release: 2020.2",
            
          },
        ]
      },
      {
        name: 'Chassis (Zwolle)',
        module: [

          {
            name: "truck Zwolle",
            description: "Truck Chassis Zwolle",
            database: "ASAKA",
            url: "http://prossesstestse.scania.com/forms/frmservlet?",
            version: "Release: 2020.2",
            
          },
        ]
      },
    ],
    
    "commonApplication": [
      {
        name: 'COM',
        module: [
          {
            "name": "com",
            "description": "COM",
            "database": null,
            "url": "http://prossesstestse.scania.com/forms/frmservlet?config=com8000",
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
            "url": "http://prossesstestse.scania.com/forms/frmservlet?config=siam8000",
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
