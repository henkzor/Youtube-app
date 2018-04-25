import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {

	WelcomePageTitle = "YouTube-Angular";
	

	
	LoginFunction(e)
	{
		var Username = e.target.elements[0].value;
		var Password= e.target.elements[1].value;
		console.log (Username, Password);
		
		if (Username == "Henrik" && Password == "Henrik")
		{
			
			this.router.navigate(["videosida"]);
			
		}
		
		
		return false;
	}
	

  constructor(private router:Router) { }

  ngOnInit() {	
  }

}
