import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImmoComponent } from './add-immo.component';

describe('AddImmoComponent', () => {
  let component: AddImmoComponent;
  let fixture: ComponentFixture<AddImmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddImmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
