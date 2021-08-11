import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

 cloths:any;
  constructor(cs:ClothService) { 
    cs.getClothes().subscribe(e=>this.cloths=e);
  }
  ngOnInit(): void {
  }

}
