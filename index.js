var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * (100-1)) + 1;
  var newCart = Object.assign({}, { [item] : itemPrice });
  cart.push(newCart);
  console.log('${item} has been added to your cart.');
  return cart;
}

function viewCart() {
  if cart.length === 0 {
  return console.log("Your shopping cart is empty.")}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
