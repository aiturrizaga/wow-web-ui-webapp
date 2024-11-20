import { Component, effect, ElementRef, input, Renderer2 } from '@angular/core';
import { Size } from '../../interfaces/property.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'wui-float-field',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
    <div class="wui-float-field" [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class WuiFloatField {
  readonly size = input<Size>('md');
  classes: string[] = [];

  constructor() {
    effect(() => this.updateState());
  }

  /**
   * Main function to update button state
   */
  private updateState(): void {
    this.applyStyles();
  }

  /**
   * Apply button styles (color, size, rounded, outline)
   */
  private applyStyles(): void {
    // this.classes.push(`wui-float-field__label--${ this.size() }`);
    this.classes.push(`wui-float-field__input--${ this.size() }`);
  }
}
