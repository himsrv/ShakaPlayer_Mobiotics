import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechVideosComponent } from './tech-videos.component';

describe('TechVideosComponent', () => {
  let component: TechVideosComponent;
  let fixture: ComponentFixture<TechVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
