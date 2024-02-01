import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';

export const routes: Routes = [
  {
    title: "Code Launch",
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    title: "Code Launch - About",
    path: "about",
    component: AboutComponent,
  },
];
