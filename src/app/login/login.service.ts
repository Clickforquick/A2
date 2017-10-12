import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

private _getUrl = "/users/videos";
/*private _postUrl = "http://localhost:3000/users/login";*/
private _postUrl = "/users/login";
private _putUrl = "/api/video/";
private _deleteUrl = "/api/video/";
  constructor(private _http : Http, ) { }

getVideos(){
  return this._http.get(this._getUrl).map((response : Response ) => response.json());
}


addVideo(user){
let headers = new Headers ({'Content-Type':'application/json'});
let options = new RequestOptions({headers: headers});

  return this._http.post(this._postUrl,JSON.stringify(user),options)
  .map((response : Response ) =>{ 
      let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    Cookie.set('currentUser',JSON.stringify(user));
                }
        return user;
  });
}

logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        Cookie.delete('currentUser');
    }
/*
updateVideo(video : Video){
let headers = new Headers ({'Content-Type':'application/json'});
let options = new RequestOptions({headers: headers});

  return this._http.put(this._putUrl+video._id ,JSON.stringify(video),options)
  .map((response : Response ) => response.json());
}

deleteVideo(video : Video){
let headers = new Headers ({'Content-Type':'application/json'});
let options = new RequestOptions({headers: headers});

  return this._http.delete(this._deleteUrl+video._id)
  .map((response : Response ) => response.json());
}
*/

}
