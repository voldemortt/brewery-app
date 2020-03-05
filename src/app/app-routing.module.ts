import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweriesComponent } from './breweries/breweries.component';
import { HomeComponent } from './home/home.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent}, 
  {path: 'getallbreweries' , component: BreweriesComponent}, 
  {path: 'getbrewerydetails' , component: BreweryDetailComponent}, 
  { path: '',  redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
