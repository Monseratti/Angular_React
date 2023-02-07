import { Component } from '@angular/core';
import { PaintGallery } from './paint.servise';
import { Paint } from './paint';

@Component({
  selector: 'app-paint-gallery',
  templateUrl: './paint-gallery.component.html',
  styleUrls: ['./paint-gallery.component.css'],
  providers: [PaintGallery]
})
export class PaintGalleryComponent {
  data:Paint[]=[];
  currentArt:Paint={name:"", author:"", year:0,plase:"",size:"",photoPath:""};
  constructor(private myPaintGallery:PaintGallery){}

  mouseOver(art:Paint){
    this.currentArt=art;
  }
  ngOnInit(){
    this.data=this.myPaintGallery.get();
  }
}
