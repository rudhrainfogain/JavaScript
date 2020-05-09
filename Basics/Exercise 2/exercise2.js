var user = ['Rudhra', 'Namit'];
var price = [20, 12, 15];
var product = ['Potatoes', 'Apples', 'Lemons'];

for (var i = 0; i < user.length; i++) {
    var currentUser = user[i];
    if (currentUser === 'Rudhra') {
        console.log(currentUser + ' bought :');
        for (var j = 0; j < product.length; j++) {
            console.log(product[j] + ' =  $' + (price[j] - 3));
        }
    } else {
        console.log(currentUser + ' bought :');
        for (var j = 0; j < product.length; j++) {
            console.log(product[j] + ' =  $' + price[j]);
        }
    }
}