import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeModelComponent } from './iframe-model.component';

describe('IframeModelComponent', () => {
  let component: IframeModelComponent;
  let fixture: ComponentFixture<IframeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
