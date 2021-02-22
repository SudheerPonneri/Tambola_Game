import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player5Component } from './player5.component';

describe('Player5Component', () => {
  let component: Player5Component;
  let fixture: ComponentFixture<Player5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Player5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
