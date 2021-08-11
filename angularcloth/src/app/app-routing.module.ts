import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { PnfComponent } from './pnf/pnf.component';
import {ItemsComponent} from './items/items.component';
import {AboutComponent} from './about/about.component';
import {ViewdetailsComponent} from './viewdetails/viewdetails.component';
import { ClothupdateComponent } from './clothupdate/clothupdate.component';
import { ClothdeleteComponent } from './clothdelete/clothdelete.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemupdatesComponent } from './itemupdates/itemupdates.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'items',component:ItemsComponent},
{path:'about',component:AboutComponent},
{path:'items/:id',component:ViewdetailsComponent},
{path:'clothupdate/:id',component:ClothupdateComponent},
{path:'clothdelete/:id',component:ClothdeleteComponent},
{path:'additem',component:AdditemComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'itemupdates',component:ItemupdatesComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PnfComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
