import { Status } from "./inspiration";

export interface IOutline {
    _id?: string;
    text: string;
    category: string;
    status: Status;
    userId?: string;
    inspirationId?: string;
}