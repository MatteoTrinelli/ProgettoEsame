import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkLogInComponent } from './link-log-in.component';

describe('LinkLogInComponent', () => {
  let component: LinkLogInComponent;
  let fixture: ComponentFixture<LinkLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkLogInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
