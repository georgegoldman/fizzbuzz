var range = 100;
let count = 0;

while (count < range) {
    count++
    if (count % 3 == 0) {

        console.log('fizz');

    } else if (count % 5 == 0) {

        console.log('Buzz');

    } else if (count % (3 * 5) == 0) {

        console.log('fizzBuzz');

    } else {

        console.log(count);

    }

}