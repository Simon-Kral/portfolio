import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [
    SkillsComponent,
    NgForOf
  ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skillList = [
    {icon: "/assets/img/angular.png", skill: "Angular"},
    {icon: "/assets/img/typescript.png", skill: "TypeScript"},
    {icon: "/assets/img/javascript.png", skill: "JavaScript"},
    {icon: "/assets/img/html.png", skill: "HTML"},
    {icon: "/assets/img/firebase.png", skill: "Firebase"},
    {icon: "/assets/img/git.png", skill: "GIT"},
    {icon: "/assets/img/css.png", skill: "CSS"},
    {icon: "/assets/img/api.png", skill: "Rest-API"},
    {icon: "/assets/img/scrum.png", skill: "Scrum"},
    {icon: "/assets/img/material.png", skill: "Material Design"},
  ]
}
