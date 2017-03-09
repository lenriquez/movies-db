import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs';

import { GenreService } from './genre.service'

@Pipe({
  name: 'translateGenre'
})
export class TranslateGenrePipe implements PipeTransform {

  constructor(private genreService: GenreService) { }

  transform(genre: Array<number>, args?: any): Observable<string> {
    return this.genreService.getGenreStream()
      .flatMap((map) => { return this.transformGenreIdtoString(genre) });
  }
  
  transformGenreIdtoString(genre: Array<number>): Observable<string>{
    return Observable.create((observer) => {
    let result: string = '';
    genre.forEach((genre: number) => {
      result += this.genreService.getGenreById(genre) + ', ';
      });
      observer.next(result.slice(0, -2));
    });
  }
}
