import { Component ,EventEmitter, Output, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,SignUpComponent,LogInComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() data: any;
  @Output() loginClicked = new EventEmitter<void>();
  @Output() signUpClicked = new EventEmitter<void>();

  showLogin() {
    this.loginClicked.emit(); 
  }

  showSignUp() {
    this.signUpClicked.emit(); 
  }
}