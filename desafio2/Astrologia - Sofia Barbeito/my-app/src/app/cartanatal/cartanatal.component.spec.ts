import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartanatalComponent } from './cartanatal.component';

describe('CartanatalComponent', () => {
  let component: CartanatalComponent;
  let fixture: ComponentFixture<CartanatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartanatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartanatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
