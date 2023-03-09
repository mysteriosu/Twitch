import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertypebuttonComponent } from './filtertypebutton.component';

describe('FiltertypebuttonComponent', () => {
  let component: FiltertypebuttonComponent;
  let fixture: ComponentFixture<FiltertypebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltertypebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltertypebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
