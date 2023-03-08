import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamcardComponent } from './streamcard.component';

describe('StreamcardComponent', () => {
  let component: StreamcardComponent;
  let fixture: ComponentFixture<StreamcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreamcardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StreamcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
