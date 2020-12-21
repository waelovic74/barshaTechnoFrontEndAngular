import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresCalendrieComponent } from './offres-calendrie.component';

describe('OffresCalendrieComponent', () => {
  let component: OffresCalendrieComponent;
  let fixture: ComponentFixture<OffresCalendrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresCalendrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresCalendrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
