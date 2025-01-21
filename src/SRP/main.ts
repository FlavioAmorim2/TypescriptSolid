import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.90 });
shoppingCart.addItem({ name: 'Caderno', price: 5.90 });
shoppingCart.addItem({ name: 'mochila', price: 59.90});


console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout()
console.log(shoppingCart.orderStatus);
