import { fastify } from 'fastify';
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import prismaPlugin from "./plugin/prisma";
import routes from './connect'

export const server = fastify({
    http2: true
});

server.get('/health-check', () => {
    return {
        state: 200
    };
});

const startServer = async () => {
    await server.register(prismaPlugin)
        .register(fastifyConnectPlugin, {
            routes
        });

    return await server.listen({
        host: "localhost",
        port: 8080
    });
}

startServer().then(r => {
    console.log('Service server running successfully');
});