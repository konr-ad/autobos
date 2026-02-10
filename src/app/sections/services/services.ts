import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RevealOnScroll} from '../../shared/directives/reveal-on-scroll';

type ServiceItem = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css',
  imports: [
    NgForOf,
    RevealOnScroll
  ]
})
export class Services {
  services: ServiceItem[] = [
    {
      title: 'Diagnostyka komputerowa',
      description:
        'Szybkie wykrywanie usterek, odczyt błędów, analiza parametrów pracy i trafna diagnoza.',
    },
    {
      title: 'Elektryka samochodowa',
      description:
        'Diagnoza i naprawa instalacji elektrycznej, usuwanie usterek modułów oraz problemów z zasilaniem.',
    },
    {
      title: 'Kodowanie funkcji i modułów',
      description:
        'Aktywacja i konfiguracja opcji, kodowanie sterowników, doposażenia i ustawienia zgodne ze specyfikacją auta.',
    },
    {
      title: 'Programowanie i dorabianie kluczy',
      description:
        'Programowanie kluczy, klonowanie oraz diagnostyka problemów z immobilizerem i dostępem.',
    },
    {
      title: 'Chip tuning / remap ECU',
      description:
        'Modyfikacje oprogramowania ECU pod osiągi i kulturę pracy — z zachowaniem rozsądku i bezpieczeństwa.',
    },
    {
      title: 'Mechanika bieżąca',
      description:
        'Naprawy i serwis ogólny: kontrola stanu technicznego, wymiany eksploatacyjne, przygotowanie do sezonu.',
    },
  ];

  highlights: string[] = [
    'Transparentna diagnoza i komunikacja',
    'Specjalizacja w autach klasy premium',
    'Krótkie materiały wideo z napraw',
  ];
}
