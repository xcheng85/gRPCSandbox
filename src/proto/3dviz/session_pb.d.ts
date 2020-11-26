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

export class GetSessionResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GetSessionResponse;

    getCreatedtimestamp(): string;
    setCreatedtimestamp(value: string): GetSessionResponse;

    getLastupdatedtimestamp(): string;
    setLastupdatedtimestamp(value: string): GetSessionResponse;

    getLastbilledtimestamp(): string;
    setLastbilledtimestamp(value: string): GetSessionResponse;

    getCorrelationid(): string;
    setCorrelationid(value: string): GetSessionResponse;

    getOwner(): string;
    setOwner(value: string): GetSessionResponse;

    getRenderareaid(): string;
    setRenderareaid(value: string): GetSessionResponse;

    getHttpdatalink(): string;
    setHttpdatalink(value: string): GetSessionResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSessionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSessionResponse): GetSessionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSessionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSessionResponse;
    static deserializeBinaryFromReader(message: GetSessionResponse, reader: jspb.BinaryReader): GetSessionResponse;
}

export namespace GetSessionResponse {
    export type AsObject = {
        id: string,
        createdtimestamp: string,
        lastupdatedtimestamp: string,
        lastbilledtimestamp: string,
        correlationid: string,
        owner: string,
        renderareaid: string,
        httpdatalink: string,
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
