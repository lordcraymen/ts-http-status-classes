import { HttpServerErrorStatus } from "../base/HttpServerErrorStatus";
import { createHttpErrorStatusClass } from "../base/HttpErrorStatus";

const HttpInternalServerError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  500,
  "Internal Server Error"
);
const HttpNotImplementedError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  501,
  "Not Implemented"
);
const HttpBadGatewayError = createHttpErrorStatusClass(HttpServerErrorStatus, 502, "Bad Gateway");
const HttpServiceUnavailableError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  503,
  "Service Unavailable"
);
const HttpGatewayTimeoutError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  504,
  "Gateway Timeout"
);
const HttpHttpVersionNotSupportedError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  505,
  "HTTP Version Not Supported"
);
const HttpVariantAlsoNegotiatesError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  506,
  "Variant Also Negotiates"
);
const HttpInsufficientStorageError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  507,
  "Insufficient Storage"
);
const HttpLoopDetectedError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  508,
  "Loop Detected"
);
const HttpNotExtendedError = createHttpErrorStatusClass(HttpServerErrorStatus, 510, "Not Extended");
const HttpNetworkAuthenticationRequiredError = createHttpErrorStatusClass(
  HttpServerErrorStatus,
  511,
  "Network Authentication Required"
);

export {
  HttpInternalServerError,
  HttpNotImplementedError,
  HttpBadGatewayError,
  HttpServiceUnavailableError,
  HttpGatewayTimeoutError,
  HttpHttpVersionNotSupportedError,
  HttpVariantAlsoNegotiatesError,
  HttpInsufficientStorageError,
  HttpLoopDetectedError,
  HttpNotExtendedError,
  HttpNetworkAuthenticationRequiredError,
};