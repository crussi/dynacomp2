import { Type } from '@angular/core';
//import { IStep, IStepYesNo, IStepOptions } from './step.interface';
import { IStep } from './step.interface';
import { StepEnum, InputTypeEnum } from './step.enum';

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
    InputType: InputTypeEnum;
    Declaration: string;
    Question: string;
    Component: Type<any>;
    Steps: StepOptions;
    Data: any;
    constructor(public component: Type<any>, data: any) {
        this.Steps = new StepOptions();
        this.Data = data;
        this.Component = component;
        this.Number = data.Number;
        this.Name = data.Name;
        this.Declaration = data.Declaration ? data.Declaration : '';
        this.Question = data.Question ? data.Question : '';
        this.Steps.YesStep = data.YesStep ? data.YesStep : StepEnum.Undefined;
        this.Steps.NoStep = data.NoStep ? data.NoStep : StepEnum.Undefined;
        this.Steps.PrevStep = data.PrevStep ? data.PrevStep : StepEnum.Undefined;
        this.Steps.NextStep = data.NextStep ? data.NextStep : StepEnum.Undefined;

    }
}

export class StepOptions {
    YesStep: StepEnum;
    NoStep: StepEnum;
    PrevStep: StepEnum;
    NextStep: StepEnum;
    OkStep: StepEnum;
    CancelStep: StepEnum;
}


