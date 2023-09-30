import { Timestamp } from '@bufbuild/protobuf'
import { ConnectRouter } from "@bufbuild/connect";
import {
    EventLogService,
    GetStateTransitionRequest, HealthCheckRequest,
    HealthCheckResponse_ServingStatus,
    ResponseStatus,
    StateTransitionRequest,
} from "@state-transitions/definition";
import { server } from './'

export default (router: ConnectRouter) => {
    router.service(EventLogService, {
        async stateTransition(request: StateTransitionRequest) {
            await server.prisma.stateTransition.create({
                data: {
                    ...request,
                    timestamp: request.timestamp?.toDate() || Date.now().toString()
                }
            })
            return {
                status: ResponseStatus.ACCEPTED_UNSPECIFIED
            };
        },
        async getStateTransition(request: GetStateTransitionRequest) {
            const transition = await server.prisma.stateTransition.findFirstOrThrow({
                where: {
                    ...request
                }
            });

            return {
                ...transition,
                timestamp: Timestamp.fromDate(transition.timestamp)
            }
        },
        healthCheck(request: HealthCheckRequest) {
            return {
                status: HealthCheckResponse_ServingStatus.SERVING
            };
        }
    })
};