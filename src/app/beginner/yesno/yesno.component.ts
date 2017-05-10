import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'yesno',
  //templateUrl: './isactionable.component.html',
  template: `
    <div class="hero-profile">
      <h2>{{Data.Declaration}}</h2>
      <h3>{{Data.Question}}</h3>
      <button *ngIf="hasYes" (click)="LoadStep(YesStep)">yes button</button>
      <button *ngIf="hasNo" (click)="LoadStep(NoStep)">No button</button>
      <button *ngIf="hasPrev" (click)="LoadStep(PrevStep)">Prev button</button>
      <button *ngIf="hasNext" (click)="LoadStep(NextStep)">Next button</button>

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



}
