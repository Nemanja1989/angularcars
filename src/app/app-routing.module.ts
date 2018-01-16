import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {RouterModule} from '@angular/router';
import {CarFormComponent} from './components/car-form/car-form.component';


const appRoutes: Routes = [
    {path: '', component: CarsComponent},
    {path: 'cars', component: CarsComponent},
    {path: 'add', component: CarFormComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
