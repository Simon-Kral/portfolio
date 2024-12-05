import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-portfolio',
	standalone: true,
	imports: [ProjectsComponent, NgForOf, TranslateModule],
	templateUrl: './portfolio.component.html',
	styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
	projectList = [
		{
		  title: "Coderr",
		  path: "coderr",
		  type: "JavaScript | Django | Python ",
		  img: "./assets/img/coderr.png",
		  url: "http://coderr.simon-kral.de/",
		  github: "https://github.com/Simon-Kral/Coderr-Backend",
		},
		{
			title: 'Join',
			path: 'join',
			type: 'Angular | Typescript | Django | Python',
			img: './assets/img/join.png',
			url: 'http://join.simon-kral.de/',
			github: 'https://www.github.com/Simon-Kral/join',
		},
		{
			title: 'DA-Bubble',
			path: 'daBubble',
			type: 'Angular | Typescript | Firebase',
			img: './assets/img/da_bubble.png',
			url: 'http://da-bubble.simon-kral.de/',
			github: 'https://github.com/Simon-Kral/da-bubble',
		},
		{
			title: 'El Pollo Loco',
			path: 'elPolloLoco',
			type: 'JavaScript | HTML | CSS',
			img: './assets/img/el_pollo_loco.png',
			url: 'http://el-pollo-loco.simon-kral.de/',
			github: 'https://github.com/Simon-Kral/el-pollo-loco',
		},
		// {
		//   title: "Pokédex",
		//   path: "pokedex",
		//   type: "JavaScript | HTML | CSS | Api",
		//   img: "./assets/img/pokedex.png",
		//   url: "http://pokedex.simon-kral.de/",
		//   github: "https://github.com/Simon-Kral/pokedex",
		// },
	];
}
