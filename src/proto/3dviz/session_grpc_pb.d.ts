// package: viz3d
// file: session.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as session_pb from "./session_pb";

interface ISessionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addSession: ISessionService_IaddSession;
    getSession: ISessionService_IgetSession;
    getAssignedSessions: ISessionService_IgetAssignedSessions;
}

interface ISessionService_IaddSession extends grpc.MethodDefinition<session_pb.AddSessionRequest, session_pb.AddSessionResponse> {
    path: "/viz3d.Session/addSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_pb.AddSessionRequest>;
    requestDeserialize: grpc.deserialize<session_pb.AddSessionRequest>;
    responseSerialize: grpc.serialize<session_pb.AddSessionResponse>;
    responseDeserialize: grpc.deserialize<session_pb.AddSessionResponse>;
}
interface ISessionService_IgetSession extends grpc.MethodDefinition<session_pb.GetSessionRequest, session_pb.GetSessionResponse> {
    path: "/viz3d.Session/getSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_pb.GetSessionRequest>;
    requestDeserialize: grpc.deserialize<session_pb.GetSessionRequest>;
    responseSerialize: grpc.serialize<session_pb.GetSessionResponse>;
    responseDeserialize: grpc.deserialize<session_pb.GetSessionResponse>;
}
interface ISessionService_IgetAssignedSessions extends grpc.MethodDefinition<session_pb.GetAssignedSessionRequest, session_pb.GetSessionResponse> {
    path: "/viz3d.Session/getAssignedSessions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<session_pb.GetAssignedSessionRequest>;
    requestDeserialize: grpc.deserialize<session_pb.GetAssignedSessionRequest>;
    responseSerialize: grpc.serialize<session_pb.GetSessionResponse>;
    responseDeserialize: grpc.deserialize<session_pb.GetSessionResponse>;
}

export const SessionService: ISessionService;

export interface ISessionServer {
    addSession: grpc.handleUnaryCall<session_pb.AddSessionRequest, session_pb.AddSessionResponse>;
    getSession: grpc.handleUnaryCall<session_pb.GetSessionRequest, session_pb.GetSessionResponse>;
    getAssignedSessions: grpc.handleServerStreamingCall<session_pb.GetAssignedSessionRequest, session_pb.GetSessionResponse>;
}

export interface ISessionClient {
    addSession(request: session_pb.AddSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    getSession(request: session_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    getAssignedSessions(request: session_pb.GetAssignedSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.GetSessionResponse>;
    getAssignedSessions(request: session_pb.GetAssignedSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.GetSessionResponse>;
}

export class SessionClient extends grpc.Client implements ISessionClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addSession(request: session_pb.AddSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    public addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    public addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    public getSession(request: session_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    public getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    public getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    public getAssignedSessions(request: session_pb.GetAssignedSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.GetSessionResponse>;
    public getAssignedSessions(request: session_pb.GetAssignedSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.GetSessionResponse>;
}
