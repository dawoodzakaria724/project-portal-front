import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMembersComponent } from './main-members.component';

describe('MainMembersComponent', () => {
  let component: MainMembersComponent;
  let fixture: ComponentFixture<MainMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMembersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
