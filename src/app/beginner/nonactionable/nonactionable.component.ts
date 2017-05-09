import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'nonactionable',
  //templateUrl: './nonactionable.component.html',
  template: `
    <div class="hero-profile">
      <h3>{{Data.Question}}</h3>
    </div>
  `,    
  styleUrls: ['./nonactionable.component.css']
})
export class NonActionable implements OnInit, BaseComponent {

  @Input() Data: any;

  constructor() { }

  ngOnInit() {
  }

}
