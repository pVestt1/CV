import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    /*--- isMenuAbout ---*/
   trigger('myInsertRemoveTrigger', [
     transition(':enter', [
       style({
         opacity: 0,
         //transform: 'translateX(100%)',
         right: '-50%',
       }),
       animate('500ms linear', style({
         opacity: 1,
         right: '0%',
       })),
     ]),
     transition(':leave', [
       animate('510ms', style({
         opacity: 0, 
         backgroundColor: 'red',
         right: '-50%',
       })),
       
     ]),
   ]),


   //////!!!!!!! TESTY

   

   //////!!!!!!!

   /*--- isMenuNewHome ---*/
   // trigger('myInsertRemoveTrigger', [
   //   transition(':enter', [
   //     style({
   //       opacity: 0,
   //       //transform: 'translateX(100%)',
   //       right: '-50%',
   //     }),
   //     animate('500ms linear', style({
   //       opacity: 1,
   //       right: '0%',
   //     })),
   //   ]),
   //   transition(':leave', [
   //     animate('510ms', style({
   //       opacity: 0, 
   //       backgroundColor: 'red',
   //       right: '-50%',
   //     })),
       
   //   ]),
   // ]),
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
   /*---- 1 ----*/
   trigger('openClose1', [
     transition("void => *", [
       style({
         opacity: 0,
         transform: 'translateY(-50vh) translateX(0vh) rotate(0deg)',
        
       }),
       animate('2.3s 200ms cubic-bezier(.07,.78,.08,.89)', style({
         opacity: 1,
         transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
        
       })),
     ]),
   ]),
    /*---- 2 ----*/
    trigger('openClose2', [
     transition("void => *", [
       style({
         opacity: 0,
         transform: 'translateX(50vh) rotate(0deg) scaleY(1)',
       }),
       animate('5s 400ms cubic-bezier(.07,.95,0,.99)', style({
         opacity: 1,
         transform: 'translateX(0px) rotate(0deg)',
       }))
   ]),
   ]),
     /*---- 3 ----*/
     trigger('openClose3', [
       transition("void => *", [
         style({
           opacity: 0,
           transform: 'translateY(0vh) translateX(-50vh) rotate(0deg)',
          
         }),
         animate('2.3s 500ms cubic-bezier(.07,.78,.08,.89)', style({
           opacity: 1,
           transform: 'translateY(0px) translateX(0vh) rotate(0deg)' ,
          
         })),
       ]),
     ]),
     /*---- 4 ----*/
     trigger('openClose4', [
       transition("void => *", [
           style({
             opacity: 0,
             transform: 'translateY(50vh) rotate(0deg) scaleY(1)',
            
           }),
           animate('2.3s 300ms cubic-bezier(.07,.78,.08,.89)', style({
             opacity: 1,
             transform: 'translateY(0px) rotate(0deg) scaleY(1)' ,
            
           })),
       ]),
       
     ]),
      /*---- 5 ----*/
      trigger('openClose5', [
       transition("void => *", [
           style({
             opacity: 0,
             transform: 'translateX(50vh) rotate(0deg) scaleY(1)',
           }),
           animate('5s 300ms cubic-bezier(.07,.95,0,.99)', style({
             opacity: 1,
             transform: 'translateX(0px) rotate(0deg)',
           }))
       ]),
     ]),
   /*----- truck------*/
   trigger('openClose6', [
     transition("void => *", [
         style({
           opacity: 1,
           height: '50%',
        
           //transform: 'translateY(100vh) rotate(0deg)',
         }),
       
         animate('14s 3s cubic-bezier(.15,.06,.1,.95)', style({
           opacity: 1,
           height: '0%',
          
          // transform: 'translateY(0vh) rotate(0deg)',
         })),
         
     ]),
   ]),
   trigger('openClose7', [
     transition("void => *", [
         style({
           opacity: 1,
           height: '50%',
        
           //transform: 'translateY(100vh) rotate(0deg)',
         }),
       
         animate('14s 3s cubic-bezier(.15,.06,.1,.95)', style({
           opacity: 1,
           height: '0%',
          
          // transform: 'translateY(0vh) rotate(0deg)',
         })),
         
     ]),
   ]),
  ]
})
export class HomeComponent implements OnInit {

  title = 'Face-PR';
  /*---------------*/
  isShown: boolean=true;

  


  /*---------------*/
  isMenuAbout:boolean = !true;
  isMenuNewHome:boolean = !true;
  isMenuNewUI:boolean = !true;

  catchAbout(event:any) {
    this.isMenuAbout = event;
   
  }
  catchNewHome(event:any) {
    this.isMenuNewHome = event;
  }
  catchNewUI(event:any) {
    this.isMenuNewUI = event;
  }
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
