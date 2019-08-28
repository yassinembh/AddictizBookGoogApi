import { Component, OnInit } from '@angular/core';
import {Book} from '../model';
import {FavouriteService} from '../shared/favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favouriteBooks: Book[] = [];

  constructor(private favouriteService: FavouriteService) { }

  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      this.favouriteBooks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }

  deleteFromFavourite(book) {
    this.favouriteService.deleteFromFavourite(book);
    this.favouriteBooks = this.favouriteService.getFavouriteBooks();
  }

}
