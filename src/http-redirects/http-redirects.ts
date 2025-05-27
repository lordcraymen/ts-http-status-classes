import { HttpRedirect } from "../base/HttpRedirect";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpMultipleChoices = createHttpStatusClass(HttpRedirect, 300, "Multiple Choices");
const HttpMovedPermanently = createHttpStatusClass(HttpRedirect, 301, "Moved Permanently");
const HttpFound = createHttpStatusClass(HttpRedirect, 302, "Found");
const HttpSeeOther = createHttpStatusClass(HttpRedirect, 303, "See Other");
const HttpNotModified = createHttpStatusClass(HttpRedirect, 304, "Not Modified");
const HttpUseProxy = createHttpStatusClass(HttpRedirect, 305, "Use Proxy");
const HttpTemporaryRedirect = createHttpStatusClass(HttpRedirect, 307, "Temporary Redirect");
const HttpPermanentRedirect = createHttpStatusClass(HttpRedirect, 308, "Permanent Redirect");

export {
  HttpMultipleChoices,
  HttpMovedPermanently,
  HttpFound,
  HttpSeeOther,
  HttpNotModified,
  HttpUseProxy,
  HttpTemporaryRedirect,
  HttpPermanentRedirect
};