import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'newproject',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasYes" (click)="LoadStep(YesStep)">Go to new project</button>
      <button *ngIf="hasNo" (click)="LoadStep(NoStep)">Continue</button>
      <button *ngIf="hasPrev" (click)="LoadStep(PrevStep)">Previous</button>
      <button *ngIf="hasNext" (click)="LoadStep(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./newproject.component.css']
})
export class NewProject extends BaseComponent implements OnInit   {



  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();

  }



}
