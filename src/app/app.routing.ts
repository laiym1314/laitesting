import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { NgameComponent } from './ngame/ngame.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
//import {DemoDatepickerBasic} from './function/DemoDatepickerBasic'
const appRoutes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'project', component: ProjectComponent, },
    { path: 'advantage', component: AdvantageComponent, },
    { path: 'about', component: AboutComponent, },
    { path: 'info', component: InfoComponent, },
    { path: 'ngame', component: NgameComponent, },
    { path: 'contactus', component: ContactComponent, },
    { path: 'test', component: TestComponent, },
   
  //  { path: 'basic', component: DemoDatepickerBasic },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);