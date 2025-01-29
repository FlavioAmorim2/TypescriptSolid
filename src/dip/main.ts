import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoDiscount } from './classes/interfaces/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/curstomer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messagin = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer('BBB', '123.456.789-00');
const enterpriseCustomer = new EnterpriseCustomer('Name', '2222222222222');
const order = new Order(shoppingCart, messagin, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('mochila', 59.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
