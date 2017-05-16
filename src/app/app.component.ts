import { Component, OnInit } from '@angular/core';
import { StepService } from './beginner/step.service';
import { InboxService } from './beginner/inbox.service';
import { Step, InboxItem } from './beginner/step.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  steps: Step[];
  inboxItem: InboxItem;

  constructor(private stepService: StepService,
              private inboxService: InboxService) {}

  ngOnInit() {
    this.steps = this.stepService.getSteps();
    let inboxitems: InboxItem[] = this.inboxService.getInbox();
    if (inboxitems.length) {
      this.inboxItem = inboxitems[0];
    }
  }

  onInboxItemProcessed($event){
    console.log('app.component done!');
  }  
}