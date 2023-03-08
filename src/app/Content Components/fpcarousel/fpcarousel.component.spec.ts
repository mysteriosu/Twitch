import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpcarouselComponent } from './fpcarousel.component';

describe('FpcarouselComponent', () => {
  let component: FpcarouselComponent;
  let fixture: ComponentFixture<FpcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpcarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
