import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  foods:any=[]
  public grandTotal:any=0
  totalItem:any
  foodList:any=[]
  constructor(private cartServce:CartService) { }

  ngOnInit(): void {
    this.cartServce.getFoods()
    .subscribe((data)=>{
      this.foods = data
      this.totalItem=data.length
      this.grandTotal = this.cartServce.getTotalPrice()
    })
  }
  removeItem(food:any){
    this.cartServce.removeCartItem(food)
  }
  emptyCart(){
    this.cartServce.removeAllItem()
  }
  changeQuantity(item:any,quantity:any){
    const qty =parseInt(quantity)
    this.cartServce.changeQuantity(item.id,qty)
  }
  checkout(item:any){
    this.cartServce.checkout(item)
  }
}
