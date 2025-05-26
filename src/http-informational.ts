import { HttpInformational } from "./BaseClasses/HttpInformational";
import { createHttpStatusClass } from "./BaseClasses/HttpStatus";

const HttpContinue = createHttpStatusClass(HttpInformational, 100, "Continue");
const HttpSwitchingProtocols = createHttpStatusClass(HttpInformational, 101, "Switching Protocols");
const HttpProcessing = createHttpStatusClass(HttpInformational, 102, "Processing");
const HttpEarlyHints = createHttpStatusClass(HttpInformational, 103, "Early Hints");
const HttpCheckpoint = createHttpStatusClass(HttpInformational, 103, "Checkpoint");

const HttpInformationals = {
  HttpContinue,
  HttpSwitchingProtocols,
  HttpProcessing,
  HttpEarlyHints,
  HttpCheckpoint
} as const;

export default HttpInformationals as any;