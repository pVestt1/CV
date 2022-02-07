import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})
export class NewHomeComponent implements OnInit {


  @Output() sendNewHome = new EventEmitter<boolean>();

 
 
  NewHome_Close() {

   this.sendNewHome.emit(false);

 }











  constructor() { }

  ngOnInit(): void {
  }

}
