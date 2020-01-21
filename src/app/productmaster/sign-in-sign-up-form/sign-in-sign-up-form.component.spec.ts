import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSignUpFormComponent } from './sign-in-sign-up-form.component';

describe('SignInSignUpFormComponent', () => {
  let component: SignInSignUpFormComponent;
  let fixture: ComponentFixture<SignInSignUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInSignUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
