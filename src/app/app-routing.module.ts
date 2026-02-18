import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToysComponent } from './toys/toys.component';
import { GiftsComponent } from './gifts/gifts.component';
import { OthertoyComponent } from './othertoy/othertoy.component';
import { AlldataComponent } from './alldata/alldata.component';
import { PassworddataComponent } from './passworddata/passworddata.component';
import { ThankuComponent } from './thanku/thanku.component';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
// import { ClientFormComponent } from './client-form/client-form.component';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
// import { AdminDataComponent } from './admin-data/admin-data.component';
const routes: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default = login
    {path:'',component:HomeComponent},
  // { path: 'login', component: LoginComponent },  
 // ✅ Default route = Home
  { path: 'home', component: HomeComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'toys', component: ToysComponent },
  { path: 'moretoys', component: OthertoyComponent },
  { path: 'userdata', component: AlldataComponent },
  { path: 'password', component: PassworddataComponent },
  { path: 'thanks', component: ThankuComponent },
  {path:'datatable',component:DatatableComponent, canActivate: [AuthGuard]},
  {path:'alldata',component:AlldataComponent , canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  // { path: 'login', redirectTo: 'login', pathMatch: 'full' },
//  { path: 'client-form', component: ClientFormComponent },
//   { path: 'admin-login', component: AdminLoginComponent },
//   { path: 'admindata', component: AdminDataComponent },
  // Agar galat path ho to home pe redirect
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
