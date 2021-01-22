import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class NotificationMenu {

    private notify = new Subject<boolean>();
    public showMenu$ = this.notify.asObservable();

    OpenMenu() {
        this.notify.next(true);
        return 'Toggle Menu';
    }
}