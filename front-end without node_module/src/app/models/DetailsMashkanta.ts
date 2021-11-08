export class DetailsMashkanta {
    userId: string;
    whichApartment: WhichApartment;
    apartmentDesignation: ApartmentDesignation;
    propertyCity: string;
    propertyPrice: number;
    propertyMarketValue: number;
    amount: number;
    // FinancingSources: Step1Component[];
    contractSign: boolean;
    howMuchLonger: HowMuchLonger;
    numberOfPartner: number;

    firstName: string;
    lastName: string;
    identity: string;
    areaCode: AreaCode;
    pel: string;
    email: string;
    birthDate: Date;
    countryOfBirth: string;
    citizenship: boolean;
    city: string;
    street: string;
    apartmentRegistration: number;

    listFiles: string[] = ["file1", "file2", "file3", "file4"]

    constructor() {
        // this.propertyCity = "";
        // this.propertyPrice = 0;
        // this.propertyMarketValue = 0;
        // this.amount = 0;
        // this.contractSign = false;
        // this.numberOfPartner = 0;
        // this.firstName = "";
        // this.lastName = "";
        // this.identity = "";
        // this.pel = "";
        // this.email = "";
        // this.citizenship = false;
        // this.city = "";
        // this.street = "";
        // this.apartmentRegistration = 0;
    }
}

export enum WhichApartment {
    newApartment, discountApartment, oldApartment
}

export enum ApartmentDesignation {
    signalApartment, changeApartment, mashkantaApartment
}

export enum HowMuchLonger {
    monthAndHalf, threeMonth, betweenMonthToThreeMonth
}

export enum AreaCode {
    "052", "053", "054", "055", "057", "058"
}