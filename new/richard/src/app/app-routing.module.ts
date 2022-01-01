import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { StackComponent } from './components/stack/stack.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { animationState: 1 } },
  { path: 'work', component: WorkComponent, data: { animationState: 2 } },
  { path: 'stack', component: StackComponent, data: { animationState: 3 } },
  { path: 'contact', component: ContactComponent, data: { animationState: 4 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
