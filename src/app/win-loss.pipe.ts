import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winLoss'
})
export class WinLossPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if(value > 0){
      return 'W';
    }else if(value === 0){
      return 'D';
    }else{
      return 'L';
    }
  }

}
