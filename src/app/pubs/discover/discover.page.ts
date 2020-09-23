import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private _placesService: PlacesService) { }

  ngOnInit() { //fetch place when loaded; no update for now so fetch 1 time just good enough
    this.loadedPlaces = this._placesService.places; //get the getter
  }

}
