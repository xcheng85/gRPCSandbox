import * as grpc from '@grpc/grpc-js';
import debug from 'debug';
import {
    AddSessionRequest,
    GetSessionRequest,
    AddSessionResponse,
    GetSessionResponse,
    GetAssignedSessionRequest
} from '../proto/3dviz/session_pb';

import { SessionService, ISessionServer } from '../proto/3dviz/session_grpc_pb';

const log = debug("SampleServer");

class SessionHandler implements ISessionServer {
    addSession = (call: grpc.ServerUnaryCall<AddSessionRequest, AddSessionResponse>, callback: grpc.sendUnaryData<AddSessionResponse>):
        void => {
        const reply: AddSessionResponse = new AddSessionResponse();
        reply.setId(call.request.getId());
        callback(null, reply);
    };

    getSession = (call: grpc.ServerUnaryCall<GetSessionRequest, GetSessionResponse>, callback: grpc.sendUnaryData<GetSessionResponse>):
        void => {
        const reply: GetSessionResponse = new GetSessionResponse();
        reply.setId(call.request.getId());
        callback(null, reply);
    };

    getAssignedSessions = (call: grpc.ServerWritableStream<GetAssignedSessionRequest, GetSessionResponse>) => {
        log(`[getAssignedSessions] Request: ${JSON.stringify(call.request.toObject())}`);
        for (let i = 1; i <= 10; i++) {
            const reply = new GetSessionResponse();
            reply.setId(`Session${i}`);
            log(`[getAssignedSessions] Write: ${JSON.stringify(reply.toObject())}`);
            call.write(reply);
        }
        log("[getAssignedSessions] Done.");
        call.end();
    };
}

export default {
    service: SessionService,                // Service interface
    handler: new SessionHandler(),          // Service interface definitions
};