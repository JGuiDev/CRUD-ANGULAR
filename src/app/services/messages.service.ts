import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    constructor() {}
    message: string = '';

    add(message: string) {
        this.message = message;

        setTimeout(() => {
            this.clear();
        }, 100000);
    }

    clear() {
        this.message = '';
    }

    isShow: boolean = false;

    openPopup() {
        this.isShow = true; // Open the popup by setting isShow to true
    }

    closePopup() {
        this.isShow = false; // Close the popup by setting isShow to false
    }
}
