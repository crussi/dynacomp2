import { Component, OnInit } from '@angular/core';
import { StepService } from './beginner/step.service';
import { IStep } from './beginner/step.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ads: IStep[];

  constructor(private stepService: StepService) {}

  ngOnInit() {
    this.ads = this.stepService.getSteps();
  }
}