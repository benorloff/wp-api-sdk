import { Pages } from './resources/pages';
import { Posts } from './resources/posts';

export class Library {
    pages: Pages;
    posts: Posts;

    constructor(config: { apiKey: string, username: string, baseUrl: string }) {
        this.pages = new Pages(config);
        this.posts = new Posts(config);
    }
}