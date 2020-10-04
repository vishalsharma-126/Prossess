import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-seu',
  templateUrl: './production-seu.component.html',
  styleUrls: ['./production-seu.component.scss']
})
export class ProductionSeuComponent implements OnInit {

  inputData = {
    "dataUnit": [
      {
        name: 'Chassis Truck & Bus (Södertälje)',
        module: [
          {
            name: "TRUCK - PROD",
            description: "Chassis Truck Södertälje",
            database: "ROXEN",
            url: "sfstarter:http://prossessprodse.scania.com/forms/frmservlet?config=pros&userid=@ROXEN[!]PROSSESS_FRMSAL_PRODUCTION_SEU",
            img: "../../../assets/images/scania_truck.png",
            version: "Release: 2020.2",
            
          },
          {
            name: "BUS - PROD",
            description: "Chassis Bus Södertälje",
            database: "BOREN",
            url: "sfstarter:http://prossessprodse.scania.com/forms/frmservlet?config=pros&userid=@BOREN[!]PROSSESS_FRMSAL_PRODUCTION_SEU",
            img: "../../../assets/images/scania_bus.jpg",
            version: "Release: 2020.2",
            
          }
        ]
      },
      {
        name: 'Chassis (Angers)',
        module: [

          {
            name: "TRUCK - PROD",
            description: "Chassis Truck Angers",
            database: "NANCY",
            url: "sfstarter:http://prossessprodse.scania.com/forms/frmservlet?config=pros&userid=@NANCY[!]PROSSESS_FRMSAL_PRODUCTION_SEU",
            img: "../../../assets/images/scania_truck.png",
            version: "Release: 2020.2",
            
          },
        ]
      },
      {
        name: 'Chassis (Zwolle)',
        module: [

          {
            name: "TRUCK - PROD",
            description: "Truck Chassis Zwolle",
            database: "ASSEN",
            url: "sfstarter:http://prossessprodse.scania.com/forms/frmservlet?config=pros&userid=@ASSEN[!]PROSSESS_FRMSAL_PROD_SEU",
            img: "../../../assets/images/scania_truck.png",
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
            "name": "COM",
            "description": "COM",
            "database": null,
            "url": "http://prossessprodse.scania.com/forms/frmservlet?",
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
