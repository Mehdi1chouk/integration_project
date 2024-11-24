import { Component } from '@angular/core';

@Component({
  selector: 'app-add-immo',
  templateUrl: './add-immo.component.html',
  styleUrl: './add-immo.component.css'
})
export class AddImmoComponent {

  chambres: number = 1;
  lits: number = 1;
  salleDeBain: number = 1;

  increment(type: string): void {
    if (type === 'chambres') {
      this.chambres++;
    } else if (type === 'lits') {
      this.lits++;
    } else if (type === 'salleDeBain') {
      this.salleDeBain++;
    }
  }

  decrement(type: string): void {
    if (type === 'chambres' && this.chambres > 1) {
      this.chambres--;
    } else if (type === 'lits' && this.lits > 1) {
      this.lits--;
    } else if (type === 'salleDeBain' && this.salleDeBain > 1) {
      this.salleDeBain--;
    }
  }






}
