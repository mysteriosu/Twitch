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
  products: StreamCardModel [] = [];

  constructor(){
    for (var product of mock_stream_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
