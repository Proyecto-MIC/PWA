import { TestBed } from '@angular/core/testing';

import { VentaArticuloService } from './venta-articulo.service';

describe('ArticuloService', () => {
  let service: VentaArticuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentaArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
