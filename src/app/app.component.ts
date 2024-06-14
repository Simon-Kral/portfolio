import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { Title } from '@angular/platform-browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'portfolio';

  public constructor(private titleService: Title ) {
    this.setTitle('Simon Kral');
  }
  ngOnInit(): void {
    AOS.init();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}