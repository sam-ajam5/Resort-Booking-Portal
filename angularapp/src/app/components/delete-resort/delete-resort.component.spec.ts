import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResortComponent } from './delete-resort.component';

describe('DeleteResortComponent', () => {
  let component: DeleteResortComponent;
  let fixture: ComponentFixture<DeleteResortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteResortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
