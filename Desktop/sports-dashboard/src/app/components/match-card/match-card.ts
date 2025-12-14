import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-card.html',
  styleUrl: './match-card.css'
})
export class MatchCardComponent {
  @Input() match: any;
  
  // 1. Змінна стану (false = закрито, true = відкрито)
  isOpen = false;

  // 2. Функція перемикач
  toggle() {
    this.isOpen = !this.isOpen;
  }
}