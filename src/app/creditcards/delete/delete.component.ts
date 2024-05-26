import { Component } from '@angular/core';
import { CreditcardService } from 'src/app/services/creditcard.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  creditCarId:number | undefined;
  private destory:Subject<void> = new Subject<void>();

  constructor(private creditcardService:CreditcardService,private router:ActivatedRoute,private routewr:Router,private _snackBar: MatSnackBar){
    this.creditCarId = parseInt(this.router.snapshot.paramMap.get('id') || '')
   this.creditcardService.deleteCreditCard(this.creditCarId)
   .pipe(takeUntil(this.destory))
   .subscribe((data)=>{
     console.log(data);
     setTimeout(() => {
      // alert('Credited Card Deleted Successfully')
      this.openSnackBar('Credited Card Deleted Successfully')
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

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  ngOnDestory(){
    this.destory.next();
    this.destory.complete();
  }

}
