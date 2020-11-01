import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBookings: Book[];

  constructor(private bookService: BookService) { }//i`ll inject the bookings here

  ngOnInit() {
    this.loadedBookings = this.bookService.bookings;
  }

  onCancelBooking(bookId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log("cancel booking", bookId);
    //TO DO functionality

  }

}
