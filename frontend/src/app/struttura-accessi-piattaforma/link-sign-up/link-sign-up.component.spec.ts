import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSignUpComponent } from './link-sign-up.component';

describe('LinkSignUpComponent', () => {
  let component: LinkSignUpComponent;
  let fixture: ComponentFixture<LinkSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
