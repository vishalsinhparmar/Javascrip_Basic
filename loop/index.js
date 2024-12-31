const arr = [2,3,4,5,6,30];

function sum(arr){
    let sum = 0
     for(let num of arr){
         sum+= num
     }

     console.log(sum);
};

// sum(arr);


function evenNumber(arr){
const evenNumber = [];
    for(let num of arr){
        if(num%2===0){
            evenNumber.push(num)
        }
    }
    console.log(evenNumber)
}

// evenNumber(arr)
const string = 'vishalsinh'
function reverseString(string){
       let result = ''
   
        for(let char of string){
            console.log(char)
            result=char+result
            console.log(result)
        }

        console.log(result)
};
// reverseString(string);

// multiplication using in 

function multiplication(num){
       const arr = [];

       for(let i=1; i<=10; i++){
            arr.push(num*i)
       };

       console.log(arr)
};

// multiplication(3);

//  the devided by the 3 === fizz and devided by a 5===buzz and both of the devided by the 3===and 5=== this are print a value of fizzBuzz

function fizzBuzz(){
    for(i=0; i<=100;i++){
        if(i%3===0){
          console.log('fizz')
        }else if(i%5===0){
           console.log('buzz')
        }else if(i%3===0 && i%5===0){
            console.log('fizzBuzz')
        }else{
            console.log(i)
        }
    }
};
// fizzBuzz();
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz();