import DynamicQueue from "../priorityQueue/DynamicQueue";

export default interface PriorityQueueInterface<T> {
    insert: (object: T, priority: number) => void;
    extract: () => T;
    getPriorityQueue:    (priority: number) => DynamicQueue<T>;
    print: () => void;
}