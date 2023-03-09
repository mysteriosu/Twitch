import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent {
  @Input() img: string;
  @Input() category: string;
  @Input() viewers: string;


constructor() {
  this.img = "";
  this.category = "None found";
  this.viewers = "0K"
}

}