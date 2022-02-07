import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition, state, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {

  @Output() sendAbout = new EventEmitter<boolean>();

 
  About_Close() {
    
   this.sendAbout.emit(false);

 }

  constructor() { }

  ngOnInit(): void {
  }

}
