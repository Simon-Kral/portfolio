import { Component } from '@angular/core';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { NgForOf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CharacteristicsComponent,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  entries = [
    {icon: "./assets/img/lightbulb.png", description: 'aboutMe.characteristics1'},
    {icon: "./assets/img/puzzle_piece.png", description: 'aboutMe.characteristics2'},
  ];
  }
