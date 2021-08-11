import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClothService {
  apiurl='http://localhost:16372/api/cloth/';
  constructor(private http:HttpClient) { }//DI
  getClothes()
  { 
    return this.http.get(this.apiurl);
  }
  getCloth(id:number){
    return this.http.get(this.apiurl+id);
  }
  saveCloth(emp:any)
  {
    return this.http.post(this.apiurl,emp);
 
  }

  updateCloth(id:number,emp:any){
    return this.http.put(this.apiurl+id,emp);
  }

  deleteCloth(id:number){
    return this.http.delete(this.apiurl+id);
  }
}
