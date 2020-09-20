import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainViewService {
  
  dataSource = new Subject();
  constructor() { }

  setMainViewData = (item: any) => {
    this.dataSource.next(item);
  }

 
}
