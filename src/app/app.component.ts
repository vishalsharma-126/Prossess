import { Component } from '@angular/core';
import { defineCustomElements, addTheme } from 'corporate-ui'; 
import { theme as scania } from 'scania-theme'; 
 
defineCustomElements(); 
addTheme(scania);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prossessStartPage';
} 
