import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavVarComponent } from './components/nav-var/nav-var.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavVarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_porfolio_web';
}
