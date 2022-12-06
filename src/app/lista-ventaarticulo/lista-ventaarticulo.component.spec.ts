import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaarticuloComponent } from './lista-ventaarticulo.component';

describe('ListaVentaarticuloComponent', () => {
  let component: ListaVentaarticuloComponent;
  let fixture: ComponentFixture<ListaVentaarticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVentaarticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVentaarticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
