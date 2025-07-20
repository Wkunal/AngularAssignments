import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SortNumberPipe } from './sort-number.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,SortNumberPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arr : number [] = [3,5,6,2,8,9,];
  sortOrder : 'asc' | 'desc' = 'asc';
  showList : boolean = false;

  showSorting(){
    this.showList = true;
  }
}
