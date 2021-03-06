import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artista: any = {};
  topTracks: any[] = [];
  activo: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService ) { 

                this.activo = true;

    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.activo = false;
    });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}
