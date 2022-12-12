import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
registerForm= this.formBuilder.group({
  name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  mob:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private formBuilder:FormBuilder,private foodService:HomeService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){

    var newUser={
      name:this.registerForm.value.name,
      username:this.registerForm.value.username,
      mob:this.registerForm.value.mob,
      password:this.registerForm.value.password
    }
    

    if(this.registerForm.valid){
      this.foodService.Register(newUser)
      .subscribe((result:any)=>{
        alert('Register Successfully')
        this.router.navigateByUrl('home/login')
      },
      result=>{
        alert('User already exist.. Please Login');
        this.router.navigateByUrl('home/login')
      })
      }
    else{
      alert('Invalid Form')
    }


    
  }

}
