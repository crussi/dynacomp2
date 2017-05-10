import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StepService } from './beginner/step.service';
import { BeginnerWizard } from './beginner/wizard/wizard.component';
import { WizardDirective } from './wizard.directive';
import { YesNo } from './beginner/yesno/yesno.component';
import { BaseComponent } from './beginner/base/base.component';

@NgModule({
  declarations: [ AppComponent,
                  BeginnerWizard,
                  WizardDirective,
                  YesNo,
                  BaseComponent ],
  entryComponents: [ 
                  YesNo ],                  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
