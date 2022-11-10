import Item from "./Item";

export default class Order {
  item: Item[]

  constructor(item: Item[]) {
    this.item = item
  }

  paymentMethod(value: string) {
    if (value === 'cartão') {
      const subTotal = this.item.reduce((acc, crr) => crr.price + acc, 0)

      subTotal
    }

    if (value === 'dinheiro') {
      this.item.reduce((acc, crr) => crr.price + acc, 0)
    }
  }

};
