import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CartService {
  cartItems:any=[]
  foodList= new BehaviorSubject([])

  constructor(private http:HttpClient) { }
  getFoods(){
    return this.foodList.asObservable()
  }
  setFood(food:any){
    this.cartItems.push(...food)
    this.foodList.next(food)
  }
  addToCart(food:any){
    this.cartItems.push(food)
    this.foodList.next(this.cartItems)
    alert('Product added successfully')
    this.getTotalPrice()
    console.log(this.cartItems);
    
  }
  getTotalPrice(){
    let grandTotal = 0
    this.cartItems.map((data:any)=>{
      grandTotal += parseInt(data.price)
    })
    console.log(grandTotal);
    
    return grandTotal
  }
  removeCartItem(food:any){
    this.cartItems.map((data:any,index:any)=>{
      if(food.id== data.id){
        this.cartItems.splice(index,1)
      }
    })
    this.foodList.next(this.cartItems)
  }
  removeAllItem(){
    this.cartItems = []
    this.foodList.next(this.cartItems)
  }
  changeQuantity(quantity:any,foodId:any){
    let cart = this.cartItems.find((item:any)=>{
      item.id === foodId
    })
    if(!cart){
      return cart.qty=quantity
    }
  }
  checkout(item:any){
    this.cartItems.push(item)
    this.foodList.next(this.cartItems)
    this.getTotalPrice()
  }
}
