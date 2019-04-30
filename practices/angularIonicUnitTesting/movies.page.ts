import { MovieService, SearchType } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  movieTitles(): string {
    return 'Movie titles'
  }

  onClick(): string {
    return 'I was clicked'
  }

  callMovieService() {
    return this.movieService.searchData('argument')
  }
}
