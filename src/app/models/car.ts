export class Car {
    id;
    mark;
    model;
    year;
    maxSpeed;
    isAutomatic;
    engine;
    numberOfDoors;

    constructor( id: number , mark: string, model: string, year: number, maxSpeed: number, isAutomatic: boolean, engine: string,
                 numberOfDoors: number) {
        this.id = id;
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.isAutomatic = isAutomatic;
        this.engine = engine;
        this.numberOfDoors = numberOfDoors;

    }


}
