import { HttpInfoStatus } from "../base/HttpInfoStatus";
import { createHttpStatusClass } from "../base/HttpStatus";

const HttpContinueInfo = createHttpStatusClass(HttpInfoStatus, 100, "Continue");
const HttpSwitchingProtocolsInfo = createHttpStatusClass(HttpInfoStatus, 101, "Switching Protocols");
const HttpProcessingInfo = createHttpStatusClass(HttpInfoStatus, 102, "Processing");
const HttpEarlyHintsInfo = createHttpStatusClass(HttpInfoStatus, 103, "Early Hints");
const HttpCheckpointInfo = createHttpStatusClass(HttpInfoStatus, 103, "Checkpoint");

export {
  HttpContinueInfo,
  HttpSwitchingProtocolsInfo,
  HttpProcessingInfo,
  HttpEarlyHintsInfo,
  HttpCheckpointInfo
};