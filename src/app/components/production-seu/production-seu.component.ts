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
            name: "Truck",
            description: "Chassis Truck Södertälje",
            database: "ROXEN",
            url: "http://prossessprodse.scania.com/forms/frmservlet?",
            img: "../../../assets/images/scania_truck.png",
            version: "Release: 2020.2",
            
          },
          {
            name: "Bus",
            description: "Chassis Bus Södertälje",
            database: "BOREN",
            url: "http://prossessprodse.scania.com/forms/frmservlet?",
            img: "../../../assets/images/scania_bus.jpg",
            version: "Release: 2020.2",
            
          }
        ]
      },
      {
        name: 'Chassis (Angers)',
        module: [

          {
            name: "Truck",
            description: "Chassis Truck Angers",
            database: "NANCY",
            url: "http://prossessprodse.scania.com/forms/frmservlet?",
            version: "Release: 2020.2",
            
          },
        ]
      },
      {
        name: 'Chassis (Zwolle)',
        module: [

          {
            name: "Truck",
            description: "Truck Chassis Zwolle",
            database: "ASSEN",
            url: "http://prossessprodse.scania.com/forms/frmservlet?",
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
