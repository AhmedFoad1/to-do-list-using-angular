import { Component } from '@angular/core';
import { TaskComponent } from './todo-list/task/task.component';
import { TasksComponent } from './todo-list/tasks/tasks.component';
import { NavbarComponent } from './navcon/navbar/navbar.component';
import { SignUpComponent } from './navcon/sign-up/sign-up.component';
import { LogInComponent } from './navcon/log-in/log-in.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent, TasksComponent, NavbarComponent, SignUpComponent, LogInComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Task-4';
  
  showLoginComponent = false;
  showSignUpComponent = false;

  LoginClick() {
    this.showLoginComponent = true;
    this.showSignUpComponent = false;
  }

  SignUpClick() {
    this.showLoginComponent = false;
    this.showSignUpComponent = true;
  }
}