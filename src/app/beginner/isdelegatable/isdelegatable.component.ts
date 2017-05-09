import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'isdelegatable',
  //templateUrl: './isactionable.component.html',
  template: `
    <div class="hero-profile">
      <h3>{{Data.Question}}</h3>
    </div>
  `,  
  styleUrls: ['./isdelegatable.component.css']
})
export class IsDelegatable implements OnInit, BaseComponent {

  @Input() Data: any;

  constructor() { }

  ngOnInit() {
  }

}
