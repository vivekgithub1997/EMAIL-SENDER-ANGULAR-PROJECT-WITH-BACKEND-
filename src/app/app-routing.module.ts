import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './Mycomponent/email/email.component';
import { HomeComponent } from './Mycomponent/home/home.component';

const routes: Routes = [
{
  path:"sendemail",component:EmailComponent,pathMatch:"full"
  
}
,
{
  path:'',component:HomeComponent,pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
