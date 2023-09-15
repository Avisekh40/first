import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList=[
    // {task:'swimming', completed: false},
    // {task:'Breakfast', completed: false},
    // {task:'College', completed: false},
    // {task:'shopping', completed: false},
    // {task:'dinner', completed: false},
    {venue1: 'Marina',venue2: 'Sundar Resort',task:'swimming', completed: false},
    {venue1: 'Marina',venue2: 'Sundar Resort',task:'Breakfast', completed: false},
    {venue1: 'Marina',venue2: 'Sundar Resort',task:'College', completed: false},
    {venue1: 'Marina',venue2: 'Sundar Resort',task:'shopping', completed: false},
    {venue1: 'Marina',venue2: 'Sundar Resort',task:'dinner', completed: false},
    
  ];

}
