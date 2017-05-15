import { Type } from '@angular/core';
import { StepEnum, InputTypeEnum } from './step.enum';
import { WizStateChange } from './step.model';


interface IUpdate {
    update(stateChange:WizStateChange);
}
export default IUpdate;

// export interface IStep {
//     Name: StepEnum;    
//     Component: Type<any>;
//     Declaration: string;
//     Question: string;
//     Data: any;
//     Steps: any;
    
// }



