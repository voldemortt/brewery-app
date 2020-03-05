import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';
import { Images } from '../images';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  
  displayedColumns: string[] = ['id','name', 'established', 'isOrganic', 'website'];  
  @ViewChild('breweriesPaginator', {static: false}) paginator: MatPaginator;
  breweriesDatasource = null;
  breweries:Brewery[] = [];

  constructor(public dialog: MatDialog,private breweryService : BreweryService) { }

  ngOnInit() {
    this.getAllBreweries();
  }

  getAllBreweries(){
    this.breweryService.getAllBreweries().subscribe(
      (response:any) => {
        this.breweries = response.body.data;
        this.breweriesDatasource = new MatTableDataSource<Brewery>(this.breweries);
        this.breweriesDatasource.paginator = this.paginator;
      });
  }

  getBreweryDetails(brewery:Brewery){
    const dialogRef = this.dialog.open(BreweryDetailDialog, {
      width: '400px',
      data: brewery
    });
  }

}

@Component({
  selector: 'brewery-detail-dialog',
  templateUrl: 'brewery-detail-dialog.html',
})
export class BreweryDetailDialog {

  constructor(
    public dialogRef: MatDialogRef<BreweryDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public brewery: Brewery) {}

    
  
  ngOnInit() {
    if(undefined==this.brewery.images){
      let image : Images = new Images();
      image.large = "assets/beer_alt.jpg";
      this.brewery.images = image;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}