import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'description'
})

export class DescriptionPipe implements PipeTransform {

transform(value: string | any , limit?: number) {

  if(!value) return null;

  limit = limit? limit:20;

  if(limit > value.length) {
    return value;
   }

  return value.substring(0,limit) + '...';
    
   }

 }
    
