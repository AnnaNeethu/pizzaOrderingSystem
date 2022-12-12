import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  viewAllFoods(){
    return this.http.get('http://localhost:3000/products')
  }
  Register(body:any){
    
    return this.http.post('http://localhost:3000/users',body)
  }

  login(body:any){
    
    return this.http.get('http://localhost:3000/users',body)
  }
  
  viewFood(foodId:any){
    return this.http.get("http://localhost:3000/products/"+foodId)
  }
}
//   addToCart(foodId:any){
//     retu
// }
