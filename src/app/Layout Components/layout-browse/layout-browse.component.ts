import { Component } from '@angular/core';
import { mock_genre_list } from 'src/app/Content Components/genrebutton/mock_genre_list';
import { GenreButtonModel } from 'src/app/Content Components/genrebutton/genrebutton.model';
import { CategoryCardModel } from 'src/app/Content Components/categorycard/categorycard.model';
import { mock_category_list } from 'src/app/Content Components/categorycard/mock_category_list';

@Component({
  selector: 'app-layout-browse',
  templateUrl: './layout-browse.component.html',
  styleUrls: ['./layout-browse.component.css']
})
export class LayoutBrowseComponent {
  genres: GenreButtonModel [] = []
  categories: CategoryCardModel [] = []

  constructor(){
    for (var genrebutton of mock_genre_list){
      console.log(genrebutton);
      this.genres.push(genrebutton);
    }
    for(var categoryList of mock_category_list){
      console.log(categoryList);
      this.categories.push(categoryList);
    }
  }
}
