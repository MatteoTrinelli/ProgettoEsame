import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSectionComponent } from './sign-up-section.component';

describe('SignUpSectionComponent', () => {
  let component: SignUpSectionComponent;
  let fixture: ComponentFixture<SignUpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
