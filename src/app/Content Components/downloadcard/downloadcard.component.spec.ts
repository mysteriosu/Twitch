import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadcardComponent } from './downloadcard.component';

describe('DownloadcardComponent', () => {
  let component: DownloadcardComponent;
  let fixture: ComponentFixture<DownloadcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
