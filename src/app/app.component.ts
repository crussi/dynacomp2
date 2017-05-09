import { Component, OnInit } from '@angular/core';

//import { AdService }         from './ad.service';
import { StepService } from './beginner/step.service';

//import { AdItem }            from './ad-item';
import { IStep } from './beginner/step.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //ads: AdItem[];
  ads: IStep[];

  //constructor(private adService: AdService) {}
  constructor(private stepService: StepService) {}

  ngOnInit() {
    //this.ads = this.adService.getAds();
    this.ads = this.stepService.getSteps();
  }
}