class vehicle{
    constructor(){

    }
    vehicleprop(){

        return 'hello';
    }
}
class vehicleOne extends vehicle{
    constructor(){
        super();
    }
    vehicleO(){

        return 'test';
    }
}
class car extends vehicleOne{
    
    // fuel;
    // tyre;
    // roof;

    constructor(fuel,tyre,roof){
        super();
        this.fuel = fuel;
        this.tyre = tyre;
        this.roof = roof;
        
    }

    fueltype(){
        return this.fuel;
    }
    tyrecount(){
        return this.tyre;
    }
    rooftype(){
        return this.roof;
    }
    fullinfo(){

        return 'runs on '+this.fuel+' and have '+this.tyre+' and has roof '+this.roof;
    }
}

var mercedez = new car('petrol','4','open');
var camry = new car('petrol','4','close');
var bmw = new car('petrol','4','open');

console.log(mercedez.fullinfo());
console.log(camry.fullinfo());
console.log(bmw.fullinfo());
console.log(bmw.vehicleprop());
console.log(bmw.vehicleO());