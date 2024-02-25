import { Component, HostListener } from '@angular/core';
import { Artist } from '../artist.model';
import { ActivatedRoute } from '@angular/router'; 
import { RestService } from '../rest.service';
import * as moment from 'moment';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})

export class ArtistDetailComponent {
  
  artist : Artist = new Artist;
  audioObj = new Audio();

  currentTime : string = '0:00';
  musicLength: string = '0:00';
  duration : number = 1;

//   isplaying : boolean = false;
    
  files = 
  [
   
    {  link: '/assets/songs/ts-hygtg.mp3',
       title:'How You Get The Girl',
       id:1
    },
    {  link: '/assets/songs/ts-tmw.mp3',
       title:'Tell Me Why',
       id:1
    },
    {  link: '/assets/songs/ts-cardigan.mp3',
       title:'Cardigan',
       id:1
    },
    {  link: '/assets/songs/nova-peşindeyim.mp3',
     title:'Peşindeyim Kendimin',
     id:2
    },
    {  link: '/assets/songs/nova-beteriyok.mp3',
     title:'Beteri Yok Uslanmaktan',
     id:2
    },
    {  link: '/assets/songs/nova-pelin.mp3',
    title:'Pelin',
    id:2
    },
    {  link: '/assets/songs/dktt-korku.mp3',
     title:'Korku',
     id:3
    },
    {  link: '/assets/songs/dktt-birbildiğinvardır.mp3',
     title:'Bir Bildiğin Vardır',
     id:3
    },
    {  link: '/assets/songs/dktt-hiçiyideğilim.mp3',
     title:'Hiç İyi Değilim',
     id:3
    }, 
    {  link: '/assets/songs/dktt-dilerimki.mp3',
     title:'Dilerim Ki',
     id:3
    },   
    {  link: '/assets/songs/morötesi-karakutu.mp3',
     title:'Kara Kutu',
     id:4
    },
    {  link: '/assets/songs/morötesi-araf.mp3',
     title:'Araf',
     id:4
    },
    {  link: '/assets/songs/morötesi-dahamutuolamam.mp3',
     title:'Daha Mutlu Olamam',
     id:4
    }
  
]

  constructor( private route: ActivatedRoute , private service : RestService ) {


       this.audioObj.ondurationchange = () => {

          const totalSeconds = Math.floor(this.audioObj.duration),
          duration = moment.duration(totalSeconds, 'seconds');
          this.musicLength = duration.seconds() < 10 ?
                         `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` :
                          
                          `${Math.floor(duration.asMinutes())}:
                           ${duration.seconds()}`;

            this.duration = totalSeconds;
                           
       }

       this.audioObj.ontimeupdate = () => {

        const duration = moment.duration(
        Math.floor(this.audioObj.currentTime), 'seconds');
        this.currentTime = duration.seconds() < 10 ? 
                           `${Math.floor(duration.asMinutes())}:
                            0${duration.seconds()}` : 

                           `${Math.floor(duration.asMinutes())}:
                            ${duration.seconds()}`;

       }
  

  }
  

  ngOnInit(): void {

    this.route.params.subscribe( params => {
        
       this.service.getArtistsbyId(params["id"]).subscribe( data => {
            this.artist = data;
        })
  
     })
  }


   @HostListener('window:popstate') onClickBack() {  //arrowdan geri gidince müziği durduruyor
      this.audioObj.pause();
   }

   openFile( url : any ) {
    this.audioObj.src = url;
    this.audioObj.load();
    this.audioObj.play();
   }

   play(){   
    this.audioObj.play();
  }
  
  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }

  pause() {
     this.audioObj.pause();
  }

  setVolume( event : any) {
     this.audioObj.volume = event.target.value;
     console.log(event.target.value);
  }

  durationSlider( event : any) {
    this.audioObj.currentTime = event.target.value;
  }



}
