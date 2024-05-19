import { Component } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

const TABLE_DATA:CreditCard[] = [
  {
    id:1,
    name:'bank of america',
    bankName:"bank of america",
    description:"bank provide offer",
    maxCredit:8000,
    active:true,
    annualFee:0,
    intrestRate:13.5,
    // "interoOffer":200,
    recommendedScore:600-800,
    termAndConditions:"the following credit apply for the card",
    createdDate:"15-05-2024",
    updateDate:"19-05-2024",
},
{
  id:2,
  name:'bank of america',
  bankName:"bank of america",
  description:"bank provide offer",
  maxCredit:8000,
  active:true,
  annualFee:0,
  intrestRate:13.5,
  // "interoOffer":200,
  recommendedScore:600-800,
  termAndConditions:"the following credit apply for the card",
  createdDate:"15-05-2024",
  updateDate:"19-05-2024",
},
{
  id:3,
  name:'bank of america',
  bankName:"bank of america",
  description:"bank provide offer",
  maxCredit:8000,
  active:true,
  annualFee:0,
  intrestRate:13.5,
  // "interoOffer":200,
  recommendedScore:600-800,
  termAndConditions:"the following credit apply for the card",
  createdDate:"15-05-2024",
  updateDate:"19-05-2024",
},
{
  id:4,
  name:'bank of america',
  bankName:"bank of america",
  description:"bank provide offer",
  maxCredit:8000,
  active:true,
  annualFee:0,
  intrestRate:13.5,
  // "interoOffer":200,
  recommendedScore:600-800,
  termAndConditions:"the following credit apply for the card",
  createdDate:"15-05-2024",
  updateDate:"19-05-2024",
},
{
  id:5,
  name:'bank of america',
  bankName:"bank of america",
  description:"bank provide offer",
  maxCredit:8000,
  active:true,
  annualFee:0,
  intrestRate:13.5,
  // "interoOffer":200,
  recommendedScore:600-800,
  termAndConditions:"the following credit apply for the card",
  createdDate:"15-05-2024",
  updateDate:"19-05-2024",
},
{
  id:6,
  name:'bank of america',
  bankName:"bank of america",
  description:"bank provide offer",
  maxCredit:8000,
  active:true,
  annualFee:0,
  intrestRate:13.5,
  // "interoOffer":200,
  recommendedScore:600-800,
  termAndConditions:"the following credit apply for the card",
  createdDate:"15-05-2024",
  updateDate:"19-05-2024",
},
{
  id:7,
  name:'bank of america',
  bankName:"bank of america",
  description:"bank provide offer",
  maxCredit:8000,
  active:true,
  annualFee:0,
  intrestRate:13.5,
  // "interoOffer":200,
  recommendedScore:600-800,
  termAndConditions:"the following credit apply for the card",
  createdDate:"15-05-2024",
  updateDate:"19-05-2024",
},
]

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  displayColumns = ['select','id','name','bankName','description','maxCredit','intrestRate','active','recommendedScore'];
  dataSources = new MatTableDataSource(TABLE_DATA);
  selection = new SelectionModel(true,[]);

}
