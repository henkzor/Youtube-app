import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosidaComponent } from './videosida.component';

describe('VideosidaComponent', () => {
  let component: VideosidaComponent;
  let fixture: ComponentFixture<VideosidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
