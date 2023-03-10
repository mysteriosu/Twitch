import { Component } from '@angular/core';
import { StreamCardModel } from 'src/app/Content Components/streamcard/streamcard.model';
import { mock_stream_list } from 'src/app/Content Components/streamcard/mock_stream_list';

@Component({
  selector: 'app-layout-frontpage',
  templateUrl: './layout-frontpage.component.html',
  styleUrls: ['./layout-frontpage.component.css']
})
export class LayoutFrontpageComponent {
  products: StreamCardModel [] = [];

  constructor(){
    for (var product of mock_stream_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
