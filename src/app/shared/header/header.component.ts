import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuIsOpen: boolean = false;

  constructor(public languageService: LanguageService) {}

  handleAnchor() {
    this.mobileMenuIsOpen = false;
    return true
  }

}