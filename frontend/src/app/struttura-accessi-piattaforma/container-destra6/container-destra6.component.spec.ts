import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDestra6Component } from './container-destra6.component';

describe('ContainerDestra6Component', () => {
  let component: ContainerDestra6Component;
  let fixture: ComponentFixture<ContainerDestra6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDestra6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDestra6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
