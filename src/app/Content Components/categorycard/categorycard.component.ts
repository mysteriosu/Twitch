import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent {
  @Input() img: string;
  @Input() Category: string;


constructor() {
  this.img = "";
  this.Category = "None found";
}

}