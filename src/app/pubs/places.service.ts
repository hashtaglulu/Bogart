import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    {
      id: 'p1',
      title: 'Scart',
      description: 'cool place, might come back later',
      imageUrl:'https://d2fdt3nym3n14p.cloudfront.net/venue/2107/gallery/5309/conversions/scart-loc-lejer-13866-big.jpg',
      openHours: ['luni-vineri: 09:00-23:00', 'sambata: 11:00-23:00', 'duminica: 14:00-23:00']
    },
    {
      id: 'p2',
      title: '80`sPub',
      description: 'same',
      imageUrl:'https://timisoara.fest.ro/files/places/8/image_884_2_preview.jpg',
      openHours: ['luni-joi: 10:00-02:00', 'vineri: 10:00-05:00' ,'sambata: 10:00-05:00', 'duminica: 10:00-02:00']
    },
  ];

  get places(){
    return [...this._places]; //return a copy of the array in order to directly edit the places 
  }

  constructor() { }
}
