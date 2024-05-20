import Environment from "../config/Environment";

const environment = new Environment()

export const getPriority = (age: number, clientType: string) => {
    const priorityAge = environment.PRIORITY_AGE;
    const priorityClientType = environment.PRIORITY_CLIENT_TYPE;

    if (age > priorityAge && clientType == priorityClientType) {
        return 0;
    } else if (age > priorityAge) {
        return 1;
    } else if (clientType == priorityClientType) {
        return 2
    }
    return 3;
}