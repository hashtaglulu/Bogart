import { ChangeDetectorRef, Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { Place } from '../place.model';
import { PlacesService } from '../places.service';

import { FavouritePlace } from '../favouritePlaces.model';
import { FavouritePlacesService } from '../favourite-places.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-my-favourite-places',
  templateUrl: './my-favourite-places.component.html',
  styleUrls: ['./my-favourite-places.component.scss'],
})
export class MyFavouritePlacesComponent {
  favouritePlaceObject: FavouritePlace;
  myFavouritePlaces: Place[] = [];

  constructor(
    private ref: ChangeDetectorRef, 
    private _favouritePlaces: FavouritePlacesService,
    private _placesService: PlacesService,
    private _authService: AuthService,
    private actionSheetCtrl: ActionSheetController
    ) { }

  ionViewWillEnter() {
    this.getFavouritePlaces();
  }

  getFavouritePlaces() {
    this.myFavouritePlaces = [];
    this.ref.detectChanges();
    this._favouritePlaces.getFavouritePlaceAPIObservableAsData(this._authService.getUserId)
      .subscribe(data => {
        if (Array.isArray(data) && data.length) {
          this.favouritePlaceObject = data.pop();

          for (let placeId of this.favouritePlaceObject.favouritePlacesIds) {
            this._placesService.getPlaceAPIObservable(placeId)
              .subscribe(place => { 
                this.myFavouritePlaces.push({id: place.id, ...(place.data() as Place)});
              });
          }
      }
    });
  }


  openWarningModal(placeId: string){
    this.actionSheetCtrl
      .create({
        header: 'Sunteți sigur că doriți să ștergeți intrarea de la favorite?',
        buttons: [
          {
            text: 'Nu sunt sigur!',
            role: 'cancel',
            icon: 'close',
          },
          {
            text: 'Da! Doresc să șterg intrarea.',
            handler: () => {
              this._favouritePlaces.deleteFavouritePlaceAPI(placeId, this.favouritePlaceObject);
              this.getFavouritePlaces();
            },
            icon: 'trash',
          }
        ]
      })
      .then(actionSheetEl =>{
        actionSheetEl.present();
      });
  }

}
