import { Component,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardService } from 'src/app/services/creditcard.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  private subscription: Subscription | undefined;
  constructor(private creditcardService:CreditcardService,private router:Router){
    
  }

  newCreditCard:CreditCard = {
    id:0,
    cardName:'',
    description:'',
    bankName:'',
    maxCredit:0,
    intrestRate:0,
    active: true,
    recommendedScore:0,
    annualFee:0,
    termAndConditions:'term and conditon for credit card',
    createdDate:'',
    updateDate:''

  }
   
  saveCreditCard(){
    this.subscription =  this.creditcardService.createCreditCard(this.newCreditCard).subscribe((res)=>{
      console.log('res',res)
      alert('Credit card added successfully');
      this.router.navigate(['/creditcards'])
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
