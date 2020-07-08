import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosEpisodiosComponent } from './favoritos-episodios.component';

describe('FavoritosEpisodiosComponent', () => {
  let component: FavoritosEpisodiosComponent;
  let fixture: ComponentFixture<FavoritosEpisodiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosEpisodiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
