import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', title: 'Homepage', component: HomepageComponent },
  { path: 'about', title: 'About Us', component: AboutComponent },
];

@NgModule({
  declarations: [HomepageComponent, AboutComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
