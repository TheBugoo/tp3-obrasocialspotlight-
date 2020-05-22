import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  images: Array<any>;
  constructor() {
    this.images = [
      'assets/imagenes/image/Slide2.jpg',
      'assets/imagenes/image/Slide1.jpg',
      'assets/imagenes/image/Slide3.png',
      'assets/imagenes/image/Slide4.png',
      'assets/imagenes/image/Sli1.jpg',
      'assets/imagenes/image/Sli2.jpg',
      'assets/imagenes/image/Sli3.jpg',
      'assets/imagenes/image/Sli4.jpg',
    ];
  }
  ngOnInit(): void {}
}
