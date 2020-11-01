import { Injectable } from "@angular/core";

import{ Book } from "./book.model";


@Injectable({ providedIn: 'root' })//application wide(can inject it anywhere)
export class BookService{
    private _bookings: Book[] = [
        {
            id: 'ceva',
            placeId: 'p1',
            placeTitle: 'Scart',
            guestNumber: 2,
            userId: 'cineva'
        }
    ]; //import reference to it

    get bookings(){
        return [...this._bookings];
    }
}