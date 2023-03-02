import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-streamcard',
  templateUrl: './streamcard.component.html',
  styleUrls: ['./streamcard.component.css']
})
export class StreamcardComponent {
  @Input() preview: string;
  @Input() pfp: string;
  @Input() streamerName: string;
  @Input() streamTitle: string;
  @Input() game: string;
  constructor() {
    this.pfp = "";
    this.streamTitle = "placeholder_title";
    this.game = "placeholder_game";
    this.preview = "";
    this.streamerName = "placeholder_name";
  }
}
