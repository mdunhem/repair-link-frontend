
// export interface Vehicle {
//     id: number;
//     year: number;
//     make: string;
//     model: string;
// }

export interface VehicleParams {
    _id: String;
    vin: String;
    year: Number;
    make: String;
    vehicleModel: String;
    color?: String;
    trim?: String;
    odometer?: Number;
    licensePlate?: String;
    bodyType?: String;
}

export class Vehicle {

    _id: String;

    vin: String;

    year: Number;

    make: String;

    vehicleModel: String;

    color: String | null;

    trim: String | null;

    odometer: Number | null;

    licensePlate: String | null;

    bodyType: String | null;

    get name(): String {
        return `${this.year} ${this.make} ${this.vehicleModel}`;
    }

    constructor( params: VehicleParams ) {
        let {_id, vin, year, make, vehicleModel, color, trim, odometer, licensePlate, bodyType} = params;
        this._id = _id;
        this.vin = vin;
        this.year = year;
        this.make = make;
        this.vehicleModel = vehicleModel;
        this.color = color != null ? color : null;
        this.trim = trim != null ? trim : null;
        this.odometer = odometer != null ? odometer : null;
        this.licensePlate = licensePlate != null ? licensePlate : null;
        this.bodyType = bodyType != null ? bodyType : null;
    }
}
