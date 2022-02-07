import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-ui',
  templateUrl: './new-ui.component.html',
  styleUrls: ['./new-ui.component.scss']
})
export class NewUIComponent implements OnInit {

  @Output() sendNewUI = new EventEmitter<boolean>();




  NewUI_Close() {

    this.sendNewUI.emit(false);
 
  }




  constructor() { }

  ngOnInit(): void {
  }

}
