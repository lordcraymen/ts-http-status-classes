import { HttpServerError } from "../base/HttpServerError";
import { createHttpErrorClass } from "../base/HttpError";

const HttpInternalServerError = createHttpErrorClass(
  HttpServerError,
  500,
  "Internal Server Error"
);
const HttpNotImplementedError = createHttpErrorClass(
  HttpServerError,
  501,
  "Not Implemented"
);
const HttpBadGatewayError = createHttpErrorClass(HttpServerError, 502, "Bad Gateway");
const HttpServiceUnavailableError = createHttpErrorClass(
  HttpServerError,
  503,
  "Service Unavailable"
);
const HttpGatewayTimeoutError = createHttpErrorClass(
  HttpServerError,
  504,
  "Gateway Timeout"
);
const HttpHttpVersionNotSupportedError = createHttpErrorClass(
  HttpServerError,
  505,
  "HTTP Version Not Supported"
);
const HttpVariantAlsoNegotiatesError = createHttpErrorClass(
  HttpServerError,
  506,
  "Variant Also Negotiates"
);
const HttpInsufficientStorageError = createHttpErrorClass(
  HttpServerError,
  507,
  "Insufficient Storage"
);
const HttpLoopDetectedError = createHttpErrorClass(
  HttpServerError,
  508,
  "Loop Detected"
);
const HttpNotExtendedError = createHttpErrorClass(HttpServerError, 510, "Not Extended");
const HttpNetworkAuthenticationRequiredError = createHttpErrorClass(
  HttpServerError,
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