let orderCost = 0;
let order = [];

class Pizza {
  constructor (size = 'medium', toppings = ['cheese'], cost = 10) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
  console.log('in Pizza Constructor', this);
  }

  calculatePizzaCost (){
      console.log('in calc cost');
      switch(this.size){
        case 'small':
          this.cost = 8.99;
          console.log('small');
          break;
        case 'medium':
          this.cost = 10.99;
          console.log('medium');
          break;
        case 'large':
          this.cost = 12.99;
          console.log('large');
          break;
        default:
          console.log('pick a valid size');
      }
      this.cost = this.cost + ((this.toppings.length-1) * 0.99);
      console.log(this.cost);
    }

}//end pizza class

class MeatPizza extends Pizza {
  constructor(size, cost){
    super(size, cost)
    this.toppings = ['cheese', 'pepperonini', 'sausage', 'canadian bacon', 'bacon']
  }
}//end MeatPizza class

let pizza1 = new Pizza ('small', ['cheese', 'pepperonini', 'onion']);
pizza1.calculatePizzaCost();
console.log('pizza1', pizza1);
order.push(pizza1);

let pizza2 = new MeatPizza();
pizza2.calculatePizzaCost();
console.log('pizza2', pizza2);
order.push(pizza2);

let calculateOrderCost = function(order){
  console.log('in ordercost', order);
  for (i=0; i<order.length; i++){
  orderCost = orderCost + order[i].cost
  console.log('orderCost', orderCost);
  }//end for
}

calculateOrderCost(order);
console.log(order, 'order');
console.log(orderCost, 'orderCost');
