import { Component, OnInit } from '@angular/core';

import { Cont } from 'src/app/cont';
import { CafeService } from 'src/app/cafeservice.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  Clients:any[]=[]
  constructor(private cafeService: CafeService) { }
  ngOnInit(): void {
    this.cafeService.GetClients().subscribe(res => {
      console.log(res)
      //this.Users =  res;
      let x:any;
      x=res;
      let varToReceiveArray:any;
      varToReceiveArray=x;    //because we get users record in data var within our customize object
      this.Clients =  varToReceiveArray;
      console.log(varToReceiveArray);
    });    
  }
  delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.cafeService.deleteClients(id).subscribe((res) => {
          this.Clients.splice(i, 1);
        })
      }
    }
}
