import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloAllievoComponent } from './profilo-allievo.component';

describe('ProfiloAllievoComponent', () => {
  let component: ProfiloAllievoComponent;
  let fixture: ComponentFixture<ProfiloAllievoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiloAllievoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiloAllievoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
