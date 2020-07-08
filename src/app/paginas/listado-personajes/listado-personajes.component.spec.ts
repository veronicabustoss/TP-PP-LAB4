import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonajesComponent } from './listado-personajes.component';

describe('ListadoPersonajesComponent', () => {
  let component: ListadoPersonajesComponent;
  let fixture: ComponentFixture<ListadoPersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
