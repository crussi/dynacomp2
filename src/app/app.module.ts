import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';
import { StepService }            from './beginner/step.service';
import { IsActionable } from './beginner/isactionable/isactionable.component';
import { IsProject } from './beginner/isproject/isproject.component';
import { NonActionable } from './beginner/nonactionable/nonactionable.component';
import { BeginnerWizard } from './beginner/wizard/wizard.component';

@NgModule({
  declarations: [ AppComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  AdDirective,
                  IsActionable,
                  IsProject,
                  NonActionable,
                  BeginnerWizard ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent, IsActionable, IsProject, NonActionable ],                  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdService, StepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
