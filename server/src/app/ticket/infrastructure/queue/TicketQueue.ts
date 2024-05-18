import PriorityQueue from "../../../../queue/priorityQueue/PriorityQueue";
import TicketDTO from "../../domain/model/TicketDTO/TicketDTO";

export default class TicketQueue extends PriorityQueue<TicketDTO> {
    private static instance: TicketQueue;

    public static getInstance(priorityQuant: number): TicketQueue {
        if (!TicketQueue.instance) {
            TicketQueue.instance = new TicketQueue(priorityQuant);
        }
        return TicketQueue.instance;
    }
}