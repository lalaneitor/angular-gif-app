import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import {Gif} from '../../interfaces/gif.interfaces'

@Component({
  selector: 'home-page-gif',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifService:GifService) { }

  get gifs():Gif[]{
    return this.gifService.gifList;
  }


}
