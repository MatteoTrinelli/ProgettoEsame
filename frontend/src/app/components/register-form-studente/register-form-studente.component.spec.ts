import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormStudenteComponent } from './register-form-studente.component';

describe('RegisterFormStudenteComponent', () => {
  let component: RegisterFormStudenteComponent;
  let fixture: ComponentFixture<RegisterFormStudenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormStudenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormStudenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
