import { Component } from '@angular/core';
import { Artist } from '../artist.model';
import { ArtistRepository } from '../artist.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor ( private artistRepository : ArtistRepository ) {}

  get artists(): Artist[] {
    return this.artistRepository.getArtists();
  }


}
