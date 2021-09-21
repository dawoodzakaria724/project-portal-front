import { baseUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private JWT_KEY: string = '_DAWOOD_JWT_KEY';
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // get jwt from local storage, send it back to API, and get a newer token. maybe~
    const promise = this.http.post(`${baseUrl}user/login`, {}).toPromise();
    promise.then(
      (data) => {
        console.log('Promise resolved with: ' + JSON.stringify(data));
      },
      (error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      }
    );
  }

  async login(body): Promise<any> {
    const res = await this.req('post', `${baseUrl}user/login`, body);
    if (res && res.token) {
      localStorage.setItem(this.JWT_KEY, res.token);
      console.log('login', res);
    } else {
      console.log('unexpected result', JSON.stringify(res));
    }
    return res;
  }

  async register(body: any): Promise<any> {
    const res = await this.req('post', `${baseUrl}user/register`, body);
    if (res && res.token) {
      this.token = res.token;
      console.log('Registered, got JWT', this.token);
    }
    return res;
  }

  async req(method: string, url: string, body?: any): Promise<any> {
    if (body) {
      return this.http[method](url, body, {headers:this.headers()}).toPromise();
      // .catch((err) => console.log(err));
    } else {
      return this.http[method](url, {headers:this.headers()}).toPromise();
      // .catch((err) => console.log(err));
    }
  }

  // get request headers, eg auth via bearer token
  headers(){
    const token = localStorage.getItem(this.JWT_KEY) ?? null;
    const Header: HttpHeaders = new HttpHeaders({Accept: 'application/json'});
    if (token){
      Header.set('Authorization', `Bearer ${token}`);
      console.log(`set authorization token to ${token}`);
    } else {
      console.log("Did not have Auth Token")
    }
    return Header;
  }


  parseToken(token: string = this.token): any {
    if (token && token.length) {
      const data = jwt_decode(token);
      console.log('parsed...', JSON.stringify(data), ':)');
      return data;
    }
  }

  private get token(): string {
    const data = localStorage.getItem(this.JWT_KEY);
    return data ?? '';
  }

  private set token(val: string) {
    localStorage.setItem(this.JWT_KEY, val);
  }
}
