import { HttpClientError } from "../base/HttpClientError";
import { createHttpErrorClass } from "../base/HttpError";

const HttpBadRequestError = createHttpErrorClass(HttpClientError, 400, "Bad Request");
const HttpUnauthorizedError = createHttpErrorClass(HttpClientError, 401, "Unauthorized");
const HttpPaymentRequiredError = createHttpErrorClass(
  HttpClientError,
  402,
  "Payment Required"
);
const HttpForbiddenError = createHttpErrorClass(HttpClientError, 403, "Forbidden");
const HttpNotFoundError = createHttpErrorClass(HttpClientError, 404, "Not Found");
const HttpMethodNotAllowedError = createHttpErrorClass(
  HttpClientError,
  405,
  "Method Not Allowed"
);
const HttpNotAcceptableError = createHttpErrorClass(
  HttpClientError,
  406,
  "Not Acceptable"
);
const HttpProxyAuthenticationRequiredError = createHttpErrorClass(
  HttpClientError,
  407,
  "Proxy Authentication Required"
);
const HttpRequestTimeoutError = createHttpErrorClass(
  HttpClientError,
  408,
  "Request Timeout"
);
const HttpConflictError = createHttpErrorClass(HttpClientError, 409, "Conflict");
const HttpGoneError = createHttpErrorClass(HttpClientError, 410, "Gone");
const HttpLengthRequiredError = createHttpErrorClass(
  HttpClientError,
  411,
  "Length Required"
);
const HttpPreconditionFailedError = createHttpErrorClass(
  HttpClientError,
  412,
  "Precondition Failed"
);
const HttpPayloadTooLargeError = createHttpErrorClass(
  HttpClientError,
  413,
  "Payload Too Large"
);
const HttpUriTooLongError = createHttpErrorClass(HttpClientError, 414, "URI Too Long");
const HttpUnsupportedMediaTypeError = createHttpErrorClass(
  HttpClientError,
  415,
  "Unsupported Media Type"
);
const HttpRangeNotSatisfiableError = createHttpErrorClass(
  HttpClientError,
  416,
  "Range Not Satisfiable"
);
const HttpExpectationFailedError = createHttpErrorClass(
  HttpClientError,
  417,
  "Expectation Failed"
);
const HttpImATeapotError = createHttpErrorClass(HttpClientError, 418, "I'm a teapot");
const HttpMisdirectedRequestError = createHttpErrorClass(
  HttpClientError,
  421,
  "Misdirected Request"
);
const HttpUnprocessableEntityError = createHttpErrorClass(
  HttpClientError,
  422,
  "Unprocessable Entity"
);
const HttpLockedError = createHttpErrorClass(HttpClientError, 423, "Locked");
const HttpFailedDependencyError = createHttpErrorClass(
  HttpClientError,
  424,
  "Failed Dependency"
);
const HttpTooEarlyError = createHttpErrorClass(HttpClientError, 425, "Too Early");
const HttpUpgradeRequiredError = createHttpErrorClass(
  HttpClientError,
  426,
  "Upgrade Required"
);
const HttpPreconditionRequiredError = createHttpErrorClass(
  HttpClientError,
  428,
  "Precondition Required"
);
const HttpTooManyRequestsError = createHttpErrorClass(
  HttpClientError,
  429,
  "Too Many Requests"
);
const HttpRequestHeaderFieldsTooLargeError = createHttpErrorClass(
  HttpClientError,
  431,
  "Request Header Fields Too Large"
);
const HttpUnavailableForLegalReasonsError = createHttpErrorClass(
  HttpClientError,
  451,
  "Unavailable For Legal Reasons"
);

export {
  HttpBadRequestError,
  HttpUnauthorizedError,
  HttpPaymentRequiredError,
  HttpForbiddenError,
  HttpNotFoundError,
  HttpMethodNotAllowedError,
  HttpNotAcceptableError,
  HttpProxyAuthenticationRequiredError,
  HttpRequestTimeoutError,
  HttpConflictError,
  HttpGoneError,
  HttpLengthRequiredError,
  HttpPreconditionFailedError,
  HttpPayloadTooLargeError,
  HttpUriTooLongError,
  HttpUnsupportedMediaTypeError,
  HttpRangeNotSatisfiableError,
  HttpExpectationFailedError,
  HttpImATeapotError,
  HttpMisdirectedRequestError,
  HttpUnprocessableEntityError,
  HttpLockedError,
  HttpFailedDependencyError,
  HttpTooEarlyError,
  HttpUpgradeRequiredError,
  HttpPreconditionRequiredError,
  HttpTooManyRequestsError,
  HttpRequestHeaderFieldsTooLargeError,
  HttpUnavailableForLegalReasonsError
}


