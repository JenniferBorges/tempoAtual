import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'kmH'
})
export class KmHPipe implements PipeTransform {
    transform(speed: any) {
        return `${(speed * 3.6).toFixed(2)} km/H`
    }
}