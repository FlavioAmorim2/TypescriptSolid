type CartItem = { name: string; price: number };
type orderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = [];
    private _orderStatus: orderStatus = 'open';

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): orderStatus {
        return this.orderStatus;
    }

    total(): number {
        return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
    }

    checkout(): void {
        if(this.isEmpty()) {
            console.log('Seu carrinho está vazio');
            return;
        }

        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido com total de R$ ${this.total()} foi recebido.`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log('Mensagem enviada:', msg);
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso');
    }

    clear(): void {
        console.log('Carrinho de compras foi limpo');
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 49.90 });
shoppingCart.addItem({ name: 'Caderno', price: 5.90 });
shoppingCart.addItem({ name: 'mochila', price: 59.90});


console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout()
console.log(shoppingCart.orderStatus);
