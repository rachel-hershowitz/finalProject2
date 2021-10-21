
export class DetailsMashkanta {
    userId: string;
    salaryYou: number;
    salaryZug: number;
    adressHouse: string;
    notes: string;
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
    "052", "053", "054"
}