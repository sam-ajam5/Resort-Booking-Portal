import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResortComponent } from './add-resort.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddResortComponent', () => {
  let component: AddResortComponent;
  let fixture: ComponentFixture<AddResortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, FormsModule],
      declarations: [ AddResortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

fit('Frontend_should_create_the_add_resort_component', () => {
  expect(component).toBeTruthy();
});

fit('Frontend_should_contain_add_new_resort_heading_in_add_resort_component', () => {
  const componentHTML = fixture.debugElement.nativeElement.outerHTML;
  expect(componentHTML).toContain('Add New Resort');
});
});
