import PriorityQueueInterface from "../interface/PriorityQueueInterface";
import DynamicQueue from "./DynamicQueue";

export default class PriorityQueue<T> implements PriorityQueueInterface<T> {
    private dinamycQueue: DynamicQueue<T>[];

    constructor(priorityQuant: number){
        this.dinamycQueue =Array.from({ length: priorityQuant }, () => new DynamicQueue<T>());
    }
 
    public insert = (object: T, priority: number) => {
        
        if(!object || priority < 0 || priority > this.dinamycQueue.length) return; 
        try {
            this.dinamycQueue[priority].insert(object);
        } catch (error) {
            console.log(error);    
        }
    }

    public extract = (): T => {
        try {
            for(let queue of this.dinamycQueue){
                if(!queue.isEmpty()) return queue.extract();
            }
            throw Error
        } catch (error) {
            console.log(error);
            throw Error
        }
    }

    public getPriorityQueue = (priority: number): DynamicQueue<T>  => {
        return this.dinamycQueue[priority];
    }

    public print = () => {
        for(let i = 0; i < this.dinamycQueue.length; i++){
            console.log("PRIORIDAD " + i);
            console.log("ELEMENTOS:");
            this.dinamycQueue[i]
            console.log(this.dinamycQueue[i].getList());
        }
    }
}