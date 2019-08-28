import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(search: string) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + search);
  }

}
