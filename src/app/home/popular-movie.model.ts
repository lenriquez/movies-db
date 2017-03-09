export { Movies } from './movies.model';

export class PopularMovies {
  page:         number;
  results:      Array<Movies>;
  totalResults: number;
  totalPages:   number;
}