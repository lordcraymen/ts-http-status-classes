import { HttpSuccess } from "./BaseClasses/HttpSuccess";
import { createHttpStatusClass } from "./BaseClasses/HttpStatus";

const HttpOK = createHttpStatusClass(HttpSuccess, 200, "OK");
const HttpCreated = createHttpStatusClass(HttpSuccess, 201, "Created");
const HttpAccepted = createHttpStatusClass(HttpSuccess, 202, "Accepted");
const HttpNonAuthoritativeInformation = createHttpStatusClass(HttpSuccess, 203, "Non-Authoritative Information");
const HttpNoContent = createHttpStatusClass(HttpSuccess, 204, "No Content");
const HttpResetContent = createHttpStatusClass(HttpSuccess, 205, "Reset Content");
const HttpPartialContent = createHttpStatusClass(HttpSuccess, 206, "Partial Content");
const HttpMultiStatus = createHttpStatusClass(HttpSuccess, 207, "Multi-Status");
const HttpAlreadyReported = createHttpStatusClass(HttpSuccess, 208, "Already Reported");
const HttpIMUsed = createHttpStatusClass(HttpSuccess, 226, "IM Used");

const HttpSuccesses = {
    HttpOK,
    HttpCreated,
    HttpAccepted,
    HttpNonAuthoritativeInformation,
    HttpNoContent,
    HttpResetContent,
    HttpPartialContent,
    HttpMultiStatus,
    HttpAlreadyReported,
    HttpIMUsed
} as const;

export default HttpSuccesses as any;