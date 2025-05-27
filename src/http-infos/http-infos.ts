import { HttpInformational } from "../base/HttpInformational";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpContinueStatus = createHttpStatusClass(HttpInformational, 100, "Continue");
const HttpSwitchingProtocolsStatus = createHttpStatusClass(HttpInformational, 101, "Switching Protocols");
const HttpProcessingStatus = createHttpStatusClass(HttpInformational, 102, "Processing");
const HttpEarlyHintsStatus = createHttpStatusClass(HttpInformational, 103, "Early Hints");
const HttpCheckpointStatus = createHttpStatusClass(HttpInformational, 103, "Checkpoint");

export {
  HttpContinueStatus,
  HttpSwitchingProtocolsStatus,
  HttpProcessingStatus,
  HttpEarlyHintsStatus,
  HttpCheckpointStatus
};