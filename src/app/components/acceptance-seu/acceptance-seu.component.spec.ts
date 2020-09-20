import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceSeuComponent } from './acceptance-seu.component';

describe('AcceptanceSeuComponent', () => {
  let component: AcceptanceSeuComponent;
  let fixture: ComponentFixture<AcceptanceSeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptanceSeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceSeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
