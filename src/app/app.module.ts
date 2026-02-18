import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ToysComponent } from './toys/toys.component';
import { DelviryComponent } from './delviry/delviry.component';
import { GiftsComponent } from './gifts/gifts.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ToystabComponent } from './toystab/toystab.component';
import { OthertoyComponent } from './othertoy/othertoy.component';
import { AlldataComponent } from './alldata/alldata.component';
import { DatatableComponent } from './datatable/datatable.component';
import { PassworddataComponent } from './passworddata/passworddata.component';
import { ThankuComponent } from './thanku/thanku.component';
// import { SignpassComponent } from './signpass/signpass.component';
import { FormsModule } from '@angular/forms';   
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

// import { AdminLoginComponent } from './admin-login/admin-login.component';
// import { ClientFormComponent } from './client-form/client-form.component';
// import { AdminDataComponent } from './admin-data/admin-data.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ToysComponent,
    DelviryComponent,
    GiftsComponent,

    ToystabComponent,
    OthertoyComponent,
    AlldataComponent,
    DatatableComponent,
    PassworddataComponent,
    ThankuComponent,
    LoginComponent,
    // AdminLoginComponent,
    // ClientFormComponent,
    // AdminDataComponent,
    // SignpassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     HttpClientModule,
      FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
