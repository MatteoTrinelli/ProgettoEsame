import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRegistrazioneCorrettaComponent } from './alert-registrazione-corretta.component';

describe('AlertRegistrazioneCorrettaComponent', () => {
  let component: AlertRegistrazioneCorrettaComponent;
  let fixture: ComponentFixture<AlertRegistrazioneCorrettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertRegistrazioneCorrettaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertRegistrazioneCorrettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
