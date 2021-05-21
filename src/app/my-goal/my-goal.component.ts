import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";
import { Router } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-my-goal',
  templateUrl: './my-goal.component.html',
  styleUrls: ['./my-goal.component.css']
})
export class MyGoalComponent implements OnInit {
  goal:Goal[] = [

  ];
    alertService:AlertService;

  goToUrl(id:any){
    // this.router.navigate(['/goals',id])
  }
  deleteGoal(index:any){
    let toDelete = confirm(`Are you sure you want to delete ${this.goal[index].name}`)

    // if (toDelete){
    //   this.goal.splice(index,1)
    //   this.alertService.alertMe("Goal has been deleted")
    // }
  }
  
  
  addNewGoal(goal:any){
    let goalLength = this.goal.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goal.push(goal)
  }
  constructor(goalService:GoalService, alertService:AlertService,  private router:Router) { 
    this.goal = goalService.getGoals()
    this.alertService = alertService;
  }

  ngOnInit(): void {
  }

}
