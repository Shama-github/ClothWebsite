import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-itemupdates',
  templateUrl: './itemupdates.component.html',
  styleUrls: ['./itemupdates.component.css']
})
export class ItemupdatesComponent implements OnInit {

  cloths:any;
  constructor(cs:ClothService) { 
    cs.getClothes().subscribe(e=>this.cloths=e);
  }

  ngOnInit(): void {
  }

}
