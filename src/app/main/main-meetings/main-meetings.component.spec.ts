import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsComponent } from './main-meetings.component';

describe('MainMeetingsComponent', () => {
  let component: MainMeetingsComponent;
  let fixture: ComponentFixture<MainMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMeetingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
