import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './component/home/home';
import { Users } from './component/users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Users ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('makeup');
}
