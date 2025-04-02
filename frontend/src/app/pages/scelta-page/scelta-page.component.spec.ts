import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaPageComponent } from './scelta-page.component';

describe('SceltaPageComponent', () => {
  let component: SceltaPageComponent;
  let fixture: ComponentFixture<SceltaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceltaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceltaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
