import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';

//import { AdDirective } from '../../ad.directive';
import { WizardDirective } from '../../wizard.directive';
//import { AdItem }      from './ad-item';
//import { StepYesNo, StepOptions} from '../step.model';
import { StepEnum } from '../step.enum';
import { Step, StepTransition, WizState, StepState, WizStateChange } from '../step.model';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'beginner-wizard',
  template: `
              <div class="ad-banner">
                <h3>Steps</h3>
                <ng-template wizard-host></ng-template>
              </div>
            `
})
export class BeginnerWizard implements AfterViewInit, OnDestroy, OnInit {
  @Input() ads: Step[];
  currentAddIndex: number = -1;
  State: WizState;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(){

  }
  ngAfterViewInit() {
    // this.loadComponent();
    // this.getAds();
  }
  ngAfterContentInit() {
    this.State = new WizState();
    
    this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
    //this.getAds();  
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  stateChanged(stateChange:WizStateChange) {
    console.log('wiz stateChanged: ' + StepEnum[stateChange.Step], stateChange.Value);
    //this.State[stateChange.Step] = new StepState(StepEnum[stateChange.Step],stateChange.Value);
    this.State.update(stateChange);
    console.dir(this.State);
    this.loadComponent(stateChange.Transition);
  }

  private loadComponent(stepTransition:StepTransition) {
    //console.log('loadComponent ' + stepTransition.to + ' ads.length: ' + this.ads.length);
    console.log('stepTransition.to: ' + stepTransition.to);
    
    switch (stepTransition.to) {
      case StepEnum.Navigate:
        console.log('wizard navigate from here');
        break;
      case StepEnum.Done:
        console.log('wizard is done, process next inbox item');
        break;
    }


    //Find step component to load and load it
    for (let i = 0; i < this.ads.length; i++) {
        //console.log('this.ads[i].Name: ' + this.ads[i].Name);
        //console.log('stepTransition.to: ' + stepTransition.to);

        if (this.ads[i].Name == stepTransition.to) {
          //console.log('found match:')
          let adItem: Step = this.ads[i];
          switch (adItem.Name) {
            case StepEnum.ApproveChange:
              adItem.Steps.CancelStep = stepTransition.from;
              console.log('wiz approve changes ...', adItem.Steps.CancelStep);
              //adItem.Settings.Declaration = stepTransition.approveMsg;
              break;
          }

          let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.Component);
          let viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();

          let componentRef = viewContainerRef.createComponent(componentFactory);
          (<BaseComponent>componentRef.instance).Settings = adItem.Settings;
          //console.log('wiz getState stepTransition.to',stepTransition.to); 
          //console.log('wiz getState',this.State.getState(stepTransition.to));
          (<BaseComponent>componentRef.instance).State = this.State.getState(stepTransition.to);            
          //(<BaseComponent>componentRef.instance).stepChanged.subscribe(event => this.loadComponent(event));
          (<BaseComponent>componentRef.instance).stateChanged.subscribe(event => this.stateChanged(event));
          break;          
        }
    }
  }



  // getAds() {
  //   this.loadComponent();
  //   // this.interval = setInterval(() => {
  //   //   this.loadComponent();
  //   // }, 3000);
  // }
}
