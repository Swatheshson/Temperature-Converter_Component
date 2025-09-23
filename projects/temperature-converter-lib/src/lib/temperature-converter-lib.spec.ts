import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverterLib } from './temperature-converter-lib';

describe('TemperatureConverterLib', () => {
  let component: TemperatureConverterLib;
  let fixture: ComponentFixture<TemperatureConverterLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureConverterLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureConverterLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
