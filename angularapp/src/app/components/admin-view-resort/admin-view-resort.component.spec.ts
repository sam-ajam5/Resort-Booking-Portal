import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewResortComponent } from './admin-view-resort.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminViewResortComponent', () => {
  let component: AdminViewResortComponent;
  let fixture: ComponentFixture<AdminViewResortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, FormsModule],
      declarations: [ AdminViewResortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

fit('Frontend_should_create_the_admin_view_resort_component', () => {
  expect(component).toBeTruthy();
});

fit('Frontend_should_contain_resort_details_heading_in_admin_view_resort_component', () => {
  const componentHTML = fixture.debugElement.nativeElement.outerHTML;
  expect(componentHTML).toContain('Resort Details');
});
});
