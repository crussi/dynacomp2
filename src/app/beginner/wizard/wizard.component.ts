import { Component, Input, AfterViewInit, AfterContentInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

//import { AdDirective } from '../../ad.directive';
import { WizardDirective } from '../../wizard.directive';
//import { AdItem }      from './ad-item';
//import { StepYesNo, StepOptions} from '../step.model';

import { IStep } from '../step.interface';
import { BaseComponent } from '../base.component';

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
  @Input() ads: IStep[];
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
    this.loadComponent();
    this.getAds();  
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem: IStep = this.ads[this.currentAddIndex];
    //console.log('wizard adItem IStep: ', adItem);
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.Component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseComponent>componentRef.instance).Data = adItem.Data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}