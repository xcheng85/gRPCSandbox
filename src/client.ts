import debug from "debug";
import * as grpc from "@grpc/grpc-js";
import _ from "lodash";

import { Session, GetSessionRequest, GetAssignedSessionRequest, GetSessionsRequest } from "./proto/3dviz/session_pb";
import { SessionServiceClient } from "./proto/3dviz/session_grpc_pb";

const log = debug("SampleClient");
const port: string | number = process.env.PORT || 50051;

// @ts-ignore
const interceptor = (options: grpc.InterceptorOptions, nextCall) => {
    let stored_listener;
    let stored_metadata: grpc.Metadata;
    return new grpc.InterceptingCall(nextCall(options), {
        start: (metadata, listener, next) => {
            //var span = apm.startSpan('grpc');
            //var traceparent = span._context.toString();
            //metadata.add('elastic-apm-traceparent', traceparent);
            log("[client-interceptor]metadata:", metadata);
            stored_listener = listener;
            stored_metadata = metadata;
            next(metadata, listener);
            //span.end();
        },
        sendMessage: (message, next) => {
            log("[client-interceptor]sendMessage:", message);
            const options2 = _.clone(options);
            const second_call = nextCall(options2);
            second_call.start(stored_metadata);
            second_call.sendMessage(message);
            second_call.halfClose();
            next(message);
        },
        halfClose: function (next) {
            log("[client-interceptor]halfClose:");
            next();
        }
    });
}

const client = new SessionServiceClient(`127.0.0.1:${port}`, grpc.credentials.createInsecure(),
    { interceptors: [interceptor] });

const getSession = async (id: string) => {
    return new Promise((resolve, reject) => {
        const request = new GetSessionRequest();
        request.setId(id);
        log(`[getSession] Request: ${JSON.stringify(request.toObject())}`);
        const metadata = new grpc.Metadata({ waitForReady: true });
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        client.getSession(request, metadata, {deadline: deadline}, (err, session: Session) => {
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

        const stream: grpc.ClientReadableStream<Session> = client.getAssignedSessions(request);
        stream.on("data", (data: Session) => {
            log(`[getAssignedSession] Session: ${JSON.stringify(data.toObject())}`);
        });
        stream.on("end", () => {
            log("[getAssignedSession] Done.");
            resolve(null);
        });
    });
};

const getSessions = () => {
    return new Promise((resolve) => {
        const stream: grpc.ClientDuplexStream<GetSessionsRequest, Session> = client.getSessions();

        stream.on("data", (data: Session) => {
            log(`[getSessions] Session: ${JSON.stringify(data.toObject())}`);
        });
        stream.on("end", () => {
            log("[getSessions] Done.");
            resolve(null);
        });

        for (let i = 0; i < 10; i++) {
            const req = new GetSessionsRequest();
            req.setAppid(`xcheng4_${i}`);
            log(`[getSessions] Request: ${JSON.stringify(req.toObject())}`);
            stream.write(req);
        }
        stream.end();
    });
};

async function main() {
    await getSession('bogus');
    //   await getAssignedSession("xcheng4", "test");
    //await getSessions();
}

main().then((_) => _);

process.on("uncaughtException", (err) => {
    log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    log(`process on unhandledRejection error: ${err}`);
});