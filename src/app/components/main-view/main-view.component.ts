import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainViewService } from '../../services/mainView/main-view.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  mainViewData: any = '';
  constructor(private mainService: MainViewService) { 
    this.mainService.dataSource.subscribe((v) => {
      this.mainViewData = v;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onImageClick = (item: any) => {
      window.open(item.url, "_blank",  `toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=yes`)
  }

}
