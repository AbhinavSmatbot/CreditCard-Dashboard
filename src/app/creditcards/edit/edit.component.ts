import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardService } from 'src/app/services/creditcard.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editCreditCardForm: FormGroup | any;
  creditCardData: { } | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private creditCardServices: CreditcardService,
    private router:Router
  ) {
      let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.editCreditCardForm = this.formBuilder.group({
      id:[id],
      cardName: ['', Validators.required],
      description: ['', Validators.required],
      bankName: ['', Validators.required],
      maxCredit: ['', Validators.required],
      intrestRate: ['', Validators.required],
      active: [true, Validators.required],
      recommendedScore: ['', Validators.required],
      annualFee: ['', Validators.required],
      termAndConditions: ['555', Validators.required],
      createdDate: ['uuyduyuydufuyf', Validators.required],
      updateDate: ['jhjcjcuj', Validators.required]
    })
  }

  ngOnInit(){
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');

    if(id != 0){
      this.creditCardServices.getCreditCardbyID(id).subscribe(data=>{
       console.log('dddddddd',data)
       this.creditCardData = data;
       this.editCreditCardForm?.patchValue(this.creditCardData)
      })
    }
  }



  onSubmit() {
    if(this.editCreditCardForm?.valid){
     const updateFormData = this.editCreditCardForm.value;
     console.log(updateFormData)
     this.creditCardServices.updateCreditCard(updateFormData).subscribe(data=>{
         console.log('uuuuuuuuu',data)
         this.router.navigate(['/creditcards'])
     })
    }
    console.log('rrrrrrrrrr')
  }
}
