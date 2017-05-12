import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'nonactionable',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <form action="">
        <input type="radio" name="gender" value="male">Trash?<br>
        <input type="radio" name="gender" value="female">Someday/maybe?<br>
        <input type="radio" name="gender" value="other">Reference
      </form>      

      <button *ngIf="hasPrev" (click)="LoadStep(PrevStep)">Previous</button>
      <button *ngIf="hasNext" (click)="LoadStep(NextStep)">Next</button>
    </div>
  `,  
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable extends BaseComponent implements OnInit   {

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }



}
