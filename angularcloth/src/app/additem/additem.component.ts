import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private cs:ClothService) { }//DI

  onSubmit(data:any){
   //console.log(data);
  this.cs.saveCloth(data).subscribe(e=>console.log(e));
  }


  ngOnInit(): void {
  }

}
