import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoList = [
    'Development',
    'Test',
    'Deployment',
    'Monitoring'
    ];

  processList = [
    'Database'
  ];

  doneList = [
    'Design'
  ];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer !== event.container) {

      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)

    } else {
      moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    }
  }
}
