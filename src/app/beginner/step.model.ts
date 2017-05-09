import { Type } from '@angular/core';
//import { IStep, IStepYesNo, IStepOptions } from './step.interface';
import { IStep } from './step.interface';
import { StepEnum } from './step.enum';

// export class StepYesNo implements IStep, IStepYesNo {
//     Number: Number;
//     Name: StepEnum;
//     Declaration: string;
//     Question: string;
//     Comp: Type<any>;
//     YesStep: StepEnum;
//     NoStep: StepEnum;
//     constructor(public component: Type<any>, public data: any) {
//         this.Comp = component;
//         this.Number = data.Number;
//         this.Name = data.Name;
//         this.Declaration = data.Declaration ? data.Declaration : '';
//         this.Question = data.Question ? data.Question : '';
//         this.YesStep = data.YesStep ? data.YesStep : StepEnum.Undefined;
//         this.NoStep = data.NoStep ? data.NoStep : StepEnum.Undefined;

//     }
// }

export class Step implements IStep {
    Number: Number;
    Name: StepEnum;
    Declaration: string;
    Question: string;
    Component: Type<any>;
    PrevStep: StepEnum;
    NextStep: StepEnum;
    Data: any;
    constructor(public component: Type<any>, data: any) {
        this.Data = data;
        this.Component = component;
        this.Number = data.Number;
        this.Name = data.Name;
        this.Declaration = data.Declaration ? data.Declaration : '';
        this.Question = data.Question ? data.Question : '';
        this.PrevStep = data.PrevStep ? data.PrevStep : StepEnum.Undefined;
        this.NextStep = data.NextStep ? data.NextStep : StepEnum.Undefined;

    }
}


