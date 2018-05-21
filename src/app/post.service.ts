import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  result: any;

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get('/api/posts')
    .map(result => this.result = result.json());
  }
  getPost(id) {
    return this.http.get('/api/posts/', id)
    .map(result => {
      this.result = result.json();
    });
  }
}
