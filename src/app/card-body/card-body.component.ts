import { Component, OnInit } from '@angular/core';

import { DataService } from "../DataService/data.service";

import {ImagesService} from "../ImagesService/images.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  animations: [
    trigger('flipState', [
      state('true', style({
        transform: 'rotateY(180deg)'
      })),
      state('false', style({
        transform: 'rotateY(0)'
      })),
      transition('true => false', animate('500ms ease-out')),
      transition('false => true', animate('500ms ease-in'))    ])
  ],

  providers: [DataService,
              ImagesService]
})
export class CardBodyComponent implements OnInit {

  img:any;
  user:any;
  flipped:boolean[]=[];

  constructor(private dataService:DataService,
              private imagesService:ImagesService) {}

  flip(index:number){
    console.log(this.flipped)
    this.flipped[index]=!this.flipped[index]
    console.log(this.user)
    console.log(this.img)
  }

  flipInit(index:number){
    if(this.flipped[index]==null) {
      this.flipped[index]=false
    }
  }

  ngOnInit(): void {
    this.dataService
      .getData()
      .subscribe((data:any)=>this.user=data["data"]);


    this.imagesService
      .getImage()
      .subscribe((images:any)=>this.img=images["data"]);

  }
}
