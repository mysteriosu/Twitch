import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtertypebutton',
  templateUrl: './filtertypebutton.component.html',
  styleUrls: ['./filtertypebutton.component.css']
})
export class FiltertypebuttonComponent {
  @Input() filterType: string
constructor(){
  this.filterType="placeholder";
}
}