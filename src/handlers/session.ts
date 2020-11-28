import * as grpc from '@grpc/grpc-js';
import debug from 'debug';
import {
    AddSessionRequest,
    GetSessionRequest,
    AddSessionResponse,
    Session,
    GetAssignedSessionRequest,
    GetSessionsRequest
} from '../proto/3dviz/session_pb';

import { SessionServiceService, ISessionServiceServer } from '../proto/3dviz/session_grpc_pb';

const log = debug("SampleServer");

class SessionServiceHandler implements ISessionServiceServer {
    addSession = (call: grpc.ServerUnaryCall<AddSessionRequest, AddSessionResponse>, callback: grpc.sendUnaryData<AddSessionResponse>):
        void => {
        const reply: AddSessionResponse = new AddSessionResponse();
        reply.setId(call.request.getId());
        callback(null, reply);
    };

    getSession = (call: grpc.ServerUnaryCall<GetSessionRequest, Session>, callback: grpc.sendUnaryData<Session>):
        void => {
        const reply: Session = new Session();
        reply.setId(call.request.getId());
        callback(null, reply);
    };

    getAssignedSessions = (call: grpc.ServerWritableStream<GetAssignedSessionRequest, Session>) => {
        log(`[getAssignedSessions] Request: ${JSON.stringify(call.request.toObject())}, 
        API_KEY: ${JSON.stringify(call.metadata.get('API_KEY'))},
        Deadline: ${call.getDeadline()}`);
        const metadata = new grpc.Metadata({ waitForReady: true });
        call.sendMetadata(metadata)
        /*
        cancelled: boolean;
    readonly metadata: Metadata;
    getPeer(): string;
    sendMetadata(responseMetadata: Metadata): void;
    getDeadline(): Deadline;*/

        for (let i = 1; i <= 10; i++) {
            if(!call.cancelled){
                return;
            }
            const reply = new Session();
            reply.setId(`Session${i}`);
            log(`[getAssignedSessions] Write: ${JSON.stringify(reply.toObject())}`);
            call.write(reply);
        }
        log("[getAssignedSessions] Done.");
        call.end();
    };

    public getSessions(call: grpc.ServerDuplexStream<GetSessionsRequest, Session>) {
        call.on("data", (request: GetSessionsRequest) => {
            const reply = new Session();
            reply.setAppid(request.getAppid());
            log(`[getSessions] Write: ${JSON.stringify(reply.toObject())}`);
            call.write(reply);
        });
        call.on("end", () => {
            log("[getSessions] Done.");
            call.end();
        });
    }
}

export default {
    service: SessionServiceService,                // Service interface
    handler: new SessionServiceHandler(),          // Service interface definitions
};