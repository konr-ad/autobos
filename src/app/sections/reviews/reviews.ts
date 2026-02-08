import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

type Review = {
  author: string;
  rating: number;
  text: string;
};

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  reviews: Review[] = [
    {
      author: 'Kamil P.',
      rating: 5,
      text: 'Szybka diagnoza, uczciwa wycena i profesjonalne podejście. Mercedes ogarnięty wzorowo.',
    },
    {
      author: 'Michał W.',
      rating: 5,
      text: 'Bardzo dobra komunikacja i realne podejście do problemu. Polecam każdemu, kto szuka fachowego serwisu.',
    },
    {
      author: 'Paweł S.',
      rating: 5,
      text: 'Widać doświadczenie w Mercedesach. Wszystko jasno wytłumaczone, termin dotrzymany.',
    },
    {
      author: 'Tomasz K.',
      rating: 5,
      text: 'Kontakt bezproblemowy, szybka realizacja. Na pewno wrócę.',
    },
    {
      author: 'Adam L.',
      rating: 5,
      text: 'Profesjonalne podejście i uczciwe ceny. Serwis godny polecenia.',
    },
  ];
}
