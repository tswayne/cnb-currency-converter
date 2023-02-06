# CNB currency converter

## Tech overview
Application bootstrapped with:
* Create React App w/ typescript ([docs](https://create-react-app.dev/docs/adding-typescript/#installation))
* Styled Components, using [Grommet](https://v2.grommet.io/) as a quick-start component library (found through Styled Components [ecosystem page](https://styled-components.com/ecosystem))
  * I had never used Grommet before, but wanted to use a component library in order to move a bit faster.  The developer experience is pretty nice, but the resulting DOM is a bit verbose.  Would need to spend a little more time with it to form an opinion.
* Base Http Client (my [own package](https://github.com/tswayne/base-http-client-js)), for very simple http interactions
* React Query

## Callouts
* The CNB website sets a specific CORS allowed origin (to `apl.cnb.cz`), which causes modern browsers to reject an api request directly to their domain.
  To get around that, I have a simple proxy route to pass all requests to `cnb.cz` through.  **Note** The server implementation is very bare bones (i.e. a simple express server written in js) as it's simply a means to complete the exercise as instructed.

## Running the application
* Requires node, safest version to use would be LTS (18)
* Install dependencies with `yarn` (or `npm i`, version ranges in package.json should be safe)
* Start the client and proxy server together with `npm start`
* Go to `http://localhost:3000/`