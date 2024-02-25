import { Injectable, OnInit } from "@angular/core";
import { Artist } from "./artist.model";
import { RestService } from "./rest.service";

@Injectable()

export class ArtistRepository implements OnInit{
    private artists: Artist[] = [];

    constructor( private restService: RestService) {
        this.restService.getArtists().subscribe( artists => this.artists = artists )
    }

    ngOnInit() {}

    getArtists(): Artist[] {
      return this.artists;
    } 

}


