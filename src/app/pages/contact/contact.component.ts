import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { CafeService } from 'src/app/cafeservice.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm: FormGroup;
  public fname:string="" ;
  public lname:string="";
  public mobile:string=""; 
  public email:string="";
  public msg:string="" ;

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    public cafeService: CafeService) { 
      this.userForm = this.formBuilder.group({
        FirstName: [''],
        LastName: [''],
        Mobile: [''],
        Email: ['']
      })
    
    }
 

  ngOnInit(): void {

  }
get f(){
  return this.userForm.controls;
}
onSubmit(): any {
  this.cafeService.RegClient(this.userForm.value)
  .subscribe(() => {
    this.msg="Client register successfully!";
    this.fname="";
    this.lname="";
    this.mobile="";
    this.email="";
    
    this.ngZone.run(() => this.router.navigateByUrl('contact-list'))
  }, (err) => {
    console.log(err);
});
}
}