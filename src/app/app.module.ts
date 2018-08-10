import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_directives/alert.component';
import { routing }        from './app.routing';
import { AlertService } from './_services/alert.service';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './home/homecomponent/contentcomponent1/content.component';
import { Content2Component } from './home/homecomponent/contentcomponent2/content2.component';
import { Content3Component } from './home/homecomponent/contentcomponent3/content3.component';
import { Content4Component } from './home/homecomponent/contentcomponent4/content4.component';
import { ProjectComponent } from './project/project.component';
import { PicComponent } from './picture/pic.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PopoverModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule}  from '@angular/http';
import { JsonService }  from '../app/_services/jsonservice';
import { AdvantageComponent } from './advantage/advantage.component';
import { AboutComponent } from './about/about.component';
import { Content1Component } from './about/content1/content1.component';
import { About2Component } from './about/about2/about2.component';
import { About3Component } from './about/about3/about3.component';
import { MoreService } from './_services/more.service';
import { InfoComponent } from './info/info.component';
import { Info1Component } from './info/info1/info1.component';
import { Info2Component } from './info/info2/info2.component';
import { Info3Component } from './info/info3/info3.component';
import { Info4Component } from './info/info4/info4.component';
import { Info5Component } from './info/info5/info5.component';
import { Info6Component } from './info/info6/info6.component';
import { NgameComponent } from './ngame/ngame.component';
import { Ngame1Component } from './ngame/ngame1/ngame1.component';
import { CarouselModule } from 'ngx-bootstrap';
import { Ngame2Component } from './ngame/ngame2/ngame2.component';
import { Ngame3Component } from './ngame/ngame3/ngame3.component';
import { Ngame4Component } from './ngame/ngame4/ngame4.component';
import { Ngame5Component } from './ngame/ngame5/ngame5.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    ContentComponent,
    Content2Component,
    Content3Component,
    Content4Component,
    ProjectComponent,
    PicComponent,
    AdvantageComponent,
    AboutComponent,
    Content1Component,
    About2Component,
    About3Component,
    InfoComponent,
    Info1Component,
    Info2Component,
    Info3Component,
    Info4Component,
    Info5Component,
    Info6Component,
    NgameComponent,
    Ngame1Component,
    Ngame2Component,
    Ngame3Component,
    Ngame4Component,
    Ngame5Component,
    ContactComponent,
    TestComponent,
     

  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(), 
    BsDropdownModule.forRoot() 
    

  ],
  entryComponents: [PicComponent],


  providers: [
    AlertService,
    JsonService,
    MoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
