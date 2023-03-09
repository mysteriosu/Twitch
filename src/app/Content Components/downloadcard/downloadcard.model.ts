export class DownloadCardModel {
    img: string;
    appTitle: string;
    desc: string;
    buttonText: string;
    ref: string;



    constructor(img: string, appTitle: string, desc: string, buttonText: string, ref: string) {
        this.img=img;
        this.appTitle = appTitle;
        this.desc = desc;
        this.buttonText = buttonText;
        this.ref = ref;
    }
}