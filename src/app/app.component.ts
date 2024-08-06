import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { Title } from '@angular/platform-browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'portfolio';

  public constructor(private titleService: Title,translate: TranslateService ) {
    this.setTitle('Simon Kral');
    translate.setDefaultLang('en');
  }
  
  ngOnInit(): void {
    AOS.init();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}