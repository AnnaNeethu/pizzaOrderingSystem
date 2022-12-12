import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  foodDetails:any;
  foodId:any;
  totalItem:any
  constructor(private foodService:HomeService,private activatedRoute:ActivatedRoute,private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.foodId=data['id']
    })
    this.cartService.getFoods()
    .subscribe(data=>{
      this.totalItem=data.length
    })
    this.foodService.viewFood(this.foodId)
    .subscribe((result:any)=>{
      this.foodDetails=result
      this.foodDetails.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }
  addToCart(food:any){
    this.cartService.addToCart(food)
    this.router.navigateByUrl('home/cart')
  }

}
