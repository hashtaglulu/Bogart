import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];

  constructor(private _placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() { //fetch place when loaded; no update for now so fetch 1 time just good enough
    this.loadedPlaces = this._placesService.places; //get the getter
    this.listedLoadedPlaces = this.loadedPlaces.slice(1); //sa nu apara prima locatie in lista de scrolat
  }

  onOpenMenu(){
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }

}
