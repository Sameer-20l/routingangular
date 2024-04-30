import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcomComponent } from './aboutcom.component';

describe('AboutcomComponent', () => {
  let component: AboutcomComponent;
  let fixture: ComponentFixture<AboutcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
