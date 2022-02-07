import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss'],
  animations: [
    /*--- btn_test01     1 - time animation and func ---*/
    trigger('btn_test01', [
      state('open', style({
       
        opacity: 0,
        //transform: 'translateX(100px)',
      })),
      state('close', style({
      
        opacity: 0.5,
        //transform: 'translateX(100px)'
      })),
      // ...
      transition('* => *', [
        animate('3s', keyframes ( [
          style({ transform: 'translateX(-10px) scale(1)', offset: 0 }),
        
          style({ transform: 'translateX(0px) scale(0)', offset: 1 })
        ]))
      ])
    ]),
    /*--- SVG01 ---*/
    trigger('SVG01', [
      // state('open', style({
       
      //   opacity: 1,
       
      // })),
      // state('close', style({
      
      //   opacity: 0.5,
      
      // })),
      // // ...
      // transition('* => *', [
      //   animate('3s', keyframes ( [
      //     style({ opacity: 0.1, offset: 0.1 }),
      //     style({ opacity: 0.6, offset: 0.2 }),
      //     style({ opacity: 1,   offset: 0.5 }),
      //     style({ opacity: 0.2, offset: 0.7 })
      //   ]))
      // ])
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(0vh) translateY(50vh) rotate(260deg) matrix(1, 1, 1, 8, 7, 888)',
         
        }),
        animate('1.3s 400ms cubic-bezier(.03,.56,.26,1.02)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
         
        })),
      ]),
    ]),
      /*--- SVG02 ---*/
      trigger('SVG02', [
      
        transition("void => *", [
          style({
            opacity: 0,
            transform: 'translateY(0vh) translateY(50vh) rotate(260deg) matrix(1, 8, 9, 9, 0, 8)',
           
          }),
          animate('1.3s 500ms cubic-bezier(.87,.13,.06,.94)', style({
            opacity: 1,
            transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
           
          })),
        ]),
      ]),
  ]

})
export class Box2Component implements OnInit {

  open = true;

  //

  isShown: boolean=true;

  liClickAbout() {

    this.isShown = !this.isShown;
    this.open = false;
  }

  //
  constructor() { }

  ngOnInit(): void {


      
      this.open = false;
      //this.isShown = false;

      setTimeout(()=>{ // <<<---using ()=> syntax
      this.open = true;
      //this.isShown = true;
      
      }, 500);
      console.log('ngOnInit', this.open);


  }

}
