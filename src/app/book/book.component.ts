import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: Array<any> = [];
  searchResults: any[] = [];
  searchTerm!: string;
  errorMessage: string | null = null;

  constructor(private bookService: BookService, private http: HttpClient) { }

  ngOnInit(): void {
      this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  search() {
    if (this.searchTerm.length < 3) {
      this.errorMessage = 'Please enter at least 3 characters';
      return;
    }
    this.errorMessage = null;
    this.searchResults = this.books.filter(book =>
      book.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }


}
