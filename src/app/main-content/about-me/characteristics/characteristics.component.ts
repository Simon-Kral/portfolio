import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-characteristics',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './characteristics.component.html',
  styleUrl: './characteristics.component.scss'
})
export class CharacteristicsComponent {
  @Input() icon: string = '';
  @Input() description: string = '';
}