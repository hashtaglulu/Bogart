import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
// import { SegmentChangeEventDetail } from '@ionic/core';
import { FavouritePlacesService } from '../favourite-places.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  allPlaces: Place[];
  selectedPlace: Place;
  @ViewChild('pageTop') pageTop;

  constructor(
    private _favouritePlaces: FavouritePlacesService,
    private _placesService: PlacesService,
    private _authService: AuthService,
    private menuCtrl: MenuController,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { 
    //fetch all places when loaded; no update for now so fetch 1 time just good enough
    this._placesService.allPlaces.subscribe(data =>
      {
        if (data) {
          this.allPlaces = data;
          this.selectedPlace = this.allPlaces[0];
        }
      }
    );
  }

  onOpenMenu(){
    this.menuCtrl.toggle();
  }

  selectPlace(place: Place) {
    this.selectedPlace = place;
    this.pageTop.scrollToTop();
  }

  addToFavourites(placeId: string) {
    this._favouritePlaces.getFavouritePlaceAPIObservableAsData(this._authService.getUserId)
      .subscribe(data => {
        if (Array.isArray(data) && data.length) {
          let favouritePlaceObject = data.pop();
          this._favouritePlaces.addFavouritePlaceAPI(placeId, favouritePlaceObject);
        } else {
          this._favouritePlaces.createFavouritePlaceAPIPromise(this._authService.getUserId, placeId);
        }
      });
  }

  presentAlert(title:string, placeId: string) {
    this.alertController
      .create({
        cssClass: 'my-custom-class',
        header: 'Adaugă la favorite',
        // subHeader: 'Subtitle',
        message: `Adaugă ${title} la locații favorite?`,
        buttons: [
          {
            text: 'Nu',
            role: 'cancel',
            handler: () => this.router.navigateByUrl('/pubs/tabs/discover')
          },
          {
            text: 'Da',
            handler: () => this.addToFavourites(placeId)
          }
        ]
      })
      .then(alert => {
        alert.present();
        alert.onDidDismiss().then((data) => this.router.navigateByUrl('/pubs/tabs/discover'));
      });
  }
}
