import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloPalestraMaestroComponent } from './profilo-palestra-maestro.component';

describe('ProfiloPalestraMaestroComponent', () => {
  let component: ProfiloPalestraMaestroComponent;
  let fixture: ComponentFixture<ProfiloPalestraMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiloPalestraMaestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloPalestraMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
