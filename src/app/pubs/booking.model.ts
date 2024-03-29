export class Booking {

    constructor(
        // Autogenerated.Firebase
        public id: string,
        public name: string,
        public userId: string,
        public dateISONoTime: string,
        public placeId: string,
        public reservedSeats: [],
    ){ }
}

export class BookingViewDTO {

    constructor(
        // Autogenerated.Firebase
        public id: string,
        public name: string,
        public dateISONoTime: string,
        public placeTitle: string,
        public placeImage: string,
        public nrOfReservedSeats: number,
    ){ }
}
