import { Base } from "../base";
import { BlockDirectoryItem } from "./types";

const resourceName = 'blockDirectoryItems';

export class BlockDirectoryItems extends Base {

    getBlockDirectoryItems(): Promise<BlockDirectoryItem[]> {
        return this.request<BlockDirectoryItem[]>(`/${resourceName}`);
    }
}