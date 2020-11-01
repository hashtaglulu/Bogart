import { Injectable } from '@angular/core';
import { Pub } from './pub.model';

@Injectable({
  providedIn: 'root'
})
export class PubsService {
 private pubs: Pub[] = [
    {
      id: 'p1',
      title: 'Scart',
      imageUrl:'https://d2fdt3nym3n14p.cloudfront.net/venue/2107/gallery/5309/conversions/scart-loc-lejer-13866-big.jpg',
      open_hours: ['luni-vineri: 09:00-23:00', 'sambata: 11:00-23:00', 'duminica: 14:00-23:00']
    },
    {
      id: 'p2',
      title: '80`sPub',
      imageUrl:'https://timisoara.fest.ro/files/places/8/image_884_2_preview.jpg',
      open_hours: ['luni-joi: 10:00-02:00', 'vineri: 10:00-05:00' ,'sambata: 10:00-05:00', 'duminica: 10:00-02:00']
    }
  ];

  constructor() {
   }
   getAllPubs(){
     return [...this.pubs]; //pulls elements of the array and pulls them here
   }

   getPub(pubId: string){
     return {...this.pubs.find(pub => {
       return pub.id === pubId;
     })};
   }

   deletePub(pubId: string){
     this.pubs = this.pubs.filter(pub =>{
        return pub.id !== pubId;
      });
   }
}
