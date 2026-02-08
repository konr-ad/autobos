import { Component } from '@angular/core';

import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Youtube } from '../../sections/youtube/youtube';
import { Reviews } from '../../sections/reviews/reviews';
import { Contact } from '../../sections/contact/contact';
import {StickyCta} from '../../shared/sticky-cta/sticky-cta';
import {Footer} from '../../shared/footer/footer';
import {Navbar} from '../../shared/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, Services, Youtube, Reviews, Contact, Footer, StickyCta],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
