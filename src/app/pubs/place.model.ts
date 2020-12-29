export class Place{

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public openHours: string[],
        public avaialableFrom: Date,
        public availableTo: Date
        //public menu: string[],
        ){

        }
}