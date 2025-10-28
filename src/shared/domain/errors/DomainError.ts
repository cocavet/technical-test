import { AppErrors } from '../abstract/AppErrors';

export class DomainError extends AppErrors {
    constructor(message: string) {
        super(message, 422);
    }

    toResponse() {
        return {
            error: 'DomainError',
            message: this.message,
        };
    }
}