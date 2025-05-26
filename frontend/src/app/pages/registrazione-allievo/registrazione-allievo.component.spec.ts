import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneAllievoComponent } from './registrazione-allievo.component';

describe('RegistrazioneAllievoComponent', () => {
  let component: RegistrazioneAllievoComponent;
  let fixture: ComponentFixture<RegistrazioneAllievoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrazioneAllievoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrazioneAllievoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
