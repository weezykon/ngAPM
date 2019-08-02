import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // tslint:disable-next-line:no-inferrable-types
    @Input() rating: number;
    starWidth: number;
    @Output() clickStar: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.clickStar.emit(`The rating ${this.rating} has been clicked`);
    }
}
