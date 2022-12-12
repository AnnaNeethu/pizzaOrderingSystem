import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  foodList:any
  totalItem =0
  constructor(private foodService:HomeService,private cartService:CartService) { }

  ngOnInit(): void {
    this.foodService.viewAllFoods()
    .subscribe((data)=>{
      this.foodList=data
      
    })
    this.cartService.getFoods()
    .subscribe((data)=>{
      this.totalItem=data.length
    })
  }

}
