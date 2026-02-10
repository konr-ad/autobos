import { Component } from '@angular/core';
import {RevealOnScroll} from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [
    RevealOnScroll
  ],
  templateUrl: './youtube.html',
  styleUrl: './youtube.css',
})
export class Youtube {

}
