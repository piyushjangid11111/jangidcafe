import { ComponentFixture, TestBed } from '@angular/core/testing';

import { locationComponent } from './location.component';

describe('locationComponent', () => {
  let component: locationComponent;
  let fixture: ComponentFixture<locationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [locationComponent]
    });
    fixture = TestBed.createComponent(locationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});