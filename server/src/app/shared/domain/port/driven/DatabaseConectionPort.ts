export default interface DatabaseConectionPort<T,E> {
    query: (query: E, values?: any[]) => Promise<T>
}