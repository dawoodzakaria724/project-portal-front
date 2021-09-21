import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommitteesComponent } from './main-committees.component';

describe('MainCommitteesComponent', () => {
  let component: MainCommitteesComponent;
  let fixture: ComponentFixture<MainCommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCommitteesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
