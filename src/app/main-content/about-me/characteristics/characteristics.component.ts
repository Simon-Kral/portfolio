import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  standalone: true,
  imports: [],
  templateUrl: './characteristics.component.html',
  styleUrl: './characteristics.component.scss'
})
export class CharacteristicsComponent {
  @Input() icon: string = '';
  @Input() description: string = '';
}