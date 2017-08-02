// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://repair-link-api-staging.herokuapp.com/api',
  projectTitle: 'RepairLink',
  okta: {
    url: 'https://dev-763801.oktapreview.com/',
    clientId: '0oabg1qdk8K1paWkI0h7',
    issuer: 'https://dev-763801.oktapreview.com/oauth2/ausbg8o1txTrmRWmb0h7',
    redirectUri: 'http://localhost:4200/secure/login'
  }
};
