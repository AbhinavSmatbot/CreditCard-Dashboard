import { Component } from '@angular/core';
import { CreditcardService } from 'src/app/services/creditcard.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  creditCarId:number | undefined;

  constructor(private creditcardService:CreditcardService,private router:ActivatedRoute,private routewr:Router){
    this.creditCarId = parseInt(this.router.snapshot.paramMap.get('id') || '')
   this.creditcardService.deleteCreditCard(this.creditCarId).subscribe((data)=>{
     console.log(data);
     setTimeout(() => {
      alert('Credited Card Deleted Successfully')
      this.routewr.navigate(['/creditcards']);
      this.getallCreditCard();
     }, 1000);
     
   })
  }

  getallCreditCard(){
    this.creditcardService.getCreditCard().subscribe((data)=>{
      let stttt = data;
    })
  }

}
