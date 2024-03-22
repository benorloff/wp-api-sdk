import fetch from 'isomorphic-unfetch';

type Config = {
    apiKey: string;
    username: string;
    baseUrl: string;
}

export abstract class Base {
    private apiKey: string;
    private username: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.username = config.username;
        this.baseUrl = config.baseUrl;
    }

    protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${this.username}:${this.apiKey}`)}`
        };
        const config = {
            ...options,
            headers,
        };

        const res = await fetch(url, config);
        if (res.ok) {
            return res.json();
        }
        throw new Error(res.statusText);
    }
}