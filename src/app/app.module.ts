import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SufooterComponent } from './sufooter/sufooter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FpcarouselComponent } from './fpcarousel/fpcarousel.component';
import { StreamcardComponent } from './streamcard/streamcard.component';
import { LayoutChannelComponent } from './layout-channel/layout-channel.component';
import { LayoutFrontpageComponent } from './layout-frontpage/layout-frontpage.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
