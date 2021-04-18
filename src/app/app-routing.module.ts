import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "gift-form", component: GiftRegistryComponent },
  { path: "video", component: VideoComponent },
  { path: "admin", component: AdminComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
