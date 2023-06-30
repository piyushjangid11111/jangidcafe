import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeicon: string = "fa-eye-slash"
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeicon = "fa-eye" : this.eyeicon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"

  }
  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (res => {
          alert(res.message)
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        }),
        error: (err => {
          alert(err?.error.message)
        })
      })
      console.log(this.loginForm.value);

      alert("your response have been submitted")
    }
    else {
      alert("please fill the form properly")
      this.validateAllFormFileds(this.loginForm)
    }
  }
  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFileds(control)
      }
    })
  }
}
