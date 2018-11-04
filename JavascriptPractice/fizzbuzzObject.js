function FizzBuzzer(max){
    this.max = max;
    this.fizzBuzz = function fizzBuzz(){
        for (let i = 1; i <= max; i++){
            if (i % 15 === 0){
                console.log('fizzbuzz')
            }
            else if ( i % 5 === 0 ){
                console.log('buzz')
            }
            else if ( i % 3 === 0 ){
                console.log('fizz')
            }
            else {
                console.log(i);
            }
        }
    }
}

var fb = new FizzBuzzer(20)

fb.fizzBuzz()