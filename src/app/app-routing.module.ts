import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontpageComponent } from './layout-frontpage/layout-frontpage.component';
import { LayoutChannelComponent } from './layout-channel/layout-channel.component';

const routes: Routes = [
  {path: '', component:LayoutFrontpageComponent},
  {path: 'Front-page', component: LayoutFrontpageComponent},
  {path: 'Channel-page', component: LayoutChannelComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
