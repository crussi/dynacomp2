import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

//import { AdDirective } from '../../ad.directive';
import { WizardDirective } from '../../wizard.directive';
//import { AdItem }      from './ad-item';
//import { StepYesNo, StepOptions} from '../step.model';
import { StepEnum } from '../step.enum';
import { Step, StepTransition } from '../step.model';
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
export class BeginnerWizard implements AfterViewInit, OnDestroy {
  @Input() ads: Step[];
  currentAddIndex: number = -1;
  @ViewChild(WizardDirective) adHost: WizardDirective;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    // this.loadComponent();
    // this.getAds();
  }
  ngAfterContentInit() {
    this.loadComponent(new StepTransition(StepEnum.Start,StepEnum.IsActionable));
    //this.getAds();  
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  loadComponent(stepTransition:StepTransition) {
    //console.log('loadComponent ' + stepTransition.to + ' ads.length: ' + this.ads.length);
    for (let i = 0; i < this.ads.length; i++) {
        //console.log('this.ads[i].Name: ' + this.ads[i].Name);
        //console.log('stepTransition.to: ' + stepTransition.to);
        if (this.ads[i].Name == stepTransition.to) {
          //console.log('found match:')
          let adItem: Step = this.ads[i];
          if (adItem.Name == StepEnum.ApproveChange) {
            //adItem.Steps.PrevStep = stepTransition.from;
            adItem.Steps.CancelStep = stepTransition.from;
          }
          let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.Component);
          let viewContainerRef = this.adHost.viewContainerRef;
          viewContainerRef.clear();

          let componentRef = viewContainerRef.createComponent(componentFactory);
          (<BaseComponent>componentRef.instance).Settings = adItem.Settings;
          
          (<BaseComponent>componentRef.instance).stepChanged.subscribe(event => this.loadComponent(event)); //= function(event) { console.log('hello world'); }
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
