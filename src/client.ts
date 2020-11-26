import debug from "debug";
import * as grpc from "@grpc/grpc-js";

import { GetSessionResponse, GetSessionRequest, GetAssignedSessionRequest } from "./proto/3dviz/session_pb";
import { SessionClient } from "./proto/3dviz/session_grpc_pb";

const log = debug("SampleClient");
const port: string | number = process.env.PORT || 50051;
const client = new SessionClient(`127.0.0.1:${port}`, grpc.credentials.createInsecure());

const getSession = async (id: string) => {
    return new Promise((resolve, reject) => {
        const request = new GetSessionRequest();
        request.setId(id);
        log(`[getSession] Request: ${JSON.stringify(request.toObject())}`);

        client.getSession(request, (err, session: GetSessionResponse) => {
            if (err != null) {
                debug(`[getBook] err:\nerr.message: ${err.message}\nerr.stack:\n${err.stack}`);
                reject(err);
                return;
            }
            log(`[getBook] Book: ${JSON.stringify(session.toObject())}`);
            resolve(session);
        });
    });
};

const getAssignedSession = (owner: string, appId: string) => {
    return new Promise((resolve) => {
        const request = new GetAssignedSessionRequest();
        request.setAppid(appId);
        request.setOwner(owner);

        log(`[getAssignedSession] Request: ${JSON.stringify(request.toObject())}`);

        const stream: grpc.ClientReadableStream<GetSessionResponse> = client.getAssignedSessions(request);
        stream.on("data", (data: GetSessionResponse) => {
            log(`[getAssignedSession] Session: ${JSON.stringify(data.toObject())}`);
        });
        stream.on("end", () => {
            log("[getAssignedSession] Done.");
            resolve(null);
        });
    });
};

async function main() {
    await getSession('bogus');
    await getAssignedSession("xcheng4", "test");
}

main().then((_) => _);

process.on("uncaughtException", (err) => {
    log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    log(`process on unhandledRejection error: ${err}`);
});