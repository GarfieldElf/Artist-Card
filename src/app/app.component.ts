import { Component } from '@angular/core';
import { Artist } from "./artist.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'MusicApp';
  selectedArtist :  Artist = null;
  constructor () {}

  // displayDetails( artist : Artist) {

  //      this.selectedArtist = artist;

  //      this.router.navigate(['/artists/', + this.selectedArtist.id ]);
  // }

}
