import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { trigger, style, animate, transition, state, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    // ! 1
  //   trigger('openClose', [
  //     state('true', style({
  //        height: '*',
  //        //display: 'block', 
  //        //display: 'none',
  //        transform: 'translateX(0%) translateY(0px)', 
  //       })),
  //     state('false', style({
  //        height: '*' ,
  //        transform: 'translateX(0%) translateY(0px)', 
  //       })),
  //     //transition('false <=> true', animate(500)),
  //     transition("true=> false", [
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(0px) translateY(-50px)',
  //         //display: 'none', 
  //       }),
  //       animate('.5s 200ms ease-out')
  //      ]),
  //      transition("false => true", [
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(-20px) translateY(0px)',
  //         //display: 'none', 
  //       }),
  //       animate('.5s 200ms ease-out')
  //      ])
  //   ]),
  // ],
///////////////////////////
  // ! 2
trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({
        opacity: 0,
        
      }),
      animate('1000ms linear', style({
        opacity: 1,
        
      })),
    ]),
    transition(':leave', [
      animate('10ms', style({
        opacity: 1, 
        //padding: '20px',
      }))
    ]),
  ]),
  

  ],
})
export class MenuComponent implements OnInit {

  @Output() sendAbout = new EventEmitter<boolean>();
  @Output() sendNewHome = new EventEmitter<boolean>();
  @Output() sendNewUI = new EventEmitter<boolean>();
 

  @Input() isAbout:boolean = true;
  @Input() isNewHome:boolean = true;
  @Input() isNewUI:boolean = true;

  /*-------------*/
  // 1
  //public open = true;

  // 2
  isShown: boolean=true;
  isShown1: boolean=true;
  isShown2: boolean=true;
  //3 
  
  /*-------------*/

 
  liClickAbout() {
    this.isAbout = !this.isAbout;
    this.sendAbout.emit(this.isAbout);
    //1
    //this.open = !this.open;
    //2
    this.isShown = !this.isShown;

    
  }

  //2
  liClickNewHome() {
    this.isNewHome = !this.isNewHome;
    this.sendNewHome.emit(this.isNewHome);
      //2
      this.isShown1 = !this.isShown1;
    
  }
  //3
  liClickNewUI() {
    this.isNewUI = !this.isNewUI;
    this.sendNewUI.emit(this.isNewUI);
      //2
      this.isShown2 = !this.isShown2;
     
  }



  
 


  constructor() { }

  ngOnInit(): void {
  }

}
