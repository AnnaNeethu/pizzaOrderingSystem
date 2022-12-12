import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  constructor(private cartServce:CartService,private router:Router) { }

  ngOnInit(): void {
  }
  checkout(item:any){
    this.cartServce.checkout(item)
  }
}
