import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemupdatesComponent } from './itemupdates.component';

describe('ItemupdatesComponent', () => {
  let component: ItemupdatesComponent;
  let fixture: ComponentFixture<ItemupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemupdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
