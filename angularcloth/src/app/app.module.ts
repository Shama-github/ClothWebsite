import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ItemupdatesComponent } from './itemupdates/itemupdates.component';
import { AdditemComponent } from './additem/additem.component';
import { ClothupdateComponent } from './clothupdate/clothupdate.component';
import { ClothdeleteComponent } from './clothdelete/clothdelete.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnfComponent,
    ItemsComponent,
    AboutComponent,
    ViewdetailsComponent,
    ItemupdatesComponent,
    AdditemComponent,
    ClothupdateComponent,
    ClothdeleteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
