import { MoviesDbPage } from './app.po';

describe('movies-db App', () => {
  let page: MoviesDbPage;

  beforeEach(() => {
    page = new MoviesDbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
