import { Status } from "./inspiration";

export interface IDraft {
    _id?: string;
    text: string;
    category: string;
    status: Status;
    userId?: string;
    outlineId: string;
}