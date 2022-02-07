import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider-demo',
  templateUrl: './image-slider-demo.component.html',
  styleUrls: ['./image-slider-demo.component.scss']
})
export class ImageSliderDemoComponent implements OnInit {
	@Input()	imageSize: any
  imageObject: Array<object> = [{

    image: '../../assets/foto/slider/f1.jpg',
    thumbImage: '../../assets/foto/slider/f1.jpg',
    title: 'Image title',
    alt: 'Image alt'
    
  }, {
    image: '../../assets/foto/slider/f2.jpg',
    thumbImage: '../../assets/foto/slider/f2.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: '../../assets/foto/slider/f3.jpg',
    thumbImage: '../../assets/foto/slider/f3.jpg',
    title: 'Image title',
    alt: 'Image alt'
  },{

    image: '../../assets/foto/slider/f4.jpg',
    thumbImage: '../../assets/foto/slider/f4.jpg',
    title: 'Image title',
    alt: 'Image alt'
   
    
  }, {
    image: '../../assets/foto/slider/f5.jpg',
    thumbImage: '../../assets/foto/slider/f5.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: '../../assets/foto/slider/f6.jpg',
    thumbImage: '../../assets/foto/slider/f6.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: '../../assets/foto/slider/f7.jpg',
    thumbImage: '../../assets/foto/slider/f7.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
