import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    public cars: Car;

    constructor(private _carsService: CarService) {
        this.cars = this._carsService.getCars();
    }

    ngOnInit() {
    }

}
