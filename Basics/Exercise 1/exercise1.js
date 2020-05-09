var os = 'windows';
var type = 'Laptop';
var value = 100;
if (os == 'windows') {
    console.log('Super windows');
} else {
    console.log('Incredible Mac');
}


if (type === 'Desktop') {
    //to display an additional ' just use "" instead of '' the use ' somewhere in between
    console.log("It's a Desktop");
} else if (type === 'Laptop') {
    //to use an aditional ' in a string use escape character \
    console.log('It\'s a Laptop');
} else {
    console.log('It\'s a All In One');
}

switch (value) {
    case 100:
        console.log('The price is $' + value + ', awesome discount');
        break;
    case 200:
        console.log('The price is $' + value + ', Super deal');
        break;
    default:
        console.log('The price is $n/a');
}