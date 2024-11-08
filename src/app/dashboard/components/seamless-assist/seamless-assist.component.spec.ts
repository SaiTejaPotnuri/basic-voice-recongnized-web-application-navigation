import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamlessAssistComponent } from './seamless-assist.component';

describe('SeamlessAssistComponent', () => {
  let component: SeamlessAssistComponent;
  let fixture: ComponentFixture<SeamlessAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeamlessAssistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeamlessAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
