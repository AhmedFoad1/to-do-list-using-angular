import { Component, inject, signal } from '@angular/core';
import { NewTasksComponent } from '../new-tasks/new-tasks.component';
import { TaskService } from '../services/task.service';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTasksComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  createNewTaskFlg= signal<boolean>(false);

  private taskSrv = inject(TaskService)

  onClose(){
    this.createNewTaskFlg.set(false)
    
}

  onAddNewTask(){
    this.createNewTaskFlg.set(true)
  }

 get getAllTasks(){
    return this.taskSrv.getAllTasks()
  }
}
