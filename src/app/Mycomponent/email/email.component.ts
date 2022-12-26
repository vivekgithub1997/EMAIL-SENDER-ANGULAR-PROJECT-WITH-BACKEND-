import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/Service/email.service';
import { Email } from '../bindingClass/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  flag:boolean=false;

   email:Email = new Email();

   constructor(private emailService:EmailService,private snackBar:MatSnackBar){}

   
  submitFrom(){
    if (this.email.to=='' || this.email.subject=='' || this.email.msg=='') {
    
      this.snackBar.open("Fields can not be empty...!!","OK");
      return;
    }
 
   this.flag=true;
    this.emailService.sendEmail(this.email).subscribe(
      data=>{
        this.snackBar.open("Email Send Successfully...!!","OK")
        this.flag=false;
        

      },
      error =>{
        this.snackBar.open("Email not send || Backend service is down","OK")
        this.flag=false;
      }
      
      
    )
     
  }

}
