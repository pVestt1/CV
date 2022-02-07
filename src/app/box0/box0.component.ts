import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-box0',
  templateUrl: './box0.component.html',
  styleUrls: ['./box0.component.scss'],
  animations: [
    //1
    /*text*/
    trigger('text1', [
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(0vh) translateX(10vh) rotateX(290deg) scale(0) skew(70deg, 20deg)',
         
        }),
        animate('2.3s 400ms cubic-bezier(.76,.3,.1,.95)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg) scale(1)' ,
         
        })),
      ]),
    ]),
    /*text*/
    trigger('text2', [
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(0vh) translateX(10vh) rotateX(290deg) scale(0) skew(70deg, 20deg)',
         
        }),
        animate('2.3s 550ms cubic-bezier(.76,.3,.1,.95)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg) scale(1)' ,
         
        })),
      ]),
    ]),
    /*text*/
    trigger('text3', [
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(0vh) translateX(10vh) rotateX(290deg) scale(0) skew(70deg, 20deg)',
         
        }),
        animate('2.3s 800ms cubic-bezier(.76,.3,.1,.95)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg) scale(1)' ,
         
        })),
      ]),
    ]),
    // 2
    trigger('anim1', [
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(5vh) translateX(5vh) rotateX(0deg) scale(1.5) skew(10deg, 20deg) ',
         
        }),
        animate('1.5s 550ms cubic-bezier(.07,.78,.08,.89)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
         
        })),
      ]),
    ]),
     // 3
     trigger('anim2', [
      transition("void => *", [
        style({
          opacity: 0,
          transform: 'translateY(5vh) translateX(5vh) rotateX(0deg) scale(1.5) skew(10deg, 20deg) ',
         
        }),
        animate('1s 650ms cubic-bezier(.07,.78,.08,.89)', style({
          opacity: 1,
          transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
         
        })),
      ]),
    ]),
       // 4 download
       trigger('download', [
        transition("void => *", [
          style({
           
            transform: 'translateY(0vh) translateX(-50vh) rotateX(0deg) scale(1)  ',
           
          }),
          animate('1.2s 600ms cubic-bezier(.07,.78,.08,.89)', style({
           
            transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
           
          })),
        ]),
      ]),
        // 5
        trigger('vievCV', [
          transition("void => *", [
            style({
             
              transform: 'translateY(50vh) translateX(0vh) rotateX(0deg) scale(1)  ',
             
            }),
            animate('1.7s 650ms cubic-bezier(.07,.78,.08,.89)', style({
             
              transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
             
            })),
          ]),
        ]),
            // 5
            trigger('img_01', [
              transition("void => *", [
                style({
                  opacity: 0,
                  transform: 'translateY(0vh) translateX(0vh) rotateX(120deg) scale(.5)  ',
                 
                }),
                animate('1.6s 650ms cubic-bezier(.07,.78,.08,.89)', style({
                  opacity: 1,
                  transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
                 
                })),
              ]),
            ]),

  ],
})
export class Box0Component implements OnInit {

  
  show = false;
//
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

}
