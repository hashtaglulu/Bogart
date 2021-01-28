import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Place } from '../pubs/place.model';
import { Booking, BookingViewDTO } from '../pubs/booking.model';
import { BookingService } from '../pubs/booking.service';
import { PlacesService } from '../pubs/places.service';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {

  myBookings: BookingViewDTO[];

  constructor(
    private _placesService: PlacesService,
    private _bookingsService: BookingService,
    private _authService: AuthService,
    private actionSheetCtrl: ActionSheetController
    ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this._bookingsService.getBookingsForSpecificUserAPIObservable(this._authService.getUserId)
    .subscribe(data =>
      {
        let bookingsRaw = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as {})
          } as Booking;
        });

        this.myBookings = bookingsRaw.map(booking => {
          let bookingView = {} as BookingViewDTO;
          this._placesService.getPlaceAPIObservable(booking.placeId).pipe(
            map(place => place.data() as Place)
          )
          .subscribe( place => {
            bookingView.placeTitle = place.title;
            bookingView.placeImage = place.imageUrl;
          });
          bookingView.id = booking.id;
          bookingView.name = booking.name;
          bookingView.dateISONoTime = booking.dateISONoTime;
          bookingView.nrOfReservedSeats = booking.reservedSeats.length; 
          return bookingView;
        });
      }
    );
  }

  deleteBooking(bookingView: BookingViewDTO) {
    this._bookingsService.deleteBooking(bookingView.id);
  }

  openWarningModal(bookingView: BookingViewDTO){
    this.actionSheetCtrl
      .create({
        header: 'Sunteți sigur că doriți să ștergeți rezervarea?',
        buttons: [
          {
            text: 'Nu sunt sigur!',
            role: 'cancel',
            icon: 'close',
          },
          {
            text: 'Da! Doresc să șterg rezervarea.',
            handler: () => {
              this.deleteBooking(bookingView);
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
