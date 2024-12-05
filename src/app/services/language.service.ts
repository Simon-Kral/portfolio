import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: string = 'de';

  constructor(public translateService: TranslateService, private translate: TranslateService) { }

  switchLanguage(lang: string) { 
    if(lang && this.language != lang){
      this.language = lang;
      this.translate.use(lang);
    }
  }
}