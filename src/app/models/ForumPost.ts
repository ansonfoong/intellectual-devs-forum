export default interface ForumPost {
    title: string;
    comments?: Array<any>;
    author?: string;
    content?: string;
    category: string;
    topic: string;
}