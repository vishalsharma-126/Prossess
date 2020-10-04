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
            name: "TRUCK - ACC",
            description: "Chassis Truck Södertälje",
            database: "ROXAS",
            url: "sfstarter:http://prossesstestse.scania.com/forms/frmservlet?config=pros&userid=@ROXAS[!]PROSSESS_FRMSAL_ACC_SEU",
            img: "../../../assets/images/scania_truck.png",
            version: "Release: 2020.2",
            
          },
          {
            name: "BUS - ACC",
            description: "Chassis Bus Södertälje",
            database: "BOGRA",
            url: "sfstarter:http://prossesstestse.scania.com/forms/frmservlet?config=pros&userid=@BOGRA[!]PROSSESS_FRMSAL_ACC_SEU",
            img: "../../../assets/images/scania_bus.jpg",
            version: "Release: 2020.2",
            
          }
        ]
      },
      {
        name: 'Chassis (Angers)',
        module: [

          {
            name: "TRUCK - ACC",
            description: "Chassis Truck Angers",
            database: "NAMUR",
            url: "sfstarter:http://prossesstestse.scania.com/forms/frmservlet?config=pros&userid=@NAMUR[!]PROSSESS_FRMSAL_ACC_SEU",
            img: "../../../assets/images/scania_truck.png",
            version: "Release: 2020.2",
            
          },
        ]
      },
      {
        name: 'Chassis (Zwolle)',
        module: [

          {
            name: "TRUCK - ACC",
            description: "Truck Chassis Zwolle",
            database: "ASAKA",
            url: "sfstarter:http://prossesstestse.scania.com/forms/frmservlet?config=pros&userid=@ASAKA[!]PROSSESS_FRMSAL_ACC_SEU",
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
            "url": "http://prossesstestse.scania.com/forms/frmservlet?config=com8000",
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
            "url": "http://prossesstestse.scania.com/forms/frmservlet?config=siam8000",
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
