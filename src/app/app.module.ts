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

const appRoutes: Routes = 
[
	{path: "",
	component: StartsidaComponent},
	
	{path: "videosida",
	component: VideosidaComponent},
	
	{path: "usersida",
	component: UsersidaComponent},
	
	{path: "settingsida",
	component: SettingsidaComponent},
	
	{path: "startsida",
	component: StartsidaComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    StartsidaComponent,
    VideosidaComponent,
    UsersidaComponent,
    SettingsidaComponent,
    NavigationbarComponent,
    BackgroundComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
