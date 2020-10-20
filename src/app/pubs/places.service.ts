import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Scart',
      'cool place, might come back later',
      'https://d2fdt3nym3n14p.cloudfront.net/venue/2107/gallery/5309/conversions/scart-loc-lejer-13866-big.jpg',
      ['luni-vineri: 09:00-23:00', 'sambata: 11:00-23:00', 'duminica: 14:00-23:00']
    ),
    new Place(
      'p2',
      '80`sPub',
      'same',
      'https://timisoara.fest.ro/files/places/8/image_884_2_preview.jpg',
      ['luni-joi: 10:00-02:00', 'vineri: 10:00-05:00' ,'sambata: 10:00-05:00', 'duminica: 10:00-02:00']
    ),
  ];

  get places(){
    return [...this._places]; //return a copy of the array in order to directly edit the places 
  }

  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)}; //clone the entire object
  }
}
