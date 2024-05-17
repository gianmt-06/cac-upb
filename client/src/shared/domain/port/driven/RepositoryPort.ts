export interface RepositoryPort<T> {
    get: (url: string) => Promise<T>;
    post: (url: string, body: T) => Promise<any>;
    put: (url: string, body: T) => Promise<any>;
    patch: (url: string, body: T) => Promise<any>;
    delete: (url: string) => Promise<any>;
}