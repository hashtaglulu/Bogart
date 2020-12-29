import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form1: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form1 = new FormGroup({
      title1 : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description1 : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(200)]
      }),
      openHours1: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCreateOffer()
  {
    if(!this.form1.valid)
    {
      return;
    }
    console.log('submitted my pub');
    console.log(this.form1);
  }
}
