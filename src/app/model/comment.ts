export class Comment {
    public id: number;
    public websiteId: number;
    public post: string;
    public createdDate: Date;

    constructor() {
        this.id = undefined;
        this.websiteId = undefined;
        this.post = '';
        this.createdDate = undefined;
    }
}