import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styles: [
  ]
})
export class LandingpageComponent {

  constructor( private spotify: SpotifyService ) { 
    this.spotify.getNewReleases();
  }

}
