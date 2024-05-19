export interface CreditCard {
    id:number;
    name:string;
    description:string;
    bankName:string;
    maxCredit:number;
    intrestRate:number;
    active:boolean;
    recommendedScore:number;
    annualFee:number;
    termAndConditions:string;
    createdDate:string;
    updateDate:string
}
