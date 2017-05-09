import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'isdoablenow',
  //templateUrl: './isactionable.component.html',
  template: `
    <div class="hero-profile">
      <h3>{{Data.Question}}</h3>
    </div>
  `,  
  styleUrls: ['./isdoablenow.component.css']
})
export class IsDoableNow implements OnInit, BaseComponent {

  @Input() Data: any;

  constructor() { }

  ngOnInit() {
  }

}