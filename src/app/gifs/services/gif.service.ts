import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifService {


  private _taghistory: string[] = [];
  private apiKey:string = 'o48OUEHcXYwRUUnoTQCJAnp1TOPmDiZ1';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';


  public gifList:Gif[] = []
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
   }
  

  private organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase();
    if(this._taghistory.includes(tag)){
      this._taghistory = this._taghistory.filter(oldTag => oldTag !== tag)
    }

    this._taghistory.unshift(tag);
    this._taghistory = this.tagHistory.splice(0,10);
    this.saveLocalStorage();
  }

  get tagHistory(){
    return [...this._taghistory]
  }

  searchTag (tag:string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams().set('api_key', this.apiKey)
                                  .set('limit',12)
                                  .set('q', tag)


    this.http.get<SearchResponse>(`${this.apiUrl}/search?`,{params})
      .subscribe(resp => {
        this.gifList = resp.data;
        //console.log({gifs: this.gifList});
    })

  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._taghistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')){
      return
    }
    this._taghistory = JSON.parse(localStorage.getItem('history')!);
  }


}
