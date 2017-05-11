export enum StepEnum {
    Undefined = 0,
    IsActionable = 1,
    IsProject = 2,
    NonActionable = 3,
    ProjectPlan = 4,
    NextAction = 5,
    NewProject = 6,
    IsDoableNow = 7,
    DoItNow = 8,
    IsDelegatable = 9,
    MoveToDone = 10,
    Delegate = 11,
    IsSchedulable = 12,
    ApproveDelegation = 13,
    Schedule = 14,
    ApproveNewEvent = 15,
    RefineAction = 16,
    ApproveNewTask = 17,
    ApproveChange = 18,
    Start = 19,
    Done = 20
}

export enum InputTypeEnum {
    YesNo = 0,
    Options = 1,
    Form = 2,
    OkCancel = 3
}
