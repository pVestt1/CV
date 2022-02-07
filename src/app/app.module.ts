import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AboutComponent } from './about/about.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { NewUIComponent } from './new-ui/new-ui.component';
import { Box0Component } from './box0/box0.component';
import { ImageSliderDemoComponent } from './image-slider-demo/image-slider-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Box1Component } from './box1/box1.component';
import { ResumeCVComponent } from './resume-cv/resume-cv.component';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { Box2Component } from './box2/box2.component';
import { FormWriteComponent } from './box2/form-write/form-write.component';

//
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { environment } from 'src/environments/environment';



const routes: Routes = [
 
  {path: 'setup', component:  AboutComponent},
  {path: 'slider', component:  ImageSliderDemoComponent},
  {path: 'resuneCV', component:  ResumeCVComponent},
  {path: 'formWrite', component: FormWriteComponent},       
  
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    NewHomeComponent,
    NewUIComponent,
    Box0Component,
    ImageSliderDemoComponent,
    HomeComponent,
    Box1Component,
    ResumeCVComponent,
    Box2Component,
    FormWriteComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgImageSliderModule,
   
    FontAwesomeModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})





export class AppModule {
 
  
 }
