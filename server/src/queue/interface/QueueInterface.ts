export default interface QueueInterface<T> {
    isEmpty: () => boolean;
    extract: () => T;
    insert:(element: T) => void;
    size: () => number;
    toString: () => string;
}