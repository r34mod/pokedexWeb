import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShinyComponent } from './info-shiny.component';

describe('InfoShinyComponent', () => {
  let component: InfoShinyComponent;
  let fixture: ComponentFixture<InfoShinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoShinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoShinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
