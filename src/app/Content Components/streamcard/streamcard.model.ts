export class StreamCardModel {
    preview: string;
    pfp: string;
    game: string;
    streamTitle: string;
    streamerName: string;
    viewers: string;
    uptime: string;



    constructor(preview: string, pfp: string, game: string, streamTitle: string, streamerName: string, viewers: string, uptime: string, tags: string[]){
        this.viewers = viewers;
        this.uptime = uptime;
        this.preview = preview;
        this.pfp = pfp;
        this.game = game;
        this.streamTitle = streamTitle;
        this.streamerName = streamerName;
    }

}