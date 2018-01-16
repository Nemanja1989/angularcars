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

    public car: Car;
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

    public showPreview() {
        alert(`
            Mark: ${this.car.mark},
            Model: ${this.car.model},
            Engine: ${this.car.engine},
            Year: ${this.car.year},
            Number of doors: ${this.car.numberOfDoors},
            Max speed: ${this.car.maxSpeed},
            Type of engine: ${this.car.isAutomatic},
        `);
    }



    ngOnInit() {
    }

}
