import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersidaComponent } from './usersida.component';

describe('UsersidaComponent', () => {
  let component: UsersidaComponent;
  let fixture: ComponentFixture<UsersidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
