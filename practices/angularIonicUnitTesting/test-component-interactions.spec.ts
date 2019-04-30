import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPage } from './movies.page';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesPage', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('clicking a button', () => {
    it('calls the onClick method', () => {
      spyOn(component, 'onClick');
      const button = fixture.debugElement.nativeElement.querySelector('#button1');
      button.click()
      expect(component.onClick).toHaveBeenCalled()
    })
  })
});
