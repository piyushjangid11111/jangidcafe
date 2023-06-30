import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl:string = "https://localhost:7124/api/User/"
    constructor(private http:HttpClient) { }

signup(userobj:any){
return this.http.post<any>('https://localhost:7124/api/User/register',userobj);
}

login(loginobj:any){
  return this.http.post<any>('https://localhost:7124/api/User/Authenticate',loginobj);

}

}
