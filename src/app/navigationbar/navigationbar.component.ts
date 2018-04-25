import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(private router:Router) { }

  	clickMessage = "";
	
	RouteButtonClick(e)
	{	
	
	
		//this.clickMessage = "Knappen för routing intryckt";
		
		var ButtonID = e.target.attributes.id.nodeValue;
		console.log(ButtonID);
		
		this.router.navigate([ButtonID]);
		
			
	}
  
  
  
  ngOnInit() {
  }

}
