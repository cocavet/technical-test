import { DomainError } from "../../../shared/domain/errors/DomainError";

export class ProcessedImage {
    constructor(
        private readonly resolution: number,
        private readonly path: string
    ) {
        if (resolution <= 0) throw new DomainError('Resolution must be positive');
        if (!path || !path.trim()) throw new DomainError('Path cannot be empty');
    }

    toPrimitives() {
        return {
            resolution: this.resolution,
            path: this.path
        };
    }
}