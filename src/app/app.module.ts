import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {CarsComponent} from './components/cars/cars.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CarService} from './services/car.service';
import { CarFormComponent } from './components/car-form/car-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        CarsComponent,
        NavbarComponent,
        CarFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        CarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
