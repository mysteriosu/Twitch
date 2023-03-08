import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFrontpageComponent } from './layout-frontpage.component';

describe('LayoutFrontpageComponent', () => {
  let component: LayoutFrontpageComponent;
  let fixture: ComponentFixture<LayoutFrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFrontpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
