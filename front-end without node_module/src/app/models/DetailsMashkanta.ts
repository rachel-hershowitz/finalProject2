export class DetailsMashkanta {
    userId: string;
    salaryYou: number;
    salaryZug: number;
    adressHouse: string;
    notes: string;
    whichApartment: WhichApartment;
}

export enum WhichApartment {
    newApartment, discountApartment, oldApartment
}

export enum ApartmentDesignation {
    signalApartment, changeApartment, hashkaaApartment
}