import {Injectable} from '@angular/core';
import {Car} from '../models/car';

@Injectable()
export class CarService {

    private cars;
    private idCount = 0;

    constructor() {
        this.cars = [
            {
                id: 1,
                mark: 'Fica',
                model: '750',
                year: '1990',
                maxSpeed: 90,
                isAutomatic: false,
                engine: 'petrol',
                numberOfDoors: 2
            },
            {
                id: 2,
                mark: 'Jugo',
                model: '45',
                year: '1989',
                maxSpeed: 110,
                isAutomatic: false,
                engine: 'gas',
                numberOfDoors: 4
            },
            {
                id: 3,
                mark: 'Citroen',
                model: 'Saxo',
                year: '2002',
                maxSpeed: 140,
                isAutomatic: false,
                engine: 'petrol',
                numberOfDoors: 5
            },
            {
                id: 3,
                mark: 'BMW',
                model: 'M5',
                year: '2017',
                maxSpeed: 270,
                isAutomatic: true,
                engine: 'petrol',
                numberOfDoors: 5
            }
        ];

        // get bigest ID
        for (let i = 0; i <= this.cars.length - 1; i++) {
            if (this.cars[i]['id'] > this.idCount) {
                this.idCount = this.cars[i]['id'];
            }
        }
    }

    getCars() {
        return this.cars;
    }

    addCar(car) {
        car['id'] = this.idCount++;
        this.cars.push(car);
    }


}
