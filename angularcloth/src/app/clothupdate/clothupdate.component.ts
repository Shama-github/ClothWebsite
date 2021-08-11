import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-clothupdate',
  templateUrl: './clothupdate.component.html',
  styleUrls: ['./clothupdate.component.css']
})
export class ClothupdateComponent implements OnInit {
  clothrform:FormGroup;
  id:number;
  constructor(ar:ActivatedRoute, private cs:ClothService,fb:FormBuilder) {
    this.id=ar.snapshot.params.id;
    this.clothrform=fb.group({
      cid:[],
      cImage:[],
      cName:[],
      cPrice:[],
      cCategory:[],
      cBrand:[],
      cSize:[],
      cDelieveryType:[]
    });
    cs.getCloth(this.id).subscribe(c=>this.clothrform.setValue(c));
  }

  onSubmit(data:any){
    console.log(data);
    this.cs.updateCloth(this.id,data).subscribe(c=>console.log(c));
  }
  ngOnInit(): void {
  }
  }