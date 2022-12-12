import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




loginForm=this.formBuilder.group({
  username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[A-Za-z0-9]*')]]
})

  constructor(private formBuilder:FormBuilder,private router:Router,private foodService:HomeService) { }

  ngOnInit(): void {
  }
 
  login(){
    var user={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
   if(this.loginForm.valid){
    this.foodService.login(user)
    .subscribe((result:any)=>{
      const ur = result.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })
      if(ur){
        alert('Login Successfull')
        this.loginForm.reset()
        this.router.navigateByUrl('home/dashboard')
      }
      else{
        alert('User not found')
        this.router.navigateByUrl('home/login')
      }
    },err=>{
      alert('something went wrong')
    })
   }
   else{
    alert('Invalid Form')
   }
  }


  // login(){
  //   var username=this.loginForm.value.username
  //   var password=this.loginForm.value.password

  //   if(this.loginForm.valid){
  //     this.foodService.login(username,password)
  //     .subscribe((result:any)=>{
  //      const user=result.find((a:any)=>{
  //       return a.username === this.loginForm.value.username && a.password===this.loginForm.value.password
  //      })
  //      if(user){
  //        alert('Login successfull')
  //        this.loginForm.reset()
  //        this.router.navigateByUrl('home/dashboard')

  //      }
  //      else{
  //       alert('user not found')
  //      }
  //      (err:any)=>{
  //       alert('Something went wrong')
  //      }
  //     })
  //   }
  //   else{
  //     alert('Invalid Form')
  //   }
  // }

}
