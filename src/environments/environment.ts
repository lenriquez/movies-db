// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url: 'http://api.themoviedb.org/3/',
  key: '?api_key=ec92634a4466078d022a85a41caee33e',
  popular_movies: 'http://api.themoviedb.org/3/movie/popular?api_key=ec92634a4466078d022a85a41caee33e',
  genres: 'https://api.themoviedb.org/3/genre/movie/list?api_key=ec92634a4466078d022a85a41caee33e&language=en-US'
};
