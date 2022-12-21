import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotVerifyEmailComponent } from './forgot-verify-email.component';

describe('ForgotVerifyEmailComponent', () => {
  let component: ForgotVerifyEmailComponent;
  let fixture: ComponentFixture<ForgotVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotVerifyEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
