import { Component, OnInit } from '@angular/core';
import { Cart, cartItem } from 'src/app/components/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Cart = {items : [{
    product : 'https://via.placeholder.com/150',
    name : 'snickers',
    price : 150,
    quantity : 2,
    id : 1
  },
  {
    product : 'https://via.placeholder.com/150',
    name : 'snickers',
    price : 150,
    quantity : 3,
    id : 2
  },


]}
  dataSource : Array<cartItem> = []
  displayedColumns : Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit() : void {

    this.dataSource = this.cart.items
  }


  getTotal(items : Array<cartItem> ) : number {
    return items.map((item) => item.price * item.quantity).reduce((prev,current) => prev + current, 0)

  }


}
