import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  foodList:any

  constructor(private foodService:HomeService) {
   
   }

  ngOnInit(): void {
    this.foodService.viewAllFoods()
    .subscribe((data)=>{
      this.foodList=data
      
    })
  }

}
