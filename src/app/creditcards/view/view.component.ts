import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
// import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardService } from 'src/app/services/creditcard.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  creditCardDetails:any =  []; 
  creditCardId!: number;
  
  constructor(private creditcardService:CreditcardService,private router:ActivatedRoute){
   this.creditCardId =  parseInt(this.router.snapshot.paramMap.get('id') || '');
    this.creditcardService.getCreditCardbyID(this.creditCardId).subscribe((data) => {
      this.creditCardDetails = data;
      console.log(this.creditCardDetails)
    })
  }

}
