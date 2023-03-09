import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genrebutton',
  templateUrl: './genrebutton.component.html',
  styleUrls: ['./genrebutton.component.css']
})
export class GenrebuttonComponent {
  @Input() image: string;
  @Input() category: string;

  constructor(){
    this.image="";
    this.category="No cat. found"
  }
}
