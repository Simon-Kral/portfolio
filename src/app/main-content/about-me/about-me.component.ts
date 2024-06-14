import { Component } from '@angular/core';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CharacteristicsComponent,
    NgForOf,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  entries = [
    {icon: "./assets/img/lightbulb.png", description: "Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {icon: "./assets/img/puzzle_piece.png", description: "Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
  ];
  }
