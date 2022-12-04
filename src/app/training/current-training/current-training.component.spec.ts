import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainigComponent } from './current-training.component';

describe('CurrentTrainigComponent', () => {
  let component: CurrentTrainigComponent;
  let fixture: ComponentFixture<CurrentTrainigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentTrainigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentTrainigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
