import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-videosida',
  templateUrl: './videosida.component.html',
  styleUrls: ['./videosida.component.css']
})
export class VideosidaComponent /*implements OnInit*/ {


	
	  
	//AIzaSyBUB9Aew-KOxBbqhCFS1HYnwoEN-oGP43U
	/*constructor() { }

	ngOnInit() {}
*/
	VideoPageTitle = "Video Page";
	
	
	var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubeIframeAPIReady() 
	{
		player = new YT.Player('player', 
		{
			height: '390',
			width: '640',
			videoId: 'M7lc1UVf-VE',
			events: 
			{
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}  
	   
	  
	function onPlayerReady(event) 
	{
		event.target.playVideo();
    }  
	
	
	 var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

}
