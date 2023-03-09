import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-downloadcard',
  templateUrl: './downloadcard.component.html',
  styleUrls: ['./downloadcard.component.css']
})
export class DownloadcardComponent {
  @Input() img: string;
  @Input() appTitle: string;
  @Input() desc: string;
  @Input() buttonText: string;
  @Input() ref: string;


constructor() {
  this.img = "";
  this.appTitle = "None found";
  this.desc = "No Description Found"
  this.buttonText = "Download Placeholder"
  this.ref = "LayoutFrontpageComponent"
}
}
