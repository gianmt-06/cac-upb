import {RepositoryPort} from "../../domain/port/driven/RepositoryPort";

export default class Repository<T> implements RepositoryPort<T>{
    private headers = {
        'Content-Type': 'application/json'
    }

    constructor(headers?: Record<string, string>){
        if(headers) this.headers = { ...this.headers, ...headers }
    }

    get = async(url: string): Promise<T> => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: this.headers
            });

            return response.json() as T;
        } catch (error) {
            throw new Error("GET Error")
        }
    }

    post = async(url: string, body: T) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: body as BodyInit
            });

            return await response.json();
        } catch (error) {
            throw new Error("POST Error")
        }
    }

    put = async(url: string, body: T): Promise<T> => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: this.headers,
                body: body as BodyInit
            });
            
            return await response.json();
        } catch (error) {
            throw new Error("POST Error")
        }
    }

    patch = async(url: string, body: T): Promise<T> => {
        try {
            const response = await fetch(url, {
                method: 'PUTCH',
                headers: this.headers,
                body: body as BodyInit
            });
            
            return await response.json();
        } catch (error) {
            throw new Error("POST Error")
        }
    }
    
    delete = async(url: string): Promise<T> => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: this.headers,
            });
            
            return await response.json();
        } catch (error) {
            throw new Error("POST Error")
        }
    }

    public setHeaders = (headers: Record<string, string>) => {
        this.headers = { ...this.headers, ...headers };
    }
}