import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewResortComponent } from './customer-view-resort.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomerViewResortComponent', () => {
  let component: CustomerViewResortComponent;
  let fixture: ComponentFixture<CustomerViewResortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewResortComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

fit('Frontend_should_create_the_customer_view_resort_component', () => {
  expect(component).toBeTruthy();
});

fit('Frontend_should_contain_resort_details_heading_in_customer_view_resort_component', () => {
  const componentHTML = fixture.debugElement.nativeElement.outerHTML;
  expect(componentHTML).toContain('Resort Details');
});
});
