import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatchCardComponent } from './components/match-card/match-card';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatchCardComponent, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. Це наша "База даних" (тут додали поле league)
  originalMatches = [
    { league: 'england', home: 'Ман Сіті', away: 'Ліверпуль', score: '2 - 2', time: '78\'', status: 'LIVE', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { league: 'spain', home: 'Реал Мадрид', away: 'Барселона', score: '0 - 0', time: '22:00', status: '', homeFlag: '🇪🇸', awayFlag: '🇪🇸' },
    { league: 'ukraine', home: 'Динамо', away: 'Шахтар', score: '1 - 0', time: 'FT', status: 'Finished', homeFlag: '🇺🇦', awayFlag: '🇺🇦' },
    { league: 'germany', home: 'Баварія', away: 'Боруссія Д', score: '3 - 1', time: '65\'', status: 'LIVE', homeFlag: '🇩🇪', awayFlag: '🇩🇪' },
    { league: 'italy', home: 'Мілан', away: 'Інтер', score: '1 - 2', time: 'FT', status: 'Finished', homeFlag: '🇮🇹', awayFlag: '🇮🇹' }
  ];

  // 2. А це те, що бачить користувач (спочатку копіюємо все з бази)
  matches = this.originalMatches;

  // 3. Функція фільтрації (її буде викликати Sidebar)
  filterByLeague(leagueCode: string) {
    if (leagueCode === 'all') {
      this.matches = this.originalMatches; // Показати все
    } else {
      // Залишити тільки ті, де league співпадає
      this.matches = this.originalMatches.filter(m => m.league === leagueCode);
    }
  }
}
