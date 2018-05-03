import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx'; 
import { NgModule } from '@angular/core';
import { YoutubeapiService } from './youtubeapi.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports :		[ FormControl, ReactiveFormsModule ],
	declarations: 	[ AppComponent ],
	bootstrap:		[ AppComponent ]
})	

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  providers: [YoutubeapiService, FormControl, ReactiveFormsModule]
})
export class AppComponent {
  title = 'app';
  
  ViewedPage = "WelcomePage"
  
  search = new FormControl();
  
  results: Observable<any>;
  
  constructor (public youtube: YoutubeapiService)
  {
	this.results = 

		this.search.valueChanges
			.debounceTime(200)
			.switchMap(query => youtube.search(query));
	  
  }
  
}
