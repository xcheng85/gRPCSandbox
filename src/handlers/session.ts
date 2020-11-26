import * as grpc from '@grpc/grpc-js';

import { AddSessionRequest, GetSessionRequest, AddSessionResponse, GetSessionResponse } from '../proto/3dviz/session_pb';
import { SessionService, ISessionServer } from '../proto/3dviz/session_grpc_pb';

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
}

export default {
    service: SessionService,                // Service interface
    handler: new SessionHandler(),          // Service interface definitions
};