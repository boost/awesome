import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPage } from './movies.page';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';


describe('MoviesPage with mocked Movie Service', () => {
  let comp: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;
  let movieService
  class MockMovieService {
    url = 'http://www.omdbapi.com/';
    apiKey = '86b58f82';

    searchData() {
      return 2
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
      providers: [
        MoviesPage,
        {provide: MovieService, useClass: MockMovieService }
      ]
    })

    comp = TestBed.get(MoviesPage)
    movieService = TestBed.get(MovieService)
  }));

  describe('#searchChanged', () => {
    it('calls the mocked movie service method', () => {
      spyOn(movieService, 'searchData')
      comp.callMovieService()
      expect(movieService.searchData).toHaveBeenCalled()
    })

    it('returns true from the mocked class', () => {
      expect(comp.callMovieService()).toEqual(2)
    })
  })
})
