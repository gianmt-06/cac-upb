export default interface Repository<T, E> {
    getOne: (key: E) => Promise<T>;
    getAll: () => T[];
    save: (element: T) => Promise<boolean>;
    update: (key: E, partial: T) => T | boolean;
    delete: (key: E) => boolean;
}