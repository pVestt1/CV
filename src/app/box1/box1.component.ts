import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss'],
  animations: [

    trigger('openClose', [
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(0vh) translateX(-50vh) rotate(0deg)',
         
        }),
        animate('2.3s 400ms cubic-bezier(.07,.78,.08,.89)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
         
        })),
      ]),
    ]),

  ],
})
export class Box1Component implements OnInit {

  
 
  

  /*---------------*/

  open = true;

  constructor() { }
 
  ngOnInit(): void {
    //this.open = false;
    this.open = false;

    setTimeout(()=>{ // <<<---using ()=> syntax
    this.open = true;
    
    }, 500);
    console.log('ngOnInit', this.open);
  }
  


  /*---------------*/
 
 
  
}
