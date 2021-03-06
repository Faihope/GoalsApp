import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import {  ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
@Input() goal:Goal | any;
@Output() isComplete  = new EventEmitter <boolean >();
goalComplete(complete:boolean){
  this.isComplete.emit(complete);
}
goalDelete(complete:boolean){
  this.isComplete.emit(complete);
}

constructor(private route:ActivatedRoute, private service:GoalService) { }


  ngOnInit(){
  //   let id = this.route.snapshot.paramMap.get('id');
  //   this.goal = this.service.getGoal(id)
   }

}
