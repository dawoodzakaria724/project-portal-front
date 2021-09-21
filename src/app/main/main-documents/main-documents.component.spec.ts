import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDocumentsComponent } from './main-documents.component';

describe('MainDocumentsComponent', () => {
  let component: MainDocumentsComponent;
  let fixture: ComponentFixture<MainDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDocumentsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
