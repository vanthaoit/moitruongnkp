import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRelativeProductComponent } from './all-relative-product.component';

describe('AllRelativeProductComponent', () => {
  let component: AllRelativeProductComponent;
  let fixture: ComponentFixture<AllRelativeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRelativeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRelativeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
