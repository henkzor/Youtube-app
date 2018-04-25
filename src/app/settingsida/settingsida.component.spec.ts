import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsidaComponent } from './settingsida.component';

describe('SettingsidaComponent', () => {
  let component: SettingsidaComponent;
  let fixture: ComponentFixture<SettingsidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
