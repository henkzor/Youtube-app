import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {

	constructor(private router:Router, private login:LoginService ) { }


	WelcomePageTitle = "Welcome to YouTube, but in Angular!";
	

	
	LoginFunction(e)
	{
		var Username = e.target.elements[0].value;
		var Password= e.target.elements[1].value;
		console.log (Username, Password);
		
		if (Username == "Henrik" && Password == "Henrik")
		{
			this.login.setUserLoggedIn();
			this.router.navigate(["usersida"]);
			
		}
		
		
		return false;
	}
	

 

  ngOnInit() {	
  }

}
