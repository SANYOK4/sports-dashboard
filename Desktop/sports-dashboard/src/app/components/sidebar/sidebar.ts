import { Component, Output, EventEmitter } from '@angular/core'; // <--- Додали Output, EventEmitter

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  // Створюємо "антену" для передачі сигналу батькові
  @Output() onLeagueSelect = new EventEmitter<string>();

  // Цю функцію викличе клік по кнопці
  select(league: string) {
    this.onLeagueSelect.emit(league);
  }
}