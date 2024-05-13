import { Component } from '@angular/core';
import { Cart, cartItem } from 'src/app/components/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart : Cart = {items : [{
    product : 'https://via.placeholder.com/150',
    name : 'snickers',
    price : 150,
    quantity : 1,
    id : 1
  }]}
  dataSource : Array<cartItem> = []
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  getTotal(items : Array<cartItem> ) : number {
    return items.map((item) => item.price * item.quantity).reduce((prev,current) => prev + current, 0)

  }

}
