import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEpisodiosComponent } from './listado-episodios.component';

describe('ListadoEpisodiosComponent', () => {
  let component: ListadoEpisodiosComponent;
  let fixture: ComponentFixture<ListadoEpisodiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEpisodiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
