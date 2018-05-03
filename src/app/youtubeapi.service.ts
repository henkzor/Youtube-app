import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/add/operator/map'


const Base_URL = "https://www.googleapis.com/youtube/v3/search";
const API_token = "AIzaSyBUB9Aew-KOxBbqhCFS1HYnwoEN-oGP43U";

@Injectable()
export class YoutubeapiService {

  constructor(private _http:Http) { }

  search (query)
  
  {
  return this._http.get('${Base_URL}?q=${query}&part=snippet&key=${API_token}')
	.map((res:Response) => res.json())
	.map(json => json.items);
  }
  
}
