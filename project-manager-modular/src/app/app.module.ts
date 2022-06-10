import * as io from "socket.io-client";
import { environment } from "../environments/environment";
import { mockIO } from "./mocks/mock-socket";
import { ApplicationConfigService } from './services/application-config/application-config.service';


export function socketIoFactory() {
  if (environment.e2eMode) {
    return mockIO;
  }
  return io;
}

export function initializeApplication(applicationConfigService: ApplicationConfigService) {
  return () => applicationConfigService.loadConfig();
}

export const enableAuthentication = !environment.e2eMode;
