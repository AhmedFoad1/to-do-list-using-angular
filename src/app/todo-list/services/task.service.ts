import { Injectable } from '@angular/core';
import { NewTask, Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    {
      id: "t1",
      title: 'Buy groceries',
      summary: 'Get milk, eggs, and bread',
      dueDate: '2024-08-25'
    },
    {
      id: "t2",
      title: 'Finish project report',
      summary: 'Complete the final draft of the report',
      dueDate: '2024-08-30'
    },
    {
      id: "t3",
      title: 'Schedule dentist appointment',
      summary: 'Call and book a dental check-up',
      dueDate: '2024-09-05'
    }
  ];

  getAllTasks(){
    return this.tasks
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter(task=> task.id !==id);
  }

  addNewTask(newTask: NewTask){
    this.tasks.push({
        id:new Date().getDate().toString(),
        title: newTask.title ,
        dueDate: newTask.dueDate ,
        summary: newTask.summary ,

      });
  }

}
