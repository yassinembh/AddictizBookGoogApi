import {Component, OnInit} from '@angular/core';
import {SearchService} from '../shared/search.service';
import {Book} from '../model';
import {FavouriteService} from '../shared/favourite.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  LocalStorage = localStorage;
  json = JSON;
  booksList: Book[] = [];
  searchString = 'php';

  constructor(private searchService: SearchService,
              private favouriteService: FavouriteService) {
  }

  ngOnInit() {
    this.search();
  }

  search() {
    this.searchService.search(this.searchString)
      .subscribe((res: Book[]) => {
        this.booksList = res['items'];
        this.searchString = '';
        console.log(this.booksList);
      });
  }

  addToFavourite(book: Book[]) {
    this.favouriteService.addToFavourite(book);
  }

}
