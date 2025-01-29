import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';

const shoppingCart = new ShoppingCart();
const messagin = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messagin, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('mochila', 59.9));
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 5.9 });
shoppingCart.addItem({ name: 'mochila', price: 59.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
