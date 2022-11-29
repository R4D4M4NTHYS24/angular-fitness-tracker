import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrainigsComponent } from './past-trainings.component';

describe('PastTrainigsComponent', () => {
  let component: PastTrainigsComponent;
  let fixture: ComponentFixture<PastTrainigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastTrainigsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PastTrainigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
