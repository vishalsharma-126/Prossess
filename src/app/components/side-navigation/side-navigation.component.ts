import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { MainViewService } from '../../services/mainView/main-view.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @Input() data: any;
  constructor(private mainViewService: MainViewService) { }


  ngOnInit(): void {

  }
  onSideNavClick = (item) => {
    console.log(item)
    this.mainViewService.setMainViewData(item)
  }

}
