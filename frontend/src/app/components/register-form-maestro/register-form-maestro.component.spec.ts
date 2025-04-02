import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormMaestroComponent } from './register-form-maestro.component';

describe('RegisterFormMaestroComponent', () => {
  let component: RegisterFormMaestroComponent;
  let fixture: ComponentFixture<RegisterFormMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormMaestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
