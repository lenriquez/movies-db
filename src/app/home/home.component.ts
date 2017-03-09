import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { environment } from '../../environments/environment';
import { GenreService } from '../shared';

@Component({
  selector: 'mdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  movies: Observable<any>;

  constructor(private http: Http, private genre:GenreService ) {
    this.title = "Popular Movies";
  }

  ngOnInit() {
    console.log("On Init ")
    this.getMostPopularMovies();
  }

  getMostPopularMovies() {
    this.movies = this.http.get(environment.popular_movies)
      .map((movies) => movies.json().results);
  }
}
