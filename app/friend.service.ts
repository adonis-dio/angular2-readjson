import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Injectable()
export class FriendService { 
  friends:Array<any>;

    constructor(private http:Http) 
        {
            //console.log(">>friend.service.ts:constructor--")
            http.request('./data/people.json')
                    .subscribe(response => this.friends = response.json());
    }

  getFriends() {
    return this.http.request('./data/people.json')
                 .map(res => res.json());
  }
}