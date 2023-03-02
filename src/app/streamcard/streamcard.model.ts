export class StreamCardModel{
    preview: string;
    pfp: string;
    game: string;
    streamTitle: string;
    streamerName: string;


constructor(preview: string, pfp: string, game: string, streamTitle: string, streamerName: string){
this.preview = preview;
this.pfp = pfp;
this.game = game;
this.streamTitle = streamTitle;
this.streamerName = streamerName;
}

}