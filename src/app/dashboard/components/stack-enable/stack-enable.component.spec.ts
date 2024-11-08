import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackEnableComponent } from './stack-enable.component';

describe('StackEnableComponent', () => {
  let component: StackEnableComponent;
  let fixture: ComponentFixture<StackEnableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackEnableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
