// package: viz3d
// file: session.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddSessionResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): AddSessionResponse;

    getCreatedtimestamp(): string;
    setCreatedtimestamp(value: string): AddSessionResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddSessionResponse): AddSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSessionResponse;
    static deserializeBinaryFromReader(message: AddSessionResponse, reader: jspb.BinaryReader): AddSessionResponse;
}

export namespace AddSessionResponse {
    export type AsObject = {
        id: string,
        createdtimestamp: string,
    }
}

export class Session extends jspb.Message { 
    getId(): string;
    setId(value: string): Session;

    getCreatedtimestamp(): string;
    setCreatedtimestamp(value: string): Session;

    getLastupdatedtimestamp(): string;
    setLastupdatedtimestamp(value: string): Session;

    getLastbilledtimestamp(): string;
    setLastbilledtimestamp(value: string): Session;

    getCorrelationid(): string;
    setCorrelationid(value: string): Session;

    getOwner(): string;
    setOwner(value: string): Session;

    getRenderareaid(): string;
    setRenderareaid(value: string): Session;

    getHttpdatalink(): string;
    setHttpdatalink(value: string): Session;

    getAppid(): string;
    setAppid(value: string): Session;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Session.AsObject;
    static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Session;
    static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
    export type AsObject = {
        id: string,
        createdtimestamp: string,
        lastupdatedtimestamp: string,
        lastbilledtimestamp: string,
        correlationid: string,
        owner: string,
        renderareaid: string,
        httpdatalink: string,
        appid: string,
    }
}

export class AddSessionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AddSessionRequest;

    getRenderarea(): string;
    setRenderarea(value: string): AddSessionRequest;

    getHttpdatalink(): string;
    setHttpdatalink(value: string): AddSessionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddSessionRequest): AddSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSessionRequest;
    static deserializeBinaryFromReader(message: AddSessionRequest, reader: jspb.BinaryReader): AddSessionRequest;
}

export namespace AddSessionRequest {
    export type AsObject = {
        id: string,
        renderarea: string,
        httpdatalink: string,
    }
}

export class GetSessionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetSessionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
    static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetAssignedSessionRequest extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): GetAssignedSessionRequest;

    getAppid(): string;
    setAppid(value: string): GetAssignedSessionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssignedSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssignedSessionRequest): GetAssignedSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssignedSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssignedSessionRequest;
    static deserializeBinaryFromReader(message: GetAssignedSessionRequest, reader: jspb.BinaryReader): GetAssignedSessionRequest;
}

export namespace GetAssignedSessionRequest {
    export type AsObject = {
        owner: string,
        appid: string,
    }
}

export class GetSessionsRequest extends jspb.Message { 
    getAppid(): string;
    setAppid(value: string): GetSessionsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionsRequest): GetSessionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionsRequest;
    static deserializeBinaryFromReader(message: GetSessionsRequest, reader: jspb.BinaryReader): GetSessionsRequest;
}

export namespace GetSessionsRequest {
    export type AsObject = {
        appid: string,
    }
}
