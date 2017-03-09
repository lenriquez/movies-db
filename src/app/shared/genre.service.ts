import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class GenreService {

  genres: Observable<any>;

  constructor(private http: Http) { 
    this.getGenres();
  }

  // https://api.themoviedb.org/3/genre/movie/list?api_key=ec92634a4466078d022a85a41caee33e&language=en-US
  getGenres(): void {
    this.genres = this.http.get(environment.genres)
      .map((response: Response) => response.json())
      .map((json) => this.mapGenres(json))
      .share(); // Avoid to hit the API many times
  }

  // The stream is shared just to make sure if this API call is taking longer 
  // a result will show up at some point and not just empty or undefined 
  getGenreStream(): Observable<any> {
    return this.genres;
  }

  // Helper function that will take care of transforming the array of genres to
  // an object so those can be access as a Hash
  private mapGenres(json) {
    json.genres.forEach((genre) => {
      this.genres[genre.id] = genre.name;
    });
  }

  // This function here just to make sure the Observer do not have to remap the 
  // genres array, I would love to here for a better solution
  getGenreById(id: number): string {
    return this.genres[id]
  }
}
