
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from "rxjs";

import { testJson } from "./testJson"

export class CommonService {

    /*

    public static getUserName() {
        const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
            map(userResponse => {
                console.log('users: ', userResponse)
                return of(userResponse);
            }),
            catchError(error => {
                console.log('error: ', error);
                return of(error);
            })
        );
        return obs$;
    } */

    public static getUserName() {
        const userdata = testJson()
        return of(userdata);


    }
}