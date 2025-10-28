import { DomainError } from "../../../shared/domain/errors/DomainError";

export type TaskStatusType = 'pending' | 'completed' | 'failed';

export class TaskStatus {
    constructor(private readonly value: TaskStatusType) {
        if (!['pending', 'completed', 'failed'].includes(value)) {
            throw new DomainError(`Invalid TaskStatus: ${value}`);
        }
    }

    static pending(): TaskStatus {
        return new TaskStatus('pending');
    }

    static completed(): TaskStatus {
        return new TaskStatus('completed');
    }

    static failed(): TaskStatus {
        return new TaskStatus('failed');
    }

    toPrimitives() {
        return this.value;
    }
}
