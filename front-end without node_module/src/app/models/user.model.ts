import { Status } from "./status.model";

export class User {

    identity: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    isCustomer: boolean;
    status: Status;

    constructor() {
        this.isCustomer = true;
        // this.status = Status["לא נפתחה פניה"]
    }

}