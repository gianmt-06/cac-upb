import QueueInterface from "../interface/QueueInterface";

export default class DynamicQueue<T> implements QueueInterface<T> {
    private list:  T[];

    constructor() {
        this.list = [];
    }

    public insert = (object: T) => {
        if (object == null) return;
        try {
            this.list.push(object);
        } catch (error) {
            console.log(error);
        }
    }

    extract = (): T => {
        try {
            const returnObject = this.list[0];
            this.list.shift();
            return returnObject;
        } catch (error) {
            console.log(error);
            throw Error
        }
    }

    public isEmpty = (): boolean => {
        return this.list.length === 0;
    }
    
    size = (): number => {
        return this.list.length
    }

    toString = (): string => {  
        return this.list.toString();
    }

    getList = (): T[] => {
        return this.list
    }
}