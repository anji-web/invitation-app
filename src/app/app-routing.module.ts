import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { HomeComponent } from './home/home.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "gift-form", component: GiftRegistryComponent },
  { path: "video", component: VideoComponent },
  { path: "photo", component: PhotoGaleryComponent },
  {path:"live", component:LiveStreamingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
