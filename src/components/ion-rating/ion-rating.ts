import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ion-rating',
  templateUrl: 'ion-rating.html'
})
export class IonRating {

	@Input() numStars: number = 5;
	@Input() readOnly: boolean = true;
	@Input() value: number = 5;

	@Output() clicked: EventEmitter<number> = new EventEmitter<number>();

	stars: string[] = [];

    constructor() {}
    
    ngAfterViewInit(){
        this.calc();
    }
    
    calc(){
        setTimeout(() => {
        this.stars = [];
        let tmp = this.value;
        for(let i=0; i < this.numStars; i++, tmp--)
            if(tmp >= 1)
                this.stars.push("star");
            else if (tmp < 1 && tmp > 0)
                this.stars.push("star-half");
            else
                this.stars.push("star-outline");
        }, 0);
    }
    reset(){
        setTimeout(() => {
        this.stars = [];
        for(let i=0; i < this.numStars; i++)
            this.stars.push("star-outline");
        }, 0);
    }
    
    starClicked(index){
        if(!this.readOnly) {
            this.value = index + 1;
            this.calc();
            this.clicked.emit(this.value);
        }
    }
    
    deleteRating() {
        if(!this.readOnly) {
            this.reset();
            this.value = null;
            this.clicked.emit(this.value);
        }
    }
}