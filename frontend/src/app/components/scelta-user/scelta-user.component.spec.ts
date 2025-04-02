import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaUserComponent } from './scelta-user.component';

describe('SceltaUserComponent', () => {
  let component: SceltaUserComponent;
  let fixture: ComponentFixture<SceltaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SceltaUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceltaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
