import { Injectable } from '@angular/core';

import { FavouritePlace } from './favouritePlaces.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouritePlacesService {

  constructor(private firestore: AngularFirestore) { }

  getFavouritePlaceAPIObservableAsData(userId: string) {
    return this.firestore.collection('favourite-places', ref => ref.where('userId', '==', userId))
    .get()
    .pipe(map((item) => {
      return item.docs.map((dataItem) => {
        return {
          id: dataItem.id,
          ...(dataItem.data() as {})
        } as FavouritePlace;
      });
    }));
  }

  createFavouritePlaceAPIPromise(userId: string, placeId: string) {
    let favouritePlaces: FavouritePlace = {} as FavouritePlace;
    delete favouritePlaces.id;
    favouritePlaces.userId = userId;
    favouritePlaces.favouritePlacesIds = [placeId];

    return this.firestore.collection('favourite-places').add(favouritePlaces);
  }

  updateFavouritePlaceAPIPromise(place: FavouritePlace) {
    return this.firestore.doc('favourite-places/' + place.id).update(place);
  }

  addFavouritePlaceAPI(placeId: string, favouritePlaceObject: FavouritePlace) {
    if (!favouritePlaceObject.favouritePlacesIds.includes(placeId)) {
      favouritePlaceObject.favouritePlacesIds.push(placeId);
      this.updateFavouritePlaceAPIPromise(favouritePlaceObject);
    }
  }

  deleteFavouritePlaceAPI(placeId: string, favouritePlaceObject: FavouritePlace) {
    favouritePlaceObject.favouritePlacesIds = favouritePlaceObject.favouritePlacesIds.filter(item => item !== placeId);
    this.updateFavouritePlaceAPIPromise(favouritePlaceObject);
  }
}
