import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CountLettersPipe } from './count-letters.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,CountLettersPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  stringVal : string = ''
}
