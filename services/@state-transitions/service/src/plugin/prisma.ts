import fp from 'fastify-plugin'
import { FastifyPluginAsync } from "fastify";
import { PrismaClient } from "@state-transitions/database"

declare module "fastify" {
    interface FastifyInstance {
        prisma: PrismaClient
    }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server) => {
    const prisma = new PrismaClient();
    try {
        await prisma.$connect();
    } catch (e) {
        server.log.warn('Not connected to database');
    }

    server.decorate('prisma', prisma);
    // @ts-ignore
    server.addHook('onClose', async (server, done) => {
        server.log.info('shutting down prisma connection');
        await prisma.$disconnect();
        done();
    });
});

export default prismaPlugin;