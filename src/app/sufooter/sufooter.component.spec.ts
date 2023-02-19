import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SufooterComponent } from './sufooter.component';

describe('SufooterComponent', () => {
  let component: SufooterComponent;
  let fixture: ComponentFixture<SufooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SufooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SufooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
