import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Place } from '../pubs/place.model';
import { PlacesService } from '../pubs/places.service';

@Component({
  selector: 'app-admin-places',
  templateUrl: './admin-places.component.html',
  styleUrls: ['./admin-places.component.scss'],
})
export class AdminPlacesComponent implements OnInit {

  allPlaces: Place[];

  constructor(
    private _placesService: PlacesService,
    private actionSheetCtrl: ActionSheetController
    ) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
    let getSubscription = this._placesService.getPlacesAPIObservable();
    getSubscription.subscribe(data => {
      this.allPlaces = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as {})
          } as Place;
        });
    });
  }

  deletePlace(place: Place) {
    this._placesService.deletePlace(place);
  }

  openWarningModal(place: Place){
    this.actionSheetCtrl
      .create({
        header: 'Sunteți sigur că doriți să ștergeți intrarea?',
        buttons: [
          {
            text: 'Nu sunt sigur!',
            role: 'cancel',
            icon: 'close',
          },
          {
            text: 'Da! Doresc să șterg intrarea.',
            handler: () => {
              this.deletePlace(place);
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
