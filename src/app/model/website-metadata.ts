export class WebsiteMetaData {

    public id: number;
    public url: string;
    public title: string;
    public description: string;
    public imageLink: string;
    public type: string;
    public viewCount: number;

    constructor() {
        this.id = undefined;
        this.url = '';
        this.title = '';
        this.description = '';
        this.imageLink = '';
        this.type = '';
        this.viewCount = 0;
    }
}