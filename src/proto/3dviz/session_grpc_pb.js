// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var session_pb = require('./session_pb.js');

function serialize_viz3d_AddSessionRequest(arg) {
  if (!(arg instanceof session_pb.AddSessionRequest)) {
    throw new Error('Expected argument of type viz3d.AddSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_AddSessionRequest(buffer_arg) {
  return session_pb.AddSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_viz3d_AddSessionResponse(arg) {
  if (!(arg instanceof session_pb.AddSessionResponse)) {
    throw new Error('Expected argument of type viz3d.AddSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_AddSessionResponse(buffer_arg) {
  return session_pb.AddSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_viz3d_GetSessionRequest(arg) {
  if (!(arg instanceof session_pb.GetSessionRequest)) {
    throw new Error('Expected argument of type viz3d.GetSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_GetSessionRequest(buffer_arg) {
  return session_pb.GetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_viz3d_GetSessionResponse(arg) {
  if (!(arg instanceof session_pb.GetSessionResponse)) {
    throw new Error('Expected argument of type viz3d.GetSessionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_GetSessionResponse(buffer_arg) {
  return session_pb.GetSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SessionService = exports.SessionService = {
  addSession: {
    path: '/viz3d.Session/addSession',
    requestStream: false,
    responseStream: false,
    requestType: session_pb.AddSessionRequest,
    responseType: session_pb.AddSessionResponse,
    requestSerialize: serialize_viz3d_AddSessionRequest,
    requestDeserialize: deserialize_viz3d_AddSessionRequest,
    responseSerialize: serialize_viz3d_AddSessionResponse,
    responseDeserialize: deserialize_viz3d_AddSessionResponse,
  },
  getSession: {
    path: '/viz3d.Session/getSession',
    requestStream: false,
    responseStream: false,
    requestType: session_pb.GetSessionRequest,
    responseType: session_pb.GetSessionResponse,
    requestSerialize: serialize_viz3d_GetSessionRequest,
    requestDeserialize: deserialize_viz3d_GetSessionRequest,
    responseSerialize: serialize_viz3d_GetSessionResponse,
    responseDeserialize: deserialize_viz3d_GetSessionResponse,
  },
};

exports.SessionClient = grpc.makeGenericClientConstructor(SessionService);
