import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelComponent } from './tabel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TabelComponent', () => {
  let component: TabelComponent;
  let fixture: ComponentFixture<TabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
