import { Component } from '@angular/core';
import { mock_stream_list } from './streamcard/mock_stream_list';
import { StreamCardModel } from './streamcard/streamcard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitch';
  }
