import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  form2: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() 
  {  //get id from url
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/pubs/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));

      this.form2 = new FormGroup({
        title2 : new FormControl (this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description2 : new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(200)]
        })
      })
    });
  }

  onUpdateOffer()
  {
    if(!this.form2.valid)
    {
      return;
    }
    console.log('updated my location');
    console.log(this.form2);
  }
}