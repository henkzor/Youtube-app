import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-usersida',
  templateUrl: './usersida.component.html',
  styleUrls: ['./usersida.component.css']
})
export class UsersidaComponent implements OnInit {

	constructor(private login: LoginService) { }

	UserPageTitle = "User Page"



  ngOnInit() {
  }

}
