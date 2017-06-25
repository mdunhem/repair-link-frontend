
// export interface Vehicle {
//     id: number;
//     year: number;
//     make: string;
//     model: string;
// }

export interface VehicleParams {
    vin: number;
    year: number;
    make: string;
    model: string;
    color?: string;
    trim?: string;
    odometer?: number;
    licensePlate?: string;
    bodyType?: string;
}

export class Vehicle {

    vin: number;

    year: number;

    make: string;

    model: string;

    color: string | null;

    trim: string | null;

    odometer: number | null;

    licensePlate: string | null;

    bodyType: string | null;

    get name(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }

    constructor( params: VehicleParams ) {
        let {vin, year, make, model, color, trim, odometer, licensePlate, bodyType} = params;
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
