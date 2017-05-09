import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'isactionable',
  //templateUrl: './isactionable.component.html',
  template: `
    <div class="hero-profile">
      <h2>{{Data.Declaration}}</h2>
      <h3>{{Data.Question}}</h3>
      <div *ngIf="hasYes">yes button</div>
      <div *ngIf="hasNo">No button</div>
      <div *ngIf="hasPrev">Prev button</div>
      <div *ngIf="hasNext">Next button</div>
    </div>
  `,  
  styleUrls: ['./isactionable.component.css']
})
export class IsActionable implements OnInit, BaseComponent {

  @Input() Data: any;
  hasYes: boolean;
  hasNo: boolean;
  hasPrev: boolean;
  hasNext: boolean;

  constructor() { }

  ngOnInit() {
    this.hasYes = this.Data.Steps.YesStep != StepEnum.Undefined;
    this.hasNo = this.Data.Steps.NoStep != StepEnum.Undefined;
    this.hasPrev = this.Data.Steps.PrevStep != StepEnum.Undefined;
    this.hasNext = this.Data.Steps.NextStep != StepEnum.Undefined;
  }

}
