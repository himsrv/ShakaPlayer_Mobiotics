import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherVideosComponent } from './other-videos.component';

describe('OtherVideosComponent', () => {
  let component: OtherVideosComponent;
  let fixture: ComponentFixture<OtherVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
