## error
[![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

error middleware for express

this middleware needs to be added as the last middleware in the application; after all “non-error” and “error” middleware. it assumes that if the application got here, an error was sent via next( err ). if response headers have not yet been sent, it will render an error view providing the error message, and if running in a `development` environment, the error object. when rendering the view, it assumes that a view named `error` exists; e.g. `/views/error.hjs`.

```
{{{ message }}}
{{# error.stack }}<pre>{{ error.stack }}</pre>{{/ error.stack }}
```

## setup
```bash
npm install dan-nl/error
```

## use
see [express-http-skeleton][skeleton-url] for an example of use in an application context.

```javascript
var express = require( 'express' );
var app = express();
var error = require( 'error' );

// ... middleware declarations
// ... route declarations

app.use( error );
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/error.svg
[david-dm-url]: https://david-dm.org/dan-nl/error
[david-dm-dev-image]: https://david-dm.org/dan-nl/error/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/error?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/error/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/c7c645b9-4af9-4815-83e2-2fc90f61141d/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/c7c645b9-4af9-4815-83e2-2fc90f61141d
[skeleton-url]: https://github.com/dan-nl/express-http-skeleton/blob/master/app.js
