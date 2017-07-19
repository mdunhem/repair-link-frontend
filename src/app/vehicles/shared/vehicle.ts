
// export interface Vehicle {
//     id: number;
//     year: number;
//     make: string;
//     model: string;
// }

export interface VehicleParams {
    id: Number;
    vin: String;
    year: Number;
    make: String;
    model: String;
    color?: String;
    trim?: String;
    odometer?: Number;
    licensePlate?: String;
    bodyType?: String;
}

export class Vehicle {

    id: Number;

    vin: String;

    year: Number;

    make: String;

    model: String;

    color: String | null;

    trim: String | null;

    odometer: Number | null;

    licensePlate: String | null;

    bodyType: String | null;

    get name(): String {
        return `${this.year} ${this.make} ${this.model}`;
    }

    constructor( params: VehicleParams ) {
        let {id, vin, year, make, model, color, trim, odometer, licensePlate, bodyType} = params;
        this.id = id;
        this.vin = vin;
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color != null ? color : null;
        this.trim = trim != null ? trim : null;
        this.odometer = odometer != null ? odometer : null;
        this.licensePlate = licensePlate != null ? licensePlate : null;
        this.bodyType = bodyType != null ? bodyType : null;
    }
}
