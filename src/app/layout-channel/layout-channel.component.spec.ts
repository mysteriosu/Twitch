import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChannelComponent } from './layout-channel.component';

describe('LayoutChannelComponent', () => {
  let component: LayoutChannelComponent;
  let fixture: ComponentFixture<LayoutChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
