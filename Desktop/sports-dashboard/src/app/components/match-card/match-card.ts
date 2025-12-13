import { Component, Input } from '@angular/core'; // <--- Додали Input

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [],
  templateUrl: './match-card.html',
  styleUrl: './match-card.css'
})
export class MatchCardComponent {
  @Input() match: any; // <--- Це "вхідні двері" для даних
}