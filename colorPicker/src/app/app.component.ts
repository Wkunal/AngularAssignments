import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('colorInput') colorInput!: ElementRef ;
  @HostBinding('style.backgroundColor') selectedColor!: string;
  @HostListener('input',['$event.target.value']) onColorChange
  (color:string){
    this.selectedColor = color;
  }
}
