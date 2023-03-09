export class CategoryCardModel {
    img: string;
    category: string;
    viewers: string;



    constructor(category: string, image: string, viewers: string) {
        this.category = category;
        this.img = image;
        this.viewers = viewers;
    }
}