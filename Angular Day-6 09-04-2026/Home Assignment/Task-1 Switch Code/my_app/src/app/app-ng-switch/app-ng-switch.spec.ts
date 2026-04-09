import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgSwitch } from './app-ng-switch';

describe('AppNgSwitch', () => {
  let component: AppNgSwitch;
  let fixture: ComponentFixture<AppNgSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNgSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(AppNgSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
