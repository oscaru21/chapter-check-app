export interface IInspiration {
    _id?: string;
    text: string;
    category: string;
    status: Status
    userId?: string;
}

export enum Status {
    DONE = 'Done',
    NOT_STARTED = 'Not Started',
    inProgress = 'In Progress'
}