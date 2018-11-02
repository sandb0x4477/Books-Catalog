// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:
    {
      apiKey: 'AIzaSyBApD1-FhxPCZvSIjFRmsieGSbyOUGuBrs',
      authDomain: 'books-catalog-734fd.firebaseapp.com',
      databaseURL: 'https://books-catalog-734fd.firebaseio.com',
      projectId: 'books-catalog-734fd',
      storageBucket: 'books-catalog-734fd.appspot.com',
      messagingSenderId: '170396248613'
    }

};
