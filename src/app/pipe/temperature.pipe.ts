import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: "celsius"
})
export class CelsiusPipe implements PipeTransform{
    
    transform(value: number) {
        return `${(value - 273.15).toFixed(2)} °C`
    }

}