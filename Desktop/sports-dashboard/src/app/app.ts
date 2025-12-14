import { Component } from '@angular/core';
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

  currentTitle = '🏆 Всі матчі сьогодні';
  // Функція пошуку
  onSearch(event: any) {
    const searchText = event.target.value.toLowerCase(); // Беремо текст і робимо маленькими літерами

    if (searchText.trim() === '') {
      // Якщо пошук пустий — показуємо все (або те, що було відфільтровано раніше)
      this.matches = this.originalMatches;
    } else {
      // Фільтруємо: шукаємо текст в назві "home" АБО в назві "away"
      this.matches = this.originalMatches.filter(match => 
        match.home.toLowerCase().includes(searchText) || 
        match.away.toLowerCase().includes(searchText)
      );
    }
  }
  // База даних матчів
  originalMatches = [
    { 
      league: 'england', home: 'Ман Сіті', away: 'Ліверпуль', score: '2 - 2', time: '78\'', status: 'LIVE', homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      details: '⚽ 12\' Холанд (1-0), ⚽ 45\' Салах (1-1), ⚽ 55\' Де Брюйне (2-1), ⚽ 78\' Жота (2-2). 🔥 Дуже напружена гра!' 
    },
    { 
      league: 'spain', home: 'Реал Мадрид', away: 'Барселона', score: '0 - 0', time: '22:00', status: '', homeFlag: '🇪🇸', awayFlag: '🇪🇸',
      details: 'Очікується битва титанів. Травмовані: Куртуа (Реал), Педрі (Барселона).' 
    },
    { 
      league: 'ukraine', home: 'Динамо', away: 'Шахтар', score: '1 - 0', time: 'FT', status: 'Finished', homeFlag: '🇺🇦', awayFlag: '🇺🇦',
      details: 'Матч завершено. Єдиний гол забив Ванат на 34-й хвилині. Шахтар мав 3 моменти, але Бущан врятував.' 
    },
    { 
      league: 'germany', home: 'Баварія', away: 'Боруссія Д', score: '3 - 1', time: '65\'', status: 'LIVE', homeFlag: '🇩🇪', awayFlag: '🇩🇪',
      details: 'Баварія домінує. Кейн зробив дубль. Боруссія намагається контратакувати.' 
    },
    { 
      league: 'italy', home: 'Мілан', away: 'Інтер', score: '1 - 2', time: 'FT', status: 'Finished', homeFlag: '🇮🇹', awayFlag: '🇮🇹',
      details: 'Дербі делла Мадоніна за Інтером. Лаутаро Мартінес вирішив долю матчу на останніх хвилинах.' 
    }
  ];

  // Те, що бачить користувач
  matches = this.originalMatches;

  // Єдина головна функція
  filterMatches(category: string) {
    // 1. Змінюємо заголовок
    switch (category) {
      case 'live': this.currentTitle = '🔥 Зараз у прямому ефірі'; break;
      case 'england': this.currentTitle = '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія • Premier League'; break;
      case 'spain': this.currentTitle = '🇪🇸 Іспанія • La Liga'; break;
      case 'italy': this.currentTitle = '🇮🇹 Італія • Serie A'; break;
      case 'germany': this.currentTitle = '🇩🇪 Німеччина • Bundesliga'; break;
      case 'ukraine': this.currentTitle = '🇺🇦 Україна • УПЛ'; break;
      default: this.currentTitle = '🏆 Всі матчі сьогодні';
    }

    // 2. Фільтруємо матчі
    if (category === 'all') {
      this.matches = this.originalMatches;
    } else if (category === 'live') {
      this.matches = this.originalMatches.filter(m => m.status === 'LIVE');
    } else {
      this.matches = this.originalMatches.filter(m => m.league === category);
    }
    
  }
  
}