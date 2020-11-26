import debug from "debug";
import * as grpc from "@grpc/grpc-js";

import { GetSessionResponse, GetSessionRequest } from "./proto/3dviz/session_pb";
import {SessionClient} from "./proto/3dviz/session_grpc_pb";

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

async function main() {
    await getSession('bogus');
}

main().then((_) => _);

process.on("uncaughtException", (err) => {
    log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    log(`process on unhandledRejection error: ${err}`);
});