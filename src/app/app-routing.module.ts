import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexViewComponent } from './components/view/indexview/indexview.component';
import { HomeComponent } from './components/view/home/home.component';
import { AboutComponent } from './components/view/about/about.component';
import { ProjectsComponent } from './components/view/projects/projects.component';
import { ContactComponent } from './components/view/contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexViewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
