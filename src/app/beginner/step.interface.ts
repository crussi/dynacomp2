import { Type } from '@angular/core';
import { StepEnum, InputTypeEnum } from './step.enum'

export interface IStep {
    Number: Number;
    Name: StepEnum;    
    InputType: InputTypeEnum;
    Component: Type<any>;
    Declaration: string;
    Question: string;
    Data: any;
    Steps: any;
    
}

// export interface IStepYesNo {
//     YesStep: StepEnum;
//     NoStep: StepEnum;      
// }

// export interface IStepOptions {
//     PrevStep: StepEnum;      
//     NextStep: StepEnum;
// }


