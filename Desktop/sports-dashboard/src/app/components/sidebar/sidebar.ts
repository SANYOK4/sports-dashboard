import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  // 👇 ОСЬ ТУТ БУЛА ПРОБЛЕМА
  // Ми додали <string>, щоб Angular знав: ми передаємо текст!
  @Output() selectLeague = new EventEmitter<string>();

  select(category: string) {
    this.selectLeague.emit(category);
  }
}