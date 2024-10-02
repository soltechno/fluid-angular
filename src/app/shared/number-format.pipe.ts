import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

	transform(value: number | string): string {
		if (value == null) return '';

		// Convert the value to a string and use a regular expression to format it
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}
}
