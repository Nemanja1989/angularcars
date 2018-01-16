import {Component, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {CarService} from '../../services/car.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

    private car: Car;
    public years = [];

    constructor(private _carsService: CarService,
                private router: Router
    ) {
        // create empty car because of ngModel in form
        this.car = new Car();
        this.years = Array(27).fill(1).map((x, i) => 1991 + i);
    }


    submit() {
        this._carsService.addCar(this.car);
        this.router.navigate(['/cars']);
    }


    ngOnInit() {
    }

}
