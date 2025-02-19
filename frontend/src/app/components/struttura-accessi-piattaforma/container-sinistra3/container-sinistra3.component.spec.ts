import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSinistra3Component } from './container-sinistra3.component';

describe('ContainerSinistra3Component', () => {
  let component: ContainerSinistra3Component;
  let fixture: ComponentFixture<ContainerSinistra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerSinistra3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSinistra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
