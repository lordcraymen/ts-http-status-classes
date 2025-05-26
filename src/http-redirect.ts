import { HttpRedirect } from "./BaseClasses/HttpRedirect";
import { createHttpStatusClass } from "./BaseClasses/HttpStatus";

const HttpMultipleChoices = createHttpStatusClass(HttpRedirect, 300, "Multiple Choices");
const HttpMovedPermanently = createHttpStatusClass(HttpRedirect, 301, "Moved Permanently");
const HttpFound = createHttpStatusClass(HttpRedirect, 302, "Found");
const HttpSeeOther = createHttpStatusClass(HttpRedirect, 303, "See Other");
const HttpNotModified = createHttpStatusClass(HttpRedirect, 304, "Not Modified");
const HttpUseProxy = createHttpStatusClass(HttpRedirect, 305, "Use Proxy");
const HttpTemporaryRedirect = createHttpStatusClass(HttpRedirect, 307, "Temporary Redirect");
const HttpPermanentRedirect = createHttpStatusClass(HttpRedirect, 308, "Permanent Redirect");

const HttpRedirects = {
  HttpMultipleChoices,
  HttpMovedPermanently,
  HttpFound,
  HttpSeeOther,
  HttpNotModified,
  HttpUseProxy,
  HttpTemporaryRedirect,
  HttpPermanentRedirect
} as const;

export default HttpRedirects as any;