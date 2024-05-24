import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAfiliadoComponent } from './detalle-afiliado.component';

describe('DetalleAfiliadoComponent', () => {
  let component: DetalleAfiliadoComponent;
  let fixture: ComponentFixture<DetalleAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAfiliadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
