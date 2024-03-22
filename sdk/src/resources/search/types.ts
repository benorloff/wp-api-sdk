export declare type Page = {
    date?: string;
    date_gmt?: string;
    guid: object;
    id: number;
    link: string;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "future" | "draft" | "pending" | "private";
    type: string;
    password: string;
    permalink_template: string;
    generated_slug: string;
    parent: number;
    title: object;
    content: object;
    author: number;
    excerpt: object;
    featured_media: number;
    comment_status: "open" | "closed";
    ping_status: "open" | "closed";
    menu_order: number;
    meta: object;
    template: string;
}