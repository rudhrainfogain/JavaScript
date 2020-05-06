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