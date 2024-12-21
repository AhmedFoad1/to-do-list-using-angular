import { Component, inject, input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  taskSrv = inject(TaskService)

  task = input.required<Task>()

  onComplete(){
    this.taskSrv.removeTask(this.task().id)
  }

}
