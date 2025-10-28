import { IdTask } from "../valueObjects/IdTask";
import { Price } from "../valueObjects/Price";
import { ProcessedImage } from "../valueObjects/ProcessedImage";
import { TaskStatus } from "../valueObjects/TaskStatus";

export interface TaskProps {
    id: IdTask;
    status: TaskStatus;
    price: Price;
    originalPath: string;
    images: ProcessedImage[];
    createdAt: Date;
    updatedAt: Date;
}