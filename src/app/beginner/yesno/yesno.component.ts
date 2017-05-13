import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';
import { WizStateChange } from '../step.model';

@Component({
  selector: 'yesno',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasYes" (click)="StateChange(YesStep,true)">Yes</button>
      <button *ngIf="hasNo" (click)="StateChange(NoStep,false)">No</button>
      <button *ngIf="hasPrev" (click)="LoadStep(PrevStep)">Previous</button>
      <button *ngIf="hasNext" (click)="LoadStep(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./yesno.component.css']
})
export class YesNo extends BaseComponent implements OnInit   {



  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }

  StateChange(step:StepEnum, val) {
    super.StateChanged(new WizStateChange(this.Settings.Name, val));
    super.LoadStep(step);
  }


}
