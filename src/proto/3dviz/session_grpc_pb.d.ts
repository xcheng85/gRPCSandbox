// package: viz3d
// file: session.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as session_pb from "./session_pb";

interface ISessionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addSession: ISessionServiceService_IaddSession;
    getSession: ISessionServiceService_IgetSession;
    getAssignedSessions: ISessionServiceService_IgetAssignedSessions;
    getSessions: ISessionServiceService_IgetSessions;
}

interface ISessionServiceService_IaddSession extends grpc.MethodDefinition<session_pb.AddSessionRequest, session_pb.AddSessionResponse> {
    path: "/viz3d.SessionService/addSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_pb.AddSessionRequest>;
    requestDeserialize: grpc.deserialize<session_pb.AddSessionRequest>;
    responseSerialize: grpc.serialize<session_pb.AddSessionResponse>;
    responseDeserialize: grpc.deserialize<session_pb.AddSessionResponse>;
}
interface ISessionServiceService_IgetSession extends grpc.MethodDefinition<session_pb.GetSessionRequest, session_pb.Session> {
    path: "/viz3d.SessionService/getSession";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_pb.GetSessionRequest>;
    requestDeserialize: grpc.deserialize<session_pb.GetSessionRequest>;
    responseSerialize: grpc.serialize<session_pb.Session>;
    responseDeserialize: grpc.deserialize<session_pb.Session>;
}
interface ISessionServiceService_IgetAssignedSessions extends grpc.MethodDefinition<session_pb.GetAssignedSessionRequest, session_pb.Session> {
    path: "/viz3d.SessionService/getAssignedSessions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<session_pb.GetAssignedSessionRequest>;
    requestDeserialize: grpc.deserialize<session_pb.GetAssignedSessionRequest>;
    responseSerialize: grpc.serialize<session_pb.Session>;
    responseDeserialize: grpc.deserialize<session_pb.Session>;
}
interface ISessionServiceService_IgetSessions extends grpc.MethodDefinition<session_pb.GetSessionsRequest, session_pb.Session> {
    path: "/viz3d.SessionService/getSessions";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<session_pb.GetSessionsRequest>;
    requestDeserialize: grpc.deserialize<session_pb.GetSessionsRequest>;
    responseSerialize: grpc.serialize<session_pb.Session>;
    responseDeserialize: grpc.deserialize<session_pb.Session>;
}

export const SessionServiceService: ISessionServiceService;

export interface ISessionServiceServer {
    addSession: grpc.handleUnaryCall<session_pb.AddSessionRequest, session_pb.AddSessionResponse>;
    getSession: grpc.handleUnaryCall<session_pb.GetSessionRequest, session_pb.Session>;
    getAssignedSessions: grpc.handleServerStreamingCall<session_pb.GetAssignedSessionRequest, session_pb.Session>;
    getSessions: grpc.handleBidiStreamingCall<session_pb.GetSessionsRequest, session_pb.Session>;
}

export interface ISessionServiceClient {
    addSession(request: session_pb.AddSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    getSession(request: session_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.Session) => void): grpc.ClientUnaryCall;
    getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.Session) => void): grpc.ClientUnaryCall;
    getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.Session) => void): grpc.ClientUnaryCall;
    getAssignedSessions(request: session_pb.GetAssignedSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.Session>;
    getAssignedSessions(request: session_pb.GetAssignedSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.Session>;
    getSessions(): grpc.ClientDuplexStream<session_pb.GetSessionsRequest, session_pb.Session>;
    getSessions(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<session_pb.GetSessionsRequest, session_pb.Session>;
    getSessions(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<session_pb.GetSessionsRequest, session_pb.Session>;
}

export class SessionServiceClient extends grpc.Client implements ISessionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addSession(request: session_pb.AddSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    public addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    public addSession(request: session_pb.AddSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.AddSessionResponse) => void): grpc.ClientUnaryCall;
    public getSession(request: session_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: session_pb.Session) => void): grpc.ClientUnaryCall;
    public getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_pb.Session) => void): grpc.ClientUnaryCall;
    public getSession(request: session_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_pb.Session) => void): grpc.ClientUnaryCall;
    public getAssignedSessions(request: session_pb.GetAssignedSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.Session>;
    public getAssignedSessions(request: session_pb.GetAssignedSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_pb.Session>;
    public getSessions(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<session_pb.GetSessionsRequest, session_pb.Session>;
    public getSessions(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<session_pb.GetSessionsRequest, session_pb.Session>;
}
