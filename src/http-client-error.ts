import { HttpClientError } from "./BaseClasses/HttpClientError";
import { createHttpErrorClass } from "./BaseClasses/HttpError";

const HttpBadRequest = createHttpErrorClass(HttpClientError, 400, "Bad Request");
const HttpUnauthorized = createHttpErrorClass(HttpClientError, 401, "Unauthorized");
const HttpPaymentRequired = createHttpErrorClass(
  HttpClientError,
  402,
  "Payment Required"
);
const HttpForbidden = createHttpErrorClass(HttpClientError, 403, "Forbidden");
const HttpNotFound = createHttpErrorClass(HttpClientError, 404, "Not Found");
const HttpMethodNotAllowed = createHttpErrorClass(
  HttpClientError,
  405,
  "Method Not Allowed"
);
const HttpNotAcceptable = createHttpErrorClass(
  HttpClientError,
  406,
  "Not Acceptable"
);
const HttpProxyAuthenticationRequired = createHttpErrorClass(
  HttpClientError,
  407,
  "Proxy Authentication Required"
);
const HttpRequestTimeout = createHttpErrorClass(
  HttpClientError,
  408,
  "Request Timeout"
);
const HttpConflict = createHttpErrorClass(HttpClientError, 409, "Conflict");
const HttpGone = createHttpErrorClass(HttpClientError, 410, "Gone");
const HttpLengthRequired = createHttpErrorClass(
  HttpClientError,
  411,
  "Length Required"
);
const HttpPreconditionFailed = createHttpErrorClass(
  HttpClientError,
  412,
  "Precondition Failed"
);
const HttpPayloadTooLarge = createHttpErrorClass(
  HttpClientError,
  413,
  "Payload Too Large"
);
const HttpUriTooLong = createHttpErrorClass(HttpClientError, 414, "URI Too Long");
const HttpUnsupportedMediaType = createHttpErrorClass(
  HttpClientError,
  415,
  "Unsupported Media Type"
);
const HttpRangeNotSatisfiable = createHttpErrorClass(
  HttpClientError,
  416,
  "Range Not Satisfiable"
);
const HttpExpectationFailed = createHttpErrorClass(
  HttpClientError,
  417,
  "Expectation Failed"
);
const HttpImATeapot = createHttpErrorClass(HttpClientError, 418, "I'm a teapot");
const HttpMisdirectedRequest = createHttpErrorClass(
  HttpClientError,
  421,
  "Misdirected Request"
);
const HttpUnprocessableEntity = createHttpErrorClass(
  HttpClientError,
  422,
  "Unprocessable Entity"
);
const HttpLocked = createHttpErrorClass(HttpClientError, 423, "Locked");
const HttpFailedDependency = createHttpErrorClass(
  HttpClientError,
  424,
  "Failed Dependency"
);
const HttpTooEarly = createHttpErrorClass(HttpClientError, 425, "Too Early");
const HttpUpgradeRequired = createHttpErrorClass(
  HttpClientError,
  426,
  "Upgrade Required"
);
const HttpPreconditionRequired = createHttpErrorClass(
  HttpClientError,
  428,
  "Precondition Required"
);
const HttpTooManyRequests = createHttpErrorClass(
  HttpClientError,
  429,
  "Too Many Requests"
);
const HttpRequestHeaderFieldsTooLarge = createHttpErrorClass(
  HttpClientError,
  431,
  "Request Header Fields Too Large"
);
const HttpUnavailableForLegalReasons = createHttpErrorClass(
  HttpClientError,
  451,
  "Unavailable For Legal Reasons"
);

const HttpClientErrors = {
  HttpBadRequest,
  HttpUnauthorized,
  HttpPaymentRequired,
  HttpForbidden,
  HttpNotFound,
  HttpMethodNotAllowed,
  HttpNotAcceptable,
  HttpProxyAuthenticationRequired,
  HttpRequestTimeout,
  HttpConflict,
  HttpGone,
  HttpLengthRequired,
  HttpPreconditionFailed,
  HttpPayloadTooLarge,
  HttpUriTooLong,
  HttpUnsupportedMediaType,
  HttpRangeNotSatisfiable,
  HttpExpectationFailed,
  HttpImATeapot,
  HttpMisdirectedRequest,
  HttpUnprocessableEntity,
  HttpLocked,
  HttpFailedDependency,
  HttpTooEarly,
  HttpUpgradeRequired,
  HttpPreconditionRequired,
  HttpTooManyRequests,
  HttpRequestHeaderFieldsTooLarge,
  HttpUnavailableForLegalReasons,
} as const;

export default HttpClientErrors as any;


