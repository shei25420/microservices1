// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file proto/transitions/v1/state_transition.proto (package proto.transitions.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetStateTransitionRequest, GetStateTransitionResponse, HealthCheckRequest, HealthCheckResponse, StateTransitionRequest, StateTransitionResponse } from "./state_transition_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service proto.transitions.v1.EventLogService
 */
export const EventLogService = {
  typeName: "proto.transitions.v1.EventLogService",
  methods: {
    /**
     * @generated from rpc proto.transitions.v1.EventLogService.StateTransition
     */
    stateTransition: {
      name: "StateTransition",
      I: StateTransitionRequest,
      O: StateTransitionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc proto.transitions.v1.EventLogService.GetStateTransition
     */
    getStateTransition: {
      name: "GetStateTransition",
      I: GetStateTransitionRequest,
      O: GetStateTransitionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc proto.transitions.v1.EventLogService.HealthCheck
     */
    healthCheck: {
      name: "HealthCheck",
      I: HealthCheckRequest,
      O: HealthCheckResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

