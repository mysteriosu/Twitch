import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SufooterComponent } from './sufooter/sufooter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FpcarouselComponent } from './fpcarousel/fpcarousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SufooterComponent,
    SidebarComponent,
    FpcarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
