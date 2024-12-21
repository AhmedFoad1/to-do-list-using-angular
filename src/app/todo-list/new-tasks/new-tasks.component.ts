import { Component, inject, output } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})

export class NewTasksComponent {

 title = "";
 dueDate = "";
 summary = '';

  taskSrv = inject(TaskService)

  closeSelect = output<void>();

  onCancel(){
  this.closeSelect.emit()

  }

  onSubmit(){
    this.taskSrv.addNewTask({
      title: this.title,
      dueDate: this.dueDate,
      summary: this.summary,
    })
    this.onCancel();
  }
}
