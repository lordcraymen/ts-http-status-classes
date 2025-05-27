import { HttpClientErrorStatus } from "../base/HttpClientErrorStatus";
import { createHttpErrorStatusClass } from "../base/HttpErrorStatus";

const HttpBadRequestError = createHttpErrorStatusClass(HttpClientErrorStatus, 400, "Bad Request");
const HttpUnauthorizedError = createHttpErrorStatusClass(HttpClientErrorStatus, 401, "Unauthorized");
const HttpPaymentRequiredError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  402,
  "Payment Required"
);
const HttpForbiddenError = createHttpErrorStatusClass(HttpClientErrorStatus, 403, "Forbidden");
const HttpNotFoundError = createHttpErrorStatusClass(HttpClientErrorStatus, 404, "Not Found");
const HttpMethodNotAllowedError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  405,
  "Method Not Allowed"
);
const HttpNotAcceptableError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  406,
  "Not Acceptable"
);
const HttpProxyAuthenticationRequiredError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  407,
  "Proxy Authentication Required"
);
const HttpRequestTimeoutError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  408,
  "Request Timeout"
);
const HttpConflictError = createHttpErrorStatusClass(HttpClientErrorStatus, 409, "Conflict");
const HttpGoneError = createHttpErrorStatusClass(HttpClientErrorStatus, 410, "Gone");
const HttpLengthRequiredError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  411,
  "Length Required"
);
const HttpPreconditionFailedError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  412,
  "Precondition Failed"
);
const HttpPayloadTooLargeError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  413,
  "Payload Too Large"
);
const HttpUriTooLongError = createHttpErrorStatusClass(HttpClientErrorStatus, 414, "URI Too Long");
const HttpUnsupportedMediaTypeError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  415,
  "Unsupported Media Type"
);
const HttpRangeNotSatisfiableError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  416,
  "Range Not Satisfiable"
);
const HttpExpectationFailedError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  417,
  "Expectation Failed"
);
const HttpImATeapotError = createHttpErrorStatusClass(HttpClientErrorStatus, 418, "I'm a teapot");
const HttpMisdirectedRequestError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  421,
  "Misdirected Request"
);
const HttpUnprocessableEntityError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  422,
  "Unprocessable Entity"
);
const HttpLockedError = createHttpErrorStatusClass(HttpClientErrorStatus, 423, "Locked");
const HttpFailedDependencyError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  424,
  "Failed Dependency"
);
const HttpTooEarlyError = createHttpErrorStatusClass(HttpClientErrorStatus, 425, "Too Early");
const HttpUpgradeRequiredError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  426,
  "Upgrade Required"
);
const HttpPreconditionRequiredError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  428,
  "Precondition Required"
);
const HttpTooManyRequestsError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  429,
  "Too Many Requests"
);
const HttpRequestHeaderFieldsTooLargeError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
  431,
  "Request Header Fields Too Large"
);
const HttpUnavailableForLegalReasonsError = createHttpErrorStatusClass(
  HttpClientErrorStatus,
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


