import { Component } from '@angular/core';
import { mock_genre_list } from 'src/app/Content Components/genrebutton/mock_genre_list';
import { GenreButtonModel } from 'src/app/Content Components/genrebutton/genrebutton.model';

@Component({
  selector: 'app-layout-browse',
  templateUrl: './layout-browse.component.html',
  styleUrls: ['./layout-browse.component.css']
})
export class LayoutBrowseComponent {
  genres: GenreButtonModel [] = []

  constructor(){
    for (var genrebutton of mock_genre_list){
      console.log(genrebutton);
      this.genres.push(genrebutton);
    }
  }
}
