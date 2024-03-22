import { BlockDirectoryItems } from './resources/block-directory-items';
import { Pages } from './resources/pages';
import { Posts } from './resources/posts';

export class Wp {
    blockDirectoryItems: BlockDirectoryItems;
    blockRenderer: BlockRenderer;
    blockRevisions: BlockRevisions;
    blocks: Blocks;
    categories: Categories;
    comments: Comments;
    media: Media;
    pageRevisions: PageRevisions;
    pages: Pages;
    plugins: Plugins;
    postRevisions: PostRevisions;
    postStatuses: PostStatuses;
    postTypes: PostTypes;
    posts: Posts;
    search: Search;
    settings: Settings;
    tags: Tags;
    taxonomies: Taxonomies;
    themes: Themes;
    users: Users;

    constructor(config: { apiKey: string, username: string, baseUrl: string }) {
        this.blockDirectoryItems = new BlockDirectoryItems(config);
        this.blockRenderer = new BlockRenderer(config);
        this.blockRevisions = new BlockRevisions(config);
        this.blocks = new Blocks(config);
        this.categories = new Categories(config);
        this.comments = new Comments(config);
        this.media = new Media(config);
        this.pageRevisions = new PageRevisions(config);
        this.pages = new Pages(config);
        this.plugins = new Plugins(config);
        this.postRevisions = new PostRevisions(config);
        this.postStatuses = new PostStatuses(config);
        this.postTypes = new PostTypes(config);
        this.posts = new Posts(config);
        this.search = new Search(config);
        this.settings = new Settings(config);
        this.tags = new Tags(config);
        this.taxonomies = new Taxonomies(config);
        this.themes = new Themes(config);
        this.users = new Users(config);
    }
}