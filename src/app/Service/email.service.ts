import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Email } from '../Mycomponent/bindingClass/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient:HttpClient,private snackBar:MatSnackBar) { }

  sendEmail(email:Email):Observable<Object>{

   return this.httpClient.post("http://localhost:8080/sendmail",email,{responseType:"text"})
  }
}
