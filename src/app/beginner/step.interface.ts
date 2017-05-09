import { Type } from '@angular/core';
import { StepEnum } from './step.enum'

export interface IStep {
    Number: Number;
    Name: StepEnum;    
    Component: Type<any>;
    Declaration: string;
    Question: string;
    Data: any;
    PrevStep: StepEnum;      
    NextStep: StepEnum;
    
}

// export interface IStepYesNo {
//     YesStep: StepEnum;
//     NoStep: StepEnum;      
// }

// export interface IStepOptions {
//     PrevStep: StepEnum;      
//     NextStep: StepEnum;
// }


