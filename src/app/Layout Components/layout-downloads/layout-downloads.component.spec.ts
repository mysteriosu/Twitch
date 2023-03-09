import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDownloadsComponent } from './layout-downloads.component';

describe('LayoutDownloadsComponent', () => {
  let component: LayoutDownloadsComponent;
  let fixture: ComponentFixture<LayoutDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDownloadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
