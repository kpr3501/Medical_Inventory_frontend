import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',

},
{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},
{
path:'dashboard',
component:DashboardComponent,
pathMatch:'full'
},
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full'
  },
  {
    path:'forgot',
    component:ForgotpasswordComponent,
    pathMatch:'full'
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
