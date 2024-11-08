import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGTComponent } from './pgt.component';

describe('PGTComponent', () => {
  let component: PGTComponent;
  let fixture: ComponentFixture<PGTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PGTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
