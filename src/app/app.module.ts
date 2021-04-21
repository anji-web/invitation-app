import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { GiftRegistryComponent } from './gift-registry/gift-registry.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiftRegistryComponent,
    VideoComponent,
    PhotoGaleryComponent,
    LiveStreamingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
