import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  addcl: boolean[] = [false, false, false, false];
  changeclass(e: Event): void {
    const target = e.target as HTMLInputElement;
    const id: number = Number(target.id);
    const value: string = target.value;

    if (!value) {
      this.addcl[id] = false;
      console.log('false', value);
      console.log(e);
    } else {
      this.addcl[id] = true;
      console.log('false', value);
    }
  }
}
