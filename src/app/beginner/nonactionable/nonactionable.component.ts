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
      <form #f="ngForm">
        <input type="radio" name="nonactionable" [(ngModel)]="nonactionable" value="trash">Trash?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="nonactionable" value="someday">Someday/maybe?<br>
        <input type="radio" name="nonactionable" [(ngModel)]="nonactionable" value="ref">Reference
      </form>      

      <button *ngIf="hasPrev" (click)="LoadStep(PrevStep)">Previous</button>
      <button *ngIf="hasNext" (click)="Next()">Next</button>
    </div>
  `,  
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable extends BaseComponent implements OnInit   {

  nonactionable = "";

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  Next() {
    console.log('Next: ' + this.nonactionable);
    
    super.LoadStep(this.NextStep)
  }

}
