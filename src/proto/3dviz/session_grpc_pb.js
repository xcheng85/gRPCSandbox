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

function serialize_viz3d_GetAssignedSessionRequest(arg) {
  if (!(arg instanceof session_pb.GetAssignedSessionRequest)) {
    throw new Error('Expected argument of type viz3d.GetAssignedSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_GetAssignedSessionRequest(buffer_arg) {
  return session_pb.GetAssignedSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_viz3d_GetSessionsRequest(arg) {
  if (!(arg instanceof session_pb.GetSessionsRequest)) {
    throw new Error('Expected argument of type viz3d.GetSessionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_GetSessionsRequest(buffer_arg) {
  return session_pb.GetSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_viz3d_Session(arg) {
  if (!(arg instanceof session_pb.Session)) {
    throw new Error('Expected argument of type viz3d.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_viz3d_Session(buffer_arg) {
  return session_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}


var SessionServiceService = exports.SessionServiceService = {
  addSession: {
    path: '/viz3d.SessionService/addSession',
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
    path: '/viz3d.SessionService/getSession',
    requestStream: false,
    responseStream: false,
    requestType: session_pb.GetSessionRequest,
    responseType: session_pb.Session,
    requestSerialize: serialize_viz3d_GetSessionRequest,
    requestDeserialize: deserialize_viz3d_GetSessionRequest,
    responseSerialize: serialize_viz3d_Session,
    responseDeserialize: deserialize_viz3d_Session,
  },
  getAssignedSessions: {
    path: '/viz3d.SessionService/getAssignedSessions',
    requestStream: false,
    responseStream: true,
    requestType: session_pb.GetAssignedSessionRequest,
    responseType: session_pb.Session,
    requestSerialize: serialize_viz3d_GetAssignedSessionRequest,
    requestDeserialize: deserialize_viz3d_GetAssignedSessionRequest,
    responseSerialize: serialize_viz3d_Session,
    responseDeserialize: deserialize_viz3d_Session,
  },
  getSessions: {
    path: '/viz3d.SessionService/getSessions',
    requestStream: true,
    responseStream: true,
    requestType: session_pb.GetSessionsRequest,
    responseType: session_pb.Session,
    requestSerialize: serialize_viz3d_GetSessionsRequest,
    requestDeserialize: deserialize_viz3d_GetSessionsRequest,
    responseSerialize: serialize_viz3d_Session,
    responseDeserialize: deserialize_viz3d_Session,
  },
};

exports.SessionServiceClient = grpc.makeGenericClientConstructor(SessionServiceService);
