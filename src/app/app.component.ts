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
  inboxItems: InboxItem[];
  index = 0;
  //hideDescripiton: false;

  constructor(private stepService: StepService,
              private inboxService: InboxService) {}

  ngOnInit() {
    this.steps = this.stepService.getSteps();
    this.inboxItems = this.inboxService.getInbox();
    if (this.inboxItems.length) {
      this.inboxItem = this.inboxItems[this.index];
    }
  }

  onInboxItemProcessed(event){
    console.log('app.component done!',event);
    if (++this.index <= this.steps.length) {
      console.log('set new inboxItem');
      this.inboxItem = this.inboxItems[this.index];
    }
  }

  // onHideDescription(event){
  //   console.log('hide description: ',event);

  // }  
}