
import {Injectable} from '@angular/core';
import {CBPUser, CBPUserService} from '../user';
import {Subject, ReplaySubject} from 'rxjs';

@Injectable()
export class MockUserService extends  CBPUserService {

    private subject: ReplaySubject<CBPUser> = new ReplaySubject<CBPUser>();
    private loggedIn = false;

    constructor() {
        super();
    };

    getUser(): Subject<CBPUser> {
        return this.subject;
    }
    login(delay = 3000): Subject<CBPUser> {
        setTimeout(() => {
            this.loggedIn = true;
            let user = new CBPUser();
            user.firstName = 'First';
            user.lastName = 'LastName';
            user.preferences = {
                favoriteAppIds: this._randomlyGetFavoritAppId()
            };
            this.subject.next(user);
            // this.subject.complete();
        }, delay);
        return this.subject;
    }


    logout(): void {
        this.loggedIn = false;
        this.subject.next(null);
        console.log('mock logout');
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
    private _randomlyGetFavoritAppId(): String[] {
        const favoriteIds: String[] = [];
        let count = 2;
        do {
            favoriteIds.push('' + Math.floor(Math.random() * 10));
        } while (count-- >= 0);
        return favoriteIds;
    }
}
