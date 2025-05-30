import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllievoComponent } from './dashboard-allievo.component';

describe('DashboardAllievoComponent', () => {
  let component: DashboardAllievoComponent;
  let fixture: ComponentFixture<DashboardAllievoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAllievoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAllievoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
