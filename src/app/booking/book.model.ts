//define how a booking object looks like

export class Book{
    constructor(
        public id: string,
        public placeId: string, 
        public userId: string, 
        public placeTitle: string,
        public guestNumber: number
        //selected time to add when add user input fields and functionality
        ){}
}