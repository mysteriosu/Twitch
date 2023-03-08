import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBrowseComponent } from './layout-browse.component';

describe('LayoutBrowseComponent', () => {
  let component: LayoutBrowseComponent;
  let fixture: ComponentFixture<LayoutBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
