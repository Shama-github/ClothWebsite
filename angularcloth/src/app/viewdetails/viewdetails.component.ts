import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  id:number;
  cloth:any;
  constructor(ar:ActivatedRoute,cs:ClothService) {
    this.id=ar.snapshot.params.id;
    cs.getCloth(this.id).subscribe(e=>this.cloth=e);
   }

  ngOnInit(): void {
  }

}
