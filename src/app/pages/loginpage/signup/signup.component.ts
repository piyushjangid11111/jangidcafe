import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type:string="password"
isText:boolean=false;
eyeicon:string="fa-eye-slash"
signupForm!:FormGroup
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }
  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeicon = "fa-eye": this.eyeicon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }
  onSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
      this.auth.signup(this.signupForm.value).subscribe({
        next: (res => {
          alert(res.message);
          this.signupForm.reset();
          this.router.navigate(['login'])
        }),
        error:(err=>{
           alert(err?.error.message)
         })
      })
      ,alert("your response have been submitted")
    }
    else{
      alert("please fill the form properly")
    }
  }
}
