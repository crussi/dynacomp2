import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'nextaction',
  //templateUrl: './isproject.component.html',
  template: `
    <div class="hero-profile">
      <h3>{{Data.Question}}</h3>
    </div>
  `,    
  styleUrls: ['./nextaction.component.css']
})
export class NextAction implements OnInit, BaseComponent {

  @Input() Data: any;

  constructor() { }

  ngOnInit() {
  }

}
