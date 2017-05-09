import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'refineaction',
  //templateUrl: './nonactionable.component.html',
  template: `
    <div class="hero-profile">
      <h2>{{Data.Declaration}}</h2>
      <h3>{{Data.Question}}</h3>
    </div>
  `,    
  styleUrls: ['./refineaction.component.css']
})
export class RefineAction implements OnInit, BaseComponent {

  @Input() Data: any;

  constructor() { }

  ngOnInit() {
  }

}
