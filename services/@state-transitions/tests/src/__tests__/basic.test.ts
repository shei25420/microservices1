import { beforeAll, afterAll, describe, expect, it } from "vitest";
import { server } from "@state-transitions/service"
import { client } from '@state-transitions/client'
import {
    FastifyBaseLogger,
    FastifyInstance,
    FastifyTypeProviderDefault,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression
} from "fastify";
import * as http2 from "http2";

describe("[Test] @state-transition/service", () => {
    let fastify: FastifyInstance<http2.Http2Server, RawRequestDefaultExpression<http2.Http2Server>, RawReplyDefaultExpression<http2.Http2Server>, FastifyBaseLogger, FastifyTypeProviderDefault>;

    beforeAll(async () => {
       fastify = await server;
       await fastify.ready();
    });

    afterAll(async () => {
        fastify.close(() => {
            console.log('server closed');
        });
    });

    describe('client.healthCheck(...)', () => {
        it('should get correct response from client RPC method', async () => {
            const response = await client.healthCheck({});
            expect(response).toEqual({
                status: 1
            });
        });
    });
});