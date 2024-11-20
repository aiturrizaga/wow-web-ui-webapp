import { Component, signal } from '@angular/core';
import { WuiButton } from './components/button/button.directive';
import { WuiFloatField } from './components/input/float-field.component';
import { WuiInputText } from './components/input/input-text.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WuiButton,
    WuiFloatField,
    WuiInputText
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  loading = signal(false);

  load():void {
    this.loading.set(true)
    setTimeout(() => this.loading.set(false), 2000);
  }
}
