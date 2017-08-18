export interface UserParams {
    id: String;
    name: String;
}

export class User {
    id: String;
    name: String;
    // username: string;
    // password: string;
    // firstName: string;
    // lastName: string;

    constructor( params: UserParams ) {
        const { id, name } = params;
        this.id = id;
        this.name = name;
    }
}
