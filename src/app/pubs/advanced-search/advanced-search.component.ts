import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Place } from '../../pubs/place.model';
import { PlacesService } from '../../pubs/places.service';
import { OpenDays } from '../openDays.model';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
})
export class AdvancedSearchComponent implements OnInit {

  allPlaces: Place[];
  filteredPlaces: Place[];
  openDays;

  constructor(
    private _placesService: PlacesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getPlaces();
    this.openDays = this.formBuilder.group({
      week: [true],
      saturday: [true],
      sunday: [true]
    });
    
    this.openDays.valueChanges.subscribe(() => this.filterList())
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
      this.filterList();
    });
  }

  filterList(event?) {
    this.filteredPlaces = this.allPlaces;
    const searchTerm = event?.target?.value;

    if (!searchTerm && !this.openDays.value)
      return;
  
    if (searchTerm) {
      this.filteredPlaces = this.filteredPlaces.filter(place => {
        if (place.title && place.description && place.schedule && place.openDays && searchTerm) {
          return (place.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ||
            (place.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
            (place.schedule.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });
    }

    this.filteredPlaces = this.filteredPlaces.filter(place => {
      return (place.openDays.week === this.openDays.controls.week.value) &&
      (place.openDays.saturday === this.openDays.controls.saturday.value) &&
      (place.openDays.sunday === this.openDays.controls.sunday.value);
    });
  }
}
