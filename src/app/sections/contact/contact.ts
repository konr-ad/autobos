import { Component } from '@angular/core';
import {RevealOnScroll} from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RevealOnScroll
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
