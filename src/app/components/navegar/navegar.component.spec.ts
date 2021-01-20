import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegarComponent } from './navegar.component';

describe('NavegarComponent', () => {
  let component: NavegarComponent;
  let fixture: ComponentFixture<NavegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
