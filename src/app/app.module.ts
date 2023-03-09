import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Content Components/navbar/navbar.component';
import { SufooterComponent } from './Content Components//sufooter/sufooter.component';
import { SidebarComponent } from './Content Components//sidebar/sidebar.component';
import { FpcarouselComponent } from './Content Components//fpcarousel/fpcarousel.component';
import { StreamcardComponent } from './Content Components//streamcard/streamcard.component';
import { LayoutChannelComponent } from './Layout Components/layout-channel/layout-channel.component';
import { LayoutFrontpageComponent } from './Layout Components/layout-frontpage/layout-frontpage.component';
import { CategorycardComponent } from './Content Components/categorycard/categorycard.component';
import { LayoutBrowseComponent } from './Layout Components/layout-browse/layout-browse.component';
import { GenrebuttonComponent } from './Content Components/genrebutton/genrebutton.component';
import { FiltertypebuttonComponent } from './Content Components/filtertypebutton/filtertypebutton.component';
import { LayoutDownloadsComponent } from './Layout Components/layout-downloads/layout-downloads.component';
import { DownloadcardComponent } from './Content Components/downloadcard/downloadcard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SufooterComponent,
    SidebarComponent,
    FpcarouselComponent,
    StreamcardComponent,
    LayoutChannelComponent,
    LayoutFrontpageComponent,
    CategorycardComponent,
    LayoutBrowseComponent,
    GenrebuttonComponent,
    FiltertypebuttonComponent,
    LayoutDownloadsComponent,
    DownloadcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
