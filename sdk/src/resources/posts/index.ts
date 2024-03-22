import { Base } from "../base";
import { Post } from "./types";

const resourceName = 'posts';

export class Posts extends Base {
    getPostById(id: number): Promise<Post> {
        return this.request<Post>(`/${resourceName}/${id}`);
    }

    getPosts(): Promise<Post[]> {
        return this.request<Post[]>(`/${resourceName}`);
    }
}