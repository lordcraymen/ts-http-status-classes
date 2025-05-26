import { HttpServerError } from "./BaseClasses/HttpServerError";
import { createHttpErrorClass } from "./BaseClasses/HttpError";

const HttpInternalServerError = createHttpErrorClass(
  HttpServerError,
  500,
  "Internal Server Error"
);
const HttpNotImplemented = createHttpErrorClass(
  HttpServerError,
  501,
  "Not Implemented"
);
const HttpBadGateway = createHttpErrorClass(HttpServerError, 502, "Bad Gateway");
const HttpServiceUnavailable = createHttpErrorClass(
  HttpServerError,
  503,
  "Service Unavailable"
);
const HttpGatewayTimeout = createHttpErrorClass(
  HttpServerError,
  504,
  "Gateway Timeout"
);
const HttpHttpVersionNotSupported = createHttpErrorClass(
  HttpServerError,
  505,
  "HTTP Version Not Supported"
);
const HttpVariantAlsoNegotiates = createHttpErrorClass(
  HttpServerError,
  506,
  "Variant Also Negotiates"
);
const HttpInsufficientStorage = createHttpErrorClass(
  HttpServerError,
  507,
  "Insufficient Storage"
);
const HttpLoopDetected = createHttpErrorClass(
  HttpServerError,
  508,
  "Loop Detected"
);
const HttpNotExtended = createHttpErrorClass(HttpServerError, 510, "Not Extended");
const HttpNetworkAuthenticationRequired = createHttpErrorClass(
  HttpServerError,
  511,
  "Network Authentication Required"
);

const HttpServerErrors = {
  HttpInternalServerError,
  HttpNotImplemented,
  HttpBadGateway,
  HttpServiceUnavailable,
  HttpGatewayTimeout,
  HttpHttpVersionNotSupported,
  HttpVariantAlsoNegotiates,
  HttpInsufficientStorage,
  HttpLoopDetected,
  HttpNotExtended,
  HttpNetworkAuthenticationRequired,
} as const;

export default HttpServerErrors as any