import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    SkillsComponent,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skillList = [
    {icon: "./assets/img/angular.png", skill: "Angular"},
    {icon: "./assets/img/typescript.png", skill: "TypeScript"},
    {icon: "./assets/img/django.png", skill: "Django"},
    {icon: "./assets/img/python.png", skill: "Python"},

    {icon: "./assets/img/javascript.png", skill: "JavaScript"},
    {icon: "./assets/img/html.png", skill: "HTML"},
    {icon: "./assets/img/css.png", skill: "CSS"},
    {icon: "./assets/img/api.png", skill: "Rest-API"},

    {icon: "./assets/img/linux.png", skill: "Linux"},
    {icon: "./assets/img/docker.png", skill: "Docker"},
    {icon: "./assets/img/sql.png", skill: "SQL"},
    {icon: "./assets/img/redis.png", skill: "Redis"},
    
    {icon: "./assets/img/scrum.png", skill: "Scrum"},
    {icon: "./assets/img/git.png", skill: "GIT"},
    {icon: "./assets/img/firebase.png", skill: "Firebase"},
    {icon: "./assets/img/postgresql.png", skill: "PostgreSQL"},
  ]
}
