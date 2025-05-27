import { HttpSuccess } from "../base/HttpSuccess";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpOKStatus = createHttpStatusClass(HttpSuccess, 200, "OK");
const HttpCreatedStatus = createHttpStatusClass(HttpSuccess, 201, "Created");
const HttpAcceptedStatus = createHttpStatusClass(HttpSuccess, 202, "Accepted");
const HttpNonAuthoritativeInformationStatus = createHttpStatusClass(HttpSuccess, 203, "Non-Authoritative Information");
const HttpNoContentStatus = createHttpStatusClass(HttpSuccess, 204, "No Content");
const HttpResetContentStatus = createHttpStatusClass(HttpSuccess, 205, "Reset Content");
const HttpPartialContentStatus = createHttpStatusClass(HttpSuccess, 206, "Partial Content");
const HttpMultiStatusStatus = createHttpStatusClass(HttpSuccess, 207, "Multi-Status");
const HttpAlreadyReportedStatus = createHttpStatusClass(HttpSuccess, 208, "Already Reported");
const HttpIMUsedStatus = createHttpStatusClass(HttpSuccess, 226, "IM Used");

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
}