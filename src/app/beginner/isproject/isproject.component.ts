import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'isproject',
  //templateUrl: './isproject.component.html',
  template: `
    <div class="hero-profile">
      <h3>{{Data.Question}}</h3>
    </div>
  `,    
  styleUrls: ['./isproject.component.css']
})
export class IsProject implements OnInit, BaseComponent {

  @Input() Data: any;

  constructor() { }

  ngOnInit() {
  }

}
