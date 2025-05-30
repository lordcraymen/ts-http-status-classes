
# ts-http-status-classes

A modular TypeScript library providing HTTP status code classes, organized by category (Informational, Success, Redirection, Client Error, Server Error).

## Features

- **Typed** HTTP status classes for easy and robust error handling in TypeScript/JavaScript projects
- **Modular** structure: import only what you need (e.g., just the 2xx classes)
- **Supports both ESM and CommonJS** module systems
- Lightweight and dependency-free

## Installation

```bash
npm install ts-http-status-classes
```

## Usage

Import specific status classes from the desired module:

```typescript
import { HttpOKStatus } from 'ts-http-status-classes/http-successes';
import { HttpNotFoundError } from 'ts-http-status-classes/http-client-errors';

const ok = new OK();
console.log(ok.statusCode); // 200
console.log(ok.message);    // "OK"

const notFound = new HttpNotFoundError("File foo.bar does not exist.");
console.log(notFound.statusCode); // 404
console.log(notFound.message);    // "Not Found"

const notFoundFromError = HttpNotFoundError.from(new Error("File foo.bar does not exist."));
console.log(notFoundFromError.statusCode); //404
console.log(notFoundFromError.message);    // "Not Found"
console.log(notFoundFromError.origin); 
// { 
//    type: "Error", 
//    message: "File foo.bar does not exist.", 
//    stack: "Error: File foo.bar does not exist.\n    at <anonymous>:1"
//  }
```

## Modules

- `base`: Shared base classes and interfaces
- `http-infos`: Informational responses (1xx)
- `http-successes`: Success responses (2xx)
- `http-redirects`: Redirection responses (3xx)
- `http-client-errors`: Client error responses (4xx)
- `http-server-errors`: Server error responses (5xx)

Example import for ESM:

```typescript
import { HttpBadRequestError as BadRequest } from 'ts-http-status-classes/http-client-errors';
```

Or for CommonJS:

```javascript
const { HttpBadRequestError as BadRequest } = require('ts-http-status-classes/http-client-errors');
```

## API

Each status class exposes at least:

- `statusCode` (number) — The HTTP status code
- `message` (string) — The standard status message

Depending on your implementation, additional properties or methods may be available.

## Extending

The /base package exports abstract classes and factories to add new custom status codes

```javascript
import { HttpInfoStatus } from "../base/HttpInfoStatus";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpCustomInfo = createHttpStatusClass(HttpInfoStatus, 113, "Custom info");
```
or for custom errors

```javascript
import { HttpClientErrorStatus } from "../base/HttpClientErrorStatus";
import { createHttpErrorStatusClass } from "../base/HttpErrorStatus";

const HttpCustomClientError = createHttpErrorStatusClass(HttpClientErrorStatus, 460, "Custom Client Error"); 
```

## Development

- Clone the repository
- Install dependencies:  
  `npm install`
- Build:  
  `npm run build`
- Run tests:  
  `npm test`

## Contributing

Contributions, issues and feature requests are welcome!  
Feel free to open a pull request or issue.

## License

[MIT](./LICENSE)

---

> Made by [lordcraymen](https://github.com/lordcraymen)
