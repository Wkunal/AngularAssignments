import { numberAttribute, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countLetters'
})
export class CountLettersPipe implements PipeTransform {

  transform(value: string): number {
    let count :number = 0;
    for (const ch of value){
    if((ch >='a' && ch <='z') || (ch >='A' && ch <='Z')){
       count++;
    }
    }
return count;
  }

}
