import { Base } from "../base";
import { Page } from "./types";

const resourceName = 'pages';

export class Pages extends Base {
    getPageById(id: number): Promise<Page> {
        return this.request<Page>(`/${resourceName}/${id}`);
    }

    getPages(): Promise<Page[]> {
        return this.request<Page[]>(`/${resourceName}`);
    }
}