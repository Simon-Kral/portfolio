import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [
    TranslateModule,
    NgClass
  ],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  
  constructor(public languageService: LanguageService) {}
  
}
