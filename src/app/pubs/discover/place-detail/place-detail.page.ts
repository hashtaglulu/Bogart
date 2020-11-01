import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/booking/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/pubs/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    //this.router.navigateByUrl('/pubs/tabs/discover');
    //this.navCtrl.navigateBack('/pubs/tabs/discover');
    this.actionSheetCtrl
      .create({
        header: 'Coose an Action',
        buttons: [
          {
            text: 'Selectare dată',
            handler: () => {
              this.openBookingModal('select');
            }
          },
          {
            text: 'Dată aleatorie',
            handler: () => {
              this.openBookingModal('random');
            }
          },
          {
            text: 'Închide',
            role: 'cancel'
          }
        ]
      })
      .then(actionSheetEl =>{
        actionSheetEl.present();
      });
    
  }

  openBookingModal(mode: 'select'|'random'){
    console.log(mode);
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });
  }
}
