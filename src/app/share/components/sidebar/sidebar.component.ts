import { Component, Input, OnInit } from '@angular/core';
import { GifService } from '../../../gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private gifService:GifService) { }
  
  get tags(){
    return this.gifService.tagHistory;
  }

  searchTag(tag: string) {
    this.gifService.searchTag(tag);
  }

}
