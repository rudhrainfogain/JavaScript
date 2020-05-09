console.log("inside main.js");
console.log("Running from imported js");
//---------------------------------------------Variables-------------------------------------
console.log('---------------------------------------------Variables-------------------------------------');
var Rudhra = 'Rudhra'; //String
var isTrue = false; //Boolean
var number = 10; //Number
var array = [56, 'Tam Tam', true, isTrue]; //Array
var object = {
        name: 'Rudhra',
        LastName: 'Koul'
    } //Array

console.log('variable Rudhra is ' + Rudhra);
console.log('isTrue variable is ' + isTrue);
console.log('Number is ' + number);
console.log('array variable is ' + array);
console.log('object variable is ' + object);
console.log('object.firstname is ' + object.name)
if (isTrue == true) {
    console.log('yeah its true');
}

console.log('length of array is ' + array.length);

console.log('value at position 1  in array is ' + array[1]);
//---------------------------If Else--------------------------------------
console.log('---------------------------If Else--------------------------------------');
var username;
var myName = 'Rudhra koul';
if (username) {
    console.log('username has a value');
} else if (myName === 'Rudhra koul') {
    console.log('myName is ' + myName);
} else {
    console.log('well i guess you hit a roadblock here');
}

if (myName) {
    console.log('myName is ' + myName);

} else if (username === 'MAQBOOL') {
    console.log('username has a value');
} else {
    console.log('well i guess you hit a roadblock here');
}

if (!isTrue) {
    console.log('nahiiiiii keh do ki ye jooth hai');
}

if (isTrue) {
    console.log('nahiiiiii keh do ki ye jooth hai');
} else {
    console.log('yehi satya hai');
}

//---------------------------Switch--------------------------------------
console.log('---------------------------Switch--------------------------------------');
var slot = 5;
switch (slot) {
    case 1:
        console.log('Won a TV');
        break;
    case 2:
        console.log('Won a bike');
        break;
    case 3:
        console.log('Won a PC');
        break;
    case 4:
        console.log('Won a ps2');
        break;
    case 5:
        console.log('Won a car');
        break;
    case 6:
        console.log('Won a GUITAR');
        break;
    default:
        console.log('you won my heart');
        break;
}

//---------------------------Operators--------------------------------------
console.log('---------------------------Operators--------------------------------------');
var previous = 200;
var current = 100;
//---------------------------String concatination and addition--------------------------------------
console.log('---------------------------String concatination and addition-------------------------------------');
console.log('string concatination of two vars ' + previous + current);
console.log(previous + current);
console.log('Addition of two vars ' + (previous + current));

current += previous;
console.log('After addition using += current becomes  ' + current);

var user = 'Rudhra';
var message = 'Welcome back' + user;

console.log(message);

//---------------------------Subtraction--------------------------------------
console.log('---------------------------Subtraction--------------------------------------');
var total = 'total amount is ' + (previous - current);
console.log('subtracted total is ' + total);

console.log('cant subtract a number from astring so ' + ('heya' - current));

//---------------------------Multiplication--------------------------------------
console.log('---------------------------Multiplication--------------------------------------');
var total = 'total amount is ' + (previous * current);
console.log('multiplied total is ' + total);

//---------------------------Division--------------------------------------
console.log('---------------------------Division--------------------------------------');
var total = 'total amount is ' + (previous / current);
console.log('divided total is ' + total);

//---------------------------Modulus--------------------------------------
console.log('---------------------------Modulus--------------------------------------');
var total = 'total amount is ' + (previous % current);
console.log('Modulus total is ' + total);


var a = 22;
var b = 22;
var c = '22';
var d = 33;
//---------------------------Equality--------------------------------------
console.log('---------------------------Equality--------------------------------------');
console.log('is equal == same number ie only value checked ' + (2 == 2));

console.log('is equal == same number differnt var both numbers ie only value checked ' + (a == b));

console.log('is equal == same number different vars one string one number ie only value checked ' + (a == c));

console.log('is equal === same number ie  value and type  checked ' + (2 === 2));

console.log('is equal === same number differnt var both numbers ie ovalue and type  checked ' + (a === b));

console.log('is equal === same number different vars one string one number ie value and type  checked ' + (a === c));


//---------------------------Not equal to--------------------------------------
console.log('----------------------------Not equal to--------------------------------------');

console.log('is equal != same number ie only value checked ' + (2 != 2));

console.log('is equal != same number differnt var both numbers ie only value checked ' + (a != b));

console.log('is equal != same number different vars one string one number ie only value checked ' + (a != c));

console.log('is equal !== same number ie  value and type  checked ' + (2 !== 2));

console.log('is equal !== same number differnt var both numbers ie  value and type  checked ' + (a !== b));

console.log('is equal !== same number different vars one string one number ie value and type  checked ' + (a !== c));

//---------------------------Greater than--------------------------------------
console.log('----------------------------Greater Than--------------------------------------');
console.log('greater than  > same number  ' + (2 > 2));

console.log('greater than  > same number differnt var both numbers  ' + (a > b));

console.log('greater than  > same number different vars one string one number  ' + (a > c));

console.log('greater than  > diff number  ' + (3 > 2));

console.log('greater than  > diff number differnt var both numbers  ' + (d > b));

console.log('greater than  > diff number different vars one string one number  ' + (d > c));

//---------------------------Greater than equal to--------------------------------------
console.log('----------------------------Greater than equal to--------------------------------------');

console.log('greater than equalto >= same number  ' + (2 >= 2));

console.log('greater than equalto >= same number differnt var both numbers  ' + (a >= b));

console.log('greater than equalto >= same number different vars one string one number  ' + (a >= c));

console.log('greater than equalto >= diff number  ' + (3 >= 2));

console.log('greater than equalto >= diff number differnt var both numbers  ' + (d >= b));

console.log('greater than equalto >= diff number different vars one string one number  ' + (d >= c));


//---------------------------Less than--------------------------------------
console.log('----------------------------Less than --------------------------------------');

console.log('less than  < same number  ' + (2 < 2));

console.log('less than  < same number differnt var both numbers  ' + (a < b));

console.log('less than  < same number different vars one string one number  ' + (a < c));

console.log('less than  < diff number  ' + (3 < 2));

console.log('less than  < diff number differnt var both numbers  ' + (d < b));

console.log('less than  < diff number different vars one string one number  ' + (d < c));

//---------------------------Less than equal to --------------------------------------
console.log('----------------------------Less than equal to --------------------------------------');

console.log('less than equalto <= same number  ' + (2 <= 2));

console.log('less than equalto <= same number differnt var both numbers  ' + (a <= b));

console.log('less than equalto <= same number different vars one string one number  ' + (a <= c));

console.log('less than equalto <= diff number  ' + (3 <= 2));

console.log('less than equalto <= diff number differnt var both numbers  ' + (d <= b));

console.log('less than equalto <= diff number different vars one string one number  ' + (d <= c));

//---------------------------Boolean Operators --------------------------------------
console.log('----------------------------Boolean Operators --------------------------------------');

if (1 == 1 && 2 == 3) {
    console.log('Both conditions true');
} else {
    console.log('Both conditions not true');
}


if (1 == 1 || 2 == 3) {
    console.log('At least one  conditions true');
} else {
    console.log('Both conditions are false');
}

if (1 == 1 && 2 == 2) {
    console.log('Both conditions true');
} else {
    console.log('Both conditions not true');
}


if (2 == 1 || 2 == 3) {
    console.log('At least one  conditions true');
} else {
    console.log('Both conditions are false');
}

//---------------------------Ternary Operator --------------------------------------
console.log('----------------------------Ternary Operator --------------------------------------');

var x = 22;
var y = 33;
var z = 22;
var l = '22';
var result = x == y ? 'Equals' : 'Not Equals';
console.log(result);
var result = x == z ? 'Equals' : 'Not Equals';
console.log(result);
var result = x == l ? 'Equals' : 'Not Equals';
console.log(result);
var result = x === l ? 'Equals' : 'Not Equals';
console.log(result);

//---------------------------For Loop --------------------------------------
console.log('----------------------------For Loop --------------------------------------');

var x = 0;
console.log('normal for loop with positive iteration counter');
console.log('');
for (x; x < 5; x++) {
    console.log('iteration number is ' + x);
}


console.log('');
console.log('running for loop backwards');
console.log('');
for (var x = 10; x > 0; x--) {
    console.log('iteration number is ' + x);
}
console.log('');
console.log('normal for loop with increment amount 2');
console.log('');
for (x; x < 5; x += 2) {
    console.log('iteration number is ' + x);
}

console.log('');
console.log('running for loop backwards with decrement amount 2');
console.log('');
for (var x = 10; x > 0; x = x - 2) {
    console.log('iteration number is ' + x);
}

console.log('');
console.log('nested for loop');
console.log('');
for (var x = 10; x > 0; x--) {
    console.log(' Outer loop iteration number is ' + x);
    for (var y = 0; y < 5; y++) {

        console.log('inner loop iteration  number is ' + y);
        console.log('so it is ' + y + 'th iteration of child loop for ' + x + 'th iteration of parent loop')
    }
}

console.log('');
console.log('breaking the loop with break keyword');
console.log('');

for (var x = 10; x > 0; x--) {
    if (x == 5) {
        console.log('The loop should ideally run 10 times but we are stopping it on 5th iteration using break keyword ');
        break;
    }
    console.log('iteration number is ' + x);
}

console.log('');
console.log('skipping an iteration of the loop with continue keyword');
console.log('');

for (var x = 10; x > 0; x--) {
    if (x == 5) {
        console.log('The loop will skip printing the  iteration number for this iteration because the rest of the code for this iteration is skipped using continue keyword');
        continue;
    }
    console.log('iteration number is ' + x);
}

var users = ['chetna', 'vrinda', 'namit', 'neeraj', 'naincy', 'karanbir', 'malay', 'niket', 'shobhit'];

for (var i = 0; i < users.length; i++) {

    console.log('user ' + i + ' is ' + users[i]);
}

//---------------------------While Loop --------------------------------------
console.log('----------------------------While Loop --------------------------------------');

var logger = true;
var k = 5;
var l = 0;
var m = 0;
console.log('');
while (k > 0) {
    console.log('iteration number' + k);
    k--;
}
console.log('');
while (l < 10) {
    console.log('iteration number' + l);
    l++;
}
console.log('');
while (logger) {
    if (m == 5) {
        logger = false;
    }
    console.log('iteration number' + m);
    m++;
}
console.log('');

//---------------------------Functions --------------------------------------
console.log('----------------------------Functions--------------------------------------');

function welcomeToTheApplication() {
    console.log('welcome anonymous user ');
}

function welcomeUser(userName) {
    console.log('welcome to learn js ' + userName);
}

function welcomeUserToApplication(userName, applicationName) {
    console.log('welcome to ' + applicationName + ' , ' + userName + ' .');
}

function add(a, b) {
    var sum = a + b;
    return sum;
}

function addWithoutAdditionalVariable(a, b) {
    return a + b;
}

welcomeToTheApplication();
welcomeUser('Rudhra');
welcomeUserToApplication('Rudhra', 'Java Script Learner App ')
var result = add(2, 6);
console.log('sum of 2 and 6 is ' + result);

var result = addWithoutAdditionalVariable(4, 6);
console.log('sum of 4 and 6 is ' + result);

console.log('sum of 6 and 6 is ' + addWithoutAdditionalVariable(6, 6));

console.log('');