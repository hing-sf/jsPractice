// function Car (options){
//     this.title = options.title;
// }

// Car.prototype.drive = function(){
//     return 'vroom!';
// }

// function Toyota ( options ) {
//     Car.call(this, options);
//     this.color = options.color;
// }


// const car = new Car({title:'Toyota'})
// console.log(car.drive())

// const toyota = new Toyota({ color: 'orange'});

// toyota.constructor.Car
// console.log('Toyota', toyota.color)

class Car {
    constructor ({title}){
        this.title = title;
    }
    drive(){
        return 'vroom!!'
    }
}

class Toyota extends Car {
    constructor( options ){
        super(options)
        this.color = options.color;
    }
    honk() {
        return 'beep beep!;'
    }
}

const car = new Car({title:'Toyota'});
const toyota = new Toyota({title: 'Tesla', color:'orange'});
console.log(toyota.honk())
console.log(toyota.drive())