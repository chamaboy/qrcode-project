import { Injectable } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';

const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.searchKey
);

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  index = {
    store: searchClient.initIndex('stores'),
    popularStore: searchClient.initIndex('stores_popular'),
  };

  searchControl: FormControl = new FormControl('');

  constructor() {}
}
