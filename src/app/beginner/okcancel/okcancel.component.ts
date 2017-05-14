import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'okcancel',
  //templateUrl: './isactionable.component.html',
  template: `
    <div>
      <h2 *ngIf="hasDeclaration">{{Declaration}}</h2>
      <h3 *ngIf="hasQuestion">{{Question}}</h3>
      <button *ngIf="hasOk" (click)="Ok(OkStep)">Ok</button>
      <button *ngIf="hasCancel" (click)="Cancel(CancelStep)">Cancel</button>
      <button *ngIf="hasPrev" (click)="StateChanged(PrevStep,undefined)">Previous</button>
    </div>
  `,  
  styleUrls: ['./okcancel.component.css']
})
export class OkCancel extends BaseComponent implements OnInit   {

  constructor() { 
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
  
  Ok(step:StepEnum){
    console.log('ok logic goes here');
    super.LoadStep(step)
  }

  Cancel(step:StepEnum){
    console.log('cancel logic goes here');
    super.LoadStep(step)
  }

}
