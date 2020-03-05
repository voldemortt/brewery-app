import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  private key:string = "5865f650b89955e6f423714b51a83354";
  private server:string = "https://sandbox-api.brewerydb.com/v2";

  constructor(private http: Http,private httpClient: HttpClient) { }

  getRespByGET(url:string,object:any){
    let params = new HttpParams().append("key", this.key);
    return this.httpClient.get<object>(this.server+url, {params:params,observe: 'response' });
  }

  getAllBreweries(){
    let params = new HttpParams().append("key", this.key);
    return this.httpClient.get<Brewery[]>(this.server+'/breweries', {params:params,observe: 'response' });
  }

  getBreweryDetail(breweryID:string){
    let params = new HttpParams().append("key", this.key);
    return this.httpClient.get<Brewery>(this.server+'/brewery/'+breweryID, {params:params,observe: 'response' });
  }
}

