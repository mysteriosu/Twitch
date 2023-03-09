import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrebuttonComponent } from './genrebutton.component';

describe('GenrebuttonComponent', () => {
  let component: GenrebuttonComponent;
  let fixture: ComponentFixture<GenrebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenrebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
