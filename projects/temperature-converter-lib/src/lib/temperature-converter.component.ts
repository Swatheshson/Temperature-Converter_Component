import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-temperature-converter',        // changed from 'app-...'
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html', // updated
  styleUrls: ['./temperature-converter.component.css']   // updated
})
export class TemperatureConverterComponent {
  protected readonly title = signal('temp-test');

  celsius!: number;
  farenheit!: number;

  // Convert Celsius to Fahrenheit
  farenheitConverter() {
    if (this.celsius != null) {
      this.farenheit = (this.celsius * (9 / 5)) + 32;
    }
  }

  // Convert Fahrenheit to Celsius
  celsiusConverter() {
    if (this.farenheit != null) {
      this.celsius = (this.farenheit - 32) * 5 / 9;
    }
  }
}
