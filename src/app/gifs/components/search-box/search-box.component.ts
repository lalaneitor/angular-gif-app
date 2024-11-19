import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')

  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifService: GifService) { }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

    
  }

}
