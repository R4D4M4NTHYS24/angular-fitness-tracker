import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainigComponent } from './new-training.component';

describe('NewTrainigComponent', () => {
  let component: NewTrainigComponent;
  let fixture: ComponentFixture<NewTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTrainigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
