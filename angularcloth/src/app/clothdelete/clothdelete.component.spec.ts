import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothdeleteComponent } from './clothdelete.component';

describe('ClothdeleteComponent', () => {
  let component: ClothdeleteComponent;
  let fixture: ComponentFixture<ClothdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
