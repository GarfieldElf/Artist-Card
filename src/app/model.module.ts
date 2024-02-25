import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { RestService } from "./rest.service";
import { ArtistRepository } from "./artist.repository";


@NgModule({
    imports: [ HttpClientModule ],
    providers: [RestService, ArtistRepository] //servisler
})

export class ModelModule {}