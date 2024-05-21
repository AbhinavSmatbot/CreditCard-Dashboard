import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  apiUrl = 'http://localhost:3000/creditcards';
  constructor(private httpClient:HttpClient) { }

  createCreditCard(creditcard:CreditCard):Observable<CreditCard>{
    return this.httpClient.post<CreditCard>(this.apiUrl,creditcard);
  }

  getCreditCard():Observable<CreditCard[]>{
    return this.httpClient.get<CreditCard[]>(this.apiUrl);
  }
  getCreditCardbyID(id:number):Observable<CreditCard[]>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.get<CreditCard[]>(url);
  }

  updateCreditCard(creditcard:CreditCard):Observable<CreditCard>{
    const url = `${this.apiUrl}/${creditcard.id}`;
    return this.httpClient.put<CreditCard>(url,creditcard);
  }

  deleteCreditCard(id:number):Observable<void>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.delete<void>(url);
  }
}
