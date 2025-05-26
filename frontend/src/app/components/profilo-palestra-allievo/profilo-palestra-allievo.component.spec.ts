import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloPalestraAllievoComponent } from './profilo-palestra-allievo.component';

describe('ProfiloPalestraAllievoComponent', () => {
  let component: ProfiloPalestraAllievoComponent;
  let fixture: ComponentFixture<ProfiloPalestraAllievoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiloPalestraAllievoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloPalestraAllievoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
