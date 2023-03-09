import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontpageComponent } from './Layout Components/layout-frontpage/layout-frontpage.component';
import { LayoutChannelComponent } from './Layout Components/layout-channel/layout-channel.component';
import { LayoutBrowseComponent } from './Layout Components/layout-browse/layout-browse.component';
import { LayoutDownloadsComponent } from './Layout Components/layout-downloads/layout-downloads.component';

const routes: Routes = [
  {path: '', component:LayoutFrontpageComponent},
  {path: 'Front-page', component: LayoutFrontpageComponent},
  {path: 'Channel-page', component: LayoutChannelComponent},
  {path: 'Directory', component: LayoutBrowseComponent},
  {path: 'Downloads', component: LayoutDownloadsComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
