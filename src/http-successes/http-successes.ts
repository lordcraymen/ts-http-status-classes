import { HttpSuccessStatus } from "../base/HttpSuccessStatus";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpOKStatus = createHttpStatusClass(HttpSuccessStatus, 200, "OK");
const HttpCreatedStatus = createHttpStatusClass(HttpSuccessStatus, 201, "Created");
const HttpAcceptedStatus = createHttpStatusClass(HttpSuccessStatus, 202, "Accepted");
const HttpNonAuthoritativeInformationStatus = createHttpStatusClass(HttpSuccessStatus, 203, "Non-Authoritative Information");
const HttpNoContentStatus = createHttpStatusClass(HttpSuccessStatus, 204, "No Content");
const HttpResetContentStatus = createHttpStatusClass(HttpSuccessStatus, 205, "Reset Content");
const HttpPartialContentStatus = createHttpStatusClass(HttpSuccessStatus, 206, "Partial Content");
const HttpMultiStatusStatus = createHttpStatusClass(HttpSuccessStatus, 207, "Multi-Status");
const HttpAlreadyReportedStatus = createHttpStatusClass(HttpSuccessStatus, 208, "Already Reported");
const HttpIMUsedStatus = createHttpStatusClass(HttpSuccessStatus, 226, "IM Used");

export {
    HttpOKStatus,
    HttpCreatedStatus,
    HttpAcceptedStatus,
    HttpNonAuthoritativeInformationStatus,
    HttpNoContentStatus,
    HttpResetContentStatus,
    HttpPartialContentStatus,
    HttpMultiStatusStatus,
    HttpAlreadyReportedStatus,
    HttpIMUsedStatus
};