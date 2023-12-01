export interface Patient {
    firstName: string;
    middleInitial: string;
    lastName: string;
    DOB: string;
    age: number;
    sex: string;
    SSN: number;
    priority: number;
    height: string;
    weight: number;
    ethnicity: string;
    homeAddress: string;
    emergencyContact: string;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpTime: Date;
    timeSubmitted: Date;
}