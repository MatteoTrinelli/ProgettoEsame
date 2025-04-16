import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestraProfiloComponent } from './palestra-profilo.component';

describe('PalestraProfiloComponent', () => {
  let component: PalestraProfiloComponent;
  let fixture: ComponentFixture<PalestraProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestraProfiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalestraProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
