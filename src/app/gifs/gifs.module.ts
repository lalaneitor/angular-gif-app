import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { ShareModule } from '../share/share.module';




@NgModule({
  declarations: [
    HomePageComponent,
     SearchBoxComponent,
     CardListComponent,
     GifCardComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    HomePageComponent,
    SearchBoxComponent,
    GifCardComponent

  ]
})
export class GifsModule { }
