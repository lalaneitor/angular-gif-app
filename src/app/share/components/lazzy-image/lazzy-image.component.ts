import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lazzy-image',
  templateUrl: './lazzy-image.component.html',
})
export class LazzyImageComponent  implements OnInit {

  @Input()
  public url!: string;

  hasLoaded:boolean = false;

  ngOnInit(): void {
    if (!this.url){
      throw new Error('Url expected')
    }
  }
  
  onLoad(){
    this.hasLoaded = true;
  }


}
