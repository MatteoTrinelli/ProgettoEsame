import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInSectionComponent } from './log-in-section.component';



describe('LogInSectionComponent', () => {
  let component: LogInSectionComponent;
  let fixture: ComponentFixture<LogInSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
