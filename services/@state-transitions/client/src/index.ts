import { EventLogService } from "@state-transitions/definition"
import { createConnectTransport } from "@bufbuild/connect-node";
import { createPromiseClient } from "@bufbuild/connect";

import type { } from "@bufbuild/connect-node";

export const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    httpVersion: "2"
});

export const client = createPromiseClient(EventLogService, transport);