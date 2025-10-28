import { v4 as uuidv4 } from 'uuid';
import { DomainError } from '../../../shared/domain/errors/DomainError';

export class IdTask {
    constructor(private readonly id: string = uuidv4()) {
        if (!this.validateUUID(this.id)) {
            throw new DomainError('Invalid UUID format for IdTask');
        }
    }

    static create(id?: string) {
        return new IdTask(id);
    }

    private validateUUID(id: string): boolean {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidRegex.test(id);
    }

    toPrimitives() {
        return this.id;
    }
}