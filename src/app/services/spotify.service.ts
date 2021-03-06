import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: any;

  constructor( private http: HttpClient ) { 
    this.getToken();
  }

  getToken() {
    const clientId = 'ca93c74b29c446dab4ffed58897b0024';
    const clientSecret = '592f0cf3623e4a8192259ffda1b4d3a7';

    const body = new HttpParams()
      .append('grant_type', 'client_credentials')
      .append('client_id', clientId)
      .append('client_secret', clientSecret);

    this.http.post('https://accounts.spotify.com/api/token', body)
      .toPromise().then( (token:any) => {
        this.token = `Bearer ${token['access_token']}`;
        console.log(this.token);
      }, (err: any) => {
        console.log(err);
      });
  }

  getQuery( query:string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': `${this.token}`
    });

    return this.http.get(url, {headers});

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ) );

  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe( map( data => data['artists'].items ) );

  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`);
      //.pipe( map( data => data['artists'] ) );

  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=mx`)
      .pipe( map( data => data['tracks'] ) );

  }
  
}
