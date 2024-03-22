import { Base } from "../base";
import { BlockRevision } from "./types";

const resourceName = 'blocks/<parent>/revisions';

export class BlockRevisions extends Base {

    getBlockRevisions(): Promise<BlockRevision[]> {
        return this.request<BlockRevision[]>(`/${resourceName}`);
    }
}