import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
products :{name:string; imageUrl:string }[] = [
  { name:'Mastering Angular - Learning frontend language',
    imageUrl : 'assets/favicon.ico',
  },
    { name:'Mastering .Net - Learning backend language',
    imageUrl : 'assets/DotNet.jpg',
  },
];
pgSize : number = 1;
startIndex : number = 0;
endIndex : number = this.pgSize;

previousPage(){
this.startIndex -= this.pgSize;
this.endIndex -= this.pgSize;
}
nextPage(){
this.startIndex += this.pgSize;
this.endIndex += this.pgSize;
}

}
