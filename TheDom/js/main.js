//---------------------------------------------Selecting dom elements -------------------------------------
console.log('---------------------------------------------Selecting dom elements -------------------------------------');

console.log('Selecting dom elements by Tag name');
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('div')[2]);
console.log('');


console.log('Selecting dom elements by class Name');
console.log(document.getElementsByClassName('different'));
console.log(document.getElementsByClassName('different')[0]);
console.log('');


console.log('Selecting dom elements by id');
console.log(document.getElementById('Unique'));
console.log('');

//---------------------------------------------Selecting dom elements By Query Selector -------------------------------------
console.log('---------------------------------------------Selecting dom elements By Query Selector -------------------------------------');
console.log('');
console.log('Selecting dom elements by Tag name using querySelector');
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('div')[4]);
console.log('');


console.log('Selecting dom elements by class Name');
console.log(document.querySelector('.different'));
console.log(document.querySelectorAll('.different'));
console.log(document.querySelectorAll('.different')[1]);
console.log('');


console.log('Selecting dom elements by id');
console.log(document.querySelector('#Unique'));
console.log('');

//---------------------------------------------Creating dom elements  -------------------------------------
console.log('---------------------------------------------Creating dom elements -------------------------------------');
console.log('');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');

console.log('div created befor any modification looks like' + div1);
console.log('div created befor any modification looks like' + div2);
console.log('div created befor any modification looks like' + div3);

div1.textContent = 'yupsy i was created dynamically';
div1.style.color = 'red';
div2.textContent = 'Yeah i was created dynamically';
div2.style.color = 'green';
div3.textContent = 'yo boy i was created dynamically';
div3.style.color = 'blue';