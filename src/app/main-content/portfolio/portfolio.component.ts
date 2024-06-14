import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectsComponent,
    NgForOf
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projectList = [
    {
      title: "Join",
      type: "JavaScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "./assets/img/join.png",
      url: "http://join.simon-kral.de/",
      github: "https://www.github.com/Simon-Kral/join",
    },
    {
      title: "Ring of Fire",
      type: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "Angular based webapp of the popular card game with firebase integration.",
      img: "./assets/img/ring_of_fire.png",
      url: "http://ring-of-fire.simon-kral.de/",
      github: "https://github.com/Simon-Kral/ringoffire",
    },
    {
      title: "El Pollo Loco",
      type: "JavaScript | HTML | CSS",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      img: "./assets/img/el_pollo_loco.png",
      url: "http://el-pollo-loco.simon-kral.de/",
      github: "https://github.com/Simon-Kral/el-pollo-loco",
    },
    {
      title: "Pokédex",
      type: "JavaScript | HTML | CSS | Api",
      description: "Based on the PokeAPI a simple library that provides and catalogues pokemon information.",
      img: "./assets/img/pokedex.png",
      url: "http://pokedex.simon-kral.de/",
      github: "https://github.com/Simon-Kral/pokedex",
    },
  ]
}