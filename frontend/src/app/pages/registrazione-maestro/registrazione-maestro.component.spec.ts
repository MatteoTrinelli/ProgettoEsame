import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrazioneMaestroComponent } from './registrazione-maestro.component';

describe('RegistrazioneMaestroComponent', () => {
  let component: RegistrazioneMaestroComponent;
  let fixture: ComponentFixture<RegistrazioneMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrazioneMaestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrazioneMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
