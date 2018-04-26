import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { VideosidaComponent } from './videosida/videosida.component';
import { UsersidaComponent } from './usersida/usersida.component';
import { SettingsidaComponent } from './settingsida/settingsida.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { BackgroundComponent } from './background/background.component';

import { LoginService } from "./login.service"
import { AuthenticationGuard } from "./authentication.guard";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const appRoutes: Routes = 
[
	{path: "",
	component: StartsidaComponent},
	
	{path: "videosida",
	component: VideosidaComponent},
	
	{path: "usersida",
	canActivate: [AuthenticationGuard],
	component: UsersidaComponent},
	
	{path: "settingsida",
	component: SettingsidaComponent},
	
	{path: "startsida",
	component: StartsidaComponent},
	
	{ path: '**', 
	component: PagenotfoundComponent }
	

]



@NgModule({
  declarations: [
    AppComponent,
    StartsidaComponent,
    VideosidaComponent,
    UsersidaComponent,
    SettingsidaComponent,
    NavigationbarComponent,
    BackgroundComponent,
    PagenotfoundComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [LoginService, AuthenticationGuard, VideosidaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
