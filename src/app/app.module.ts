import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'; 
import {MatFormFieldModule,MatInputModule,
MatCardModule,MatTableModule,MatDialogModule,MatIconModule,
MatToolbarModule,MatSidenavModule,MatListModule} from '@angular/material';
import { BreweriesComponent,BreweryDetailDialog } from './breweries/breweries.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    BreweryDetailDialog,
    HomeComponent,
    BreweryDetailComponent
  ],
  entryComponents:[BreweryDetailDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
