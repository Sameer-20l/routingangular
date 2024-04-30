import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutcomComponent } from './aboutcom/aboutcom.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent,children:[ 
        { path: 'aboutcom', component: AboutcomComponent },
        { path: 'aboutme', component: AboutmeComponent }]  },
    { path: 'contact', component: ContactComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', component: NopageComponent } //Daynamic routing
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }