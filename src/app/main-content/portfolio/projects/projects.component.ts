import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() i: number = 0;
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() description: string = '';
  @Input() img: string = '';
  @Input() url: string = '';
  @Input() github: string = '';


  isEven(i: number) {
    return i % 2 == 0;
 }
 
 isOdd(i: number) {
    return Math.abs(i % 2) == 1;
 }
}
