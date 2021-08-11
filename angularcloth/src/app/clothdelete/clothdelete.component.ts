import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clothdelete',
  templateUrl: './clothdelete.component.html',
  styleUrls: ['./clothdelete.component.css']
})
export class ClothdeleteComponent implements OnInit {
  id:number;
  cloth:any;
  constructor(ar:ActivatedRoute, private cs:ClothService) {
    this.id=ar.snapshot.params.id;
    cs.getCloth(this.id).subscribe(e=>this.cloth=e);
   }

  onDelete()
 {
   this.cs.deleteCloth(this.id).subscribe(e=>alert('Deleted'));
 }
  ngOnInit(): void {
  }

}
