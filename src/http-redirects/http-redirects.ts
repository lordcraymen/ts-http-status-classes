import { HttpRedirectStatus } from "../base/HttpRedirectStatus";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpMultipleChoicesRedirectStatus = createHttpStatusClass(HttpRedirectStatus, 300, "Multiple Choices");
const HttpMovedPermanentlyStatus = createHttpStatusClass(HttpRedirectStatus, 301, "Moved Permanently");
const HttpFoundStatus = createHttpStatusClass(HttpRedirectStatus, 302, "Found");
const HttpSeeOtherStatus = createHttpStatusClass(HttpRedirectStatus, 303, "See Other");
const HttpNotModifiedStatus = createHttpStatusClass(HttpRedirectStatus, 304, "Not Modified");
const HttpUseProxyStatus = createHttpStatusClass(HttpRedirectStatus, 305, "Use Proxy");
const HttpTemporaryRedirectStatus = createHttpStatusClass(HttpRedirectStatus, 307, "Temporary Redirect");
const HttpPermanentRedirectStatus = createHttpStatusClass(HttpRedirectStatus, 308, "Permanent Redirect");

export {
  HttpMultipleChoicesRedirectStatus,
  HttpMovedPermanentlyStatus,
  HttpFoundStatus,
  HttpSeeOtherStatus,
  HttpNotModifiedStatus,
  HttpUseProxyStatus,
  HttpTemporaryRedirectStatus,
  HttpPermanentRedirectStatus
};