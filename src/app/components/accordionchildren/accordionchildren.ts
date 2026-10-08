import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordionchildren',
  imports: [],
  templateUrl: './accordionchildren.html'
})
export class Accordionchildren {

  @Input() title!: string;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}