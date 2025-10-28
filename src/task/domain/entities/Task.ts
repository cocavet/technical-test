import { Entity } from "../../../shared/domain/abstract/Entity";
import { DomainError } from "../../../shared/domain/errors/DomainError";
import { TaskProps } from "../interfaces/Task";
import { IdTask } from "../valueObjects/IdTask";
import { Price } from "../valueObjects/Price";
import { ProcessedImage } from "../valueObjects/ProcessedImage";
import { TaskStatus } from "../valueObjects/TaskStatus";

export class Task extends Entity<TaskProps> {
    constructor(props: TaskProps) {
        super(props);
    }

    static createNew(originalPath: string): Task {
        return new Task({
            id: IdTask.create(),
            status: TaskStatus.pending(),
            price: Price.randomPrice(),
            originalPath,
            images: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    markAsCompleted(images: ProcessedImage[]): void {
        if (this.props.status.toPrimitives() === 'completed') {
            throw new DomainError('Task is already completed');
        }

        this.props.status = TaskStatus.completed();
        this.props.images = images;
        this.props.updatedAt = new Date();
    }

    markAsFailed(): void {
        if (this.props.status.toPrimitives() === 'failed') {
            throw new DomainError('Task is already failed');
        }
        this.props.status = TaskStatus.failed();
        this.props.updatedAt = new Date();
    }

    isPending(): boolean {
        return this.props.status.toPrimitives() === 'pending';
    }

    toPrimitives() {
        const { id, status, price, originalPath, images, createdAt, updatedAt } = this.props;

        return {
            id: id.toPrimitives(),
            status: status.toPrimitives(),
            price: price.toPrimitives(),
            originalPath,
            images: images.map(i => i.toPrimitives()),
            createdAt,
            updatedAt,
        };
    }
}