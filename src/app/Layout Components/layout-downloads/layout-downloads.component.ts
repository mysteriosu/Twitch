import { Component } from '@angular/core';
import { DesktopApps } from 'src/app/Content Components/downloadcard/mock_app_list';
import { MobileApps } from 'src/app/Content Components/downloadcard/mock_app_list';
import { TVApps } from 'src/app/Content Components/downloadcard/mock_app_list';
import { DownloadCardModel } from 'src/app/Content Components/downloadcard/downloadcard.model';

@Component({
  selector: 'app-layout-downloads',
  templateUrl: './layout-downloads.component.html',
  styleUrls: ['./layout-downloads.component.css']
})
export class LayoutDownloadsComponent {
  desktop: DownloadCardModel[] = [];
  mobile: DownloadCardModel[] = [];
  tv: DownloadCardModel[] = [];

  constructor() {
    for (var desktopApps of DesktopApps) {
      console.log(desktopApps);
      this.desktop.push(desktopApps)
    }

    for(var mobileApps of MobileApps) {
      console.log(mobileApps);
      this.mobile.push(mobileApps)
    }

    for(var tvApps of TVApps){
      console.log(tvApps);
      this.tv.push(tvApps)
    }

  }
}
