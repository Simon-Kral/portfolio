import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectsComponent,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projectList = [
    {
      title: "Join",
      path: "join",
      type: "JavaScript | HTML | CSS",
      img: "./assets/img/join.png",
      url: "http://join.simon-kral.de/",
      github: "https://www.github.com/Simon-Kral/join",
    },
    {
      title: "El Pollo Loco",
      path: "elPolloLoco",
      type: "JavaScript | HTML | CSS",
      img: "./assets/img/el_pollo_loco.png",
      url: "http://el-pollo-loco.simon-kral.de/",
      github: "https://github.com/Simon-Kral/el-pollo-loco",
    },
    {
      title: "Pokédex",
      path: "pokedex",
      type: "JavaScript | HTML | CSS | Api",
      img: "./assets/img/pokedex.png",
      url: "http://pokedex.simon-kral.de/",
      github: "https://github.com/Simon-Kral/pokedex",
    },
  ]
}