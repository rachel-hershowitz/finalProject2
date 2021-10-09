export class User {

    identity: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    isCustomer: boolean;

    constructor() {
        this.isCustomer = true;
    }

}