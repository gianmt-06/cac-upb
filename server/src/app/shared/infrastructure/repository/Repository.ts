export default interface Repository<T, E> {
    getOne: (key: E) => Promise<T>;
    getAll: () => Promise<T[]>;
    save: (element: T) => Promise<boolean>;
    update: (key: E, partial: T) => Promise<boolean>;
    delete: (key: E) => Promise<boolean>;
}