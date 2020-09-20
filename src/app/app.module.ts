import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductionSeuComponent } from './components/production-seu/production-seu.component';
import { DevelopmentComponent } from './components/development/development.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { AcceptanceSeuComponent } from './components/acceptance-seu/acceptance-seu.component';
import { InformationComponent } from './components/information/information.component';
import { MainViewComponent } from './components/main-view/main-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    ProductionSeuComponent,
    DevelopmentComponent,
    SideNavigationComponent,
    AcceptanceSeuComponent,
    InformationComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
