import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../brewery';
import { Images } from '../images';

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.scss']
})
export class BreweryDetailComponent implements OnInit {

  breweryID:string;
  brewery:Brewery;
  showDetails:boolean;
  showError:boolean;

  constructor(private breweryService : BreweryService) { }

  ngOnInit() {
    this.breweryID = '';
    this.showDetails = false;
    this.showError = false;
    this.brewery = new Brewery();
  }

  getBreweryDetails(){
    if(null!=this.breweryID && undefined!=this.breweryID && ''!=this.breweryID){
      this.breweryService.getBreweryDetail(this.breweryID).subscribe(
        (response:any) => {
          this.brewery = response.body.data; 
          if(null==response.body.data || undefined==response.body.data){
            this.showError = true;
            this.showDetails = false; 
          }else{
            if(undefined==this.brewery.images){
              let image : Images = new Images();
              image.large = "assets/beer_alt.jpg";
              this.brewery.images = image;
            } 
            this.showError = false;
            this.showDetails = true; 
          }     
        },error =>{
          this.showError = true;
          this.showDetails = false; 
      });
    }
  }

}
