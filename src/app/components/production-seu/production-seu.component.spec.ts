import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSeuComponent } from './production-seu.component';

describe('ProductionSeuComponent', () => {
  let component: ProductionSeuComponent;
  let fixture: ComponentFixture<ProductionSeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionSeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionSeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
