import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  // Inject Router Dependency
  constructor(private router: Router) { }
  ngOnInit(): void { }
  
  // Fires on button click
  onclick(){
    // Navigate to /products page
    this.router.navigate(['/contact-list']);
  }
}