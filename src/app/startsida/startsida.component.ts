import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {

	WelcomePageTitle = "YouTube-Angular";
	
	clickMessage = "";
	
	VideoButtonClick()
	{
		this.clickMessage = "Knappen för video intryckt";
			
	}

  constructor() { }

  ngOnInit() {
  }

}
