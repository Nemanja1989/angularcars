import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {RouterModule} from '@angular/router';


const appRoutes: Routes = [
    {path: '', component: CarsComponent},
    {path: 'cars', component: CarsComponent},
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
