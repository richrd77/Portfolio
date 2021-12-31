import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { StackComponent } from './components/stack/stack.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'work', component: WorkComponent },
  { path: 'stack', component: StackComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
