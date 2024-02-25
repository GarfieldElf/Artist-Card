import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from './artist.model';

@Injectable()
export class RestService {

  baseUrl: string = "http://localhost:3000/";

  constructor( private http: HttpClient ) { }

  getArtists() : Observable<Artist[]> {
    return this.http.get<Artist[]>( this.baseUrl + 'artists');
  }

  getArtistsbyId( artistId : number) : Observable<Artist> {
    return this.http.get<Artist>( this.baseUrl + 'artists/' + artistId);
  }


}
