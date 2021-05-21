import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGoalComponent } from './my-goal/my-goal.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';

const routes: Routes = [
  { path: 'goals', component: MyGoalComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},

  { path:'**', component:NotFoundComponent},


  { path: 'goals/id', component: GoalDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
