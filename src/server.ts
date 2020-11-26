// const PROTO_PATH = __dirname + '/proto/session.proto';

// import * as protoLoader from '@grpc/proto-loader';

import 'dotenv/config';
import * as grpc from '@grpc/grpc-js';
import debug from 'debug';
import sessionHandler from './handlers/session';

/*
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const { protoDescriptor } = grpc.loadPackageDefinition(packageDefinition) as any
*/

const log = debug("SampleServer");

const port: string | number = process.env.PORT || 50051;

export const startServer = () => {
    // create a new gRPC server
    const server: grpc.Server = new grpc.Server();

    // register all the handler here...
    // @ts-ignore
    server.addService(sessionHandler.service, sessionHandler.handler);

    // define the host/port for server
    server.bindAsync(`127.0.0.1:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        log(`Server started, listening: 127.0.0.1:${port}`);
        server.start();
    });
};

startServer();

process.on("uncaughtException", (err) => {
    log(`process on uncaughtException error: ${err}`);
});

process.on("unhandledRejection", (err) => {
    log(`process on unhandledRejection error: ${err}`);
});
