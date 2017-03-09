import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchService } from '../search.service';

@Component({
  selector: 'mdb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('search')
  searchTextInput: ElementRef;

  constructor(public searchService: SearchService) {}

  ngOnInit() {
    this.initEventSearchFunctionality();
  }

  initEventSearchFunctionality() {
    let input = this.searchTextInput.nativeElement;
    let search$ = Observable.fromEvent(input, 'keyup');
    //this.searchService.setSearchInputListener(search$);
  }
}
