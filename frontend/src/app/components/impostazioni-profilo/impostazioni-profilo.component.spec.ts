import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostazioniProfiloComponent } from './impostazioni-profilo.component';

describe('ImpostazioniProfiloComponent', () => {
  let component: ImpostazioniProfiloComponent;
  let fixture: ComponentFixture<ImpostazioniProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpostazioniProfiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpostazioniProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
