// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { MoviesPage } from './movies.page';
// import { MovieService } from '../../services/movie.service';
// import { HttpClientModule } from '@angular/common/http';

// describe('MoviesPage', () => {
//   let component: MoviesPage;
//   let fixture: ComponentFixture<MoviesPage>;

//   beforeEach(async(() => {

//     // class MockMovieService {
//     //   searchData() {

//     //   }
//     // }
//     TestBed.configureTestingModule({
//       declarations: [ MoviesPage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       imports: [HttpClientModule],
//       // providers: [
//       //   MoviesPage,
//       //   {provide: MovieService, useClass: MockMovieService }
//       // ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MoviesPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('#addNumbers', () => {
//     // calling a component method 
//     it('returns the number 2', () => {
//       expect(component.addNumbers()).toEqual(2)
//     })
//   })

//   describe('#searchChanged', () => {
//     // spying on a method call to a service
//     it('calls the movieService searchData method', () => {
//       let movieService = TestBed.get(MovieService)
//       spyOn(movieService, 'searchData');
//       component.searchChanged()
//       expect(movieService.searchData).toHaveBeenCalled();
//     })

//     it('calls the movieService searchdData method with the correct arguments', () => {

//     })
//   })

//   describe('clicking a button', () => {
//     it('calls the onClick method', () => {
//       spyOn(component, 'onClick');
//       const button = fixture.debugElement.nativeElement.querySelector('#button1');
//       button.click()
//       expect(component.onClick).toHaveBeenCalled()
//     })
//   })
// });

// describe('MoviesPage with mocked Movie Service', () => {
//   let comp: MoviesPage;
//   let fixture: ComponentFixture<MoviesPage>;
//   let movieService
//   class MockMovieService {
//     url = 'http://www.omdbapi.com/';
//     apiKey = '86b58f82';

//     searchData() {
//       return 2
//     }
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MoviesPage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       imports: [HttpClientModule],
//       providers: [
//         MoviesPage,
//         {provide: MovieService, useClass: MockMovieService }
//       ]
//     })

//     comp = TestBed.get(MoviesPage)
//     movieService = TestBed.get(MovieService)
//   }));

//   describe('#searchChanged', () => {
//     it('calls the mocked movie service method', () => {
//       spyOn(movieService, 'searchData')
//       comp.searchChanged()
//       expect(movieService.searchData).toHaveBeenCalled()
//     })

//     it('returns true from the mocked class', () => {
//       expect(comp.searchChanged2()).toEqual(2)
//     })
//   })
// })
