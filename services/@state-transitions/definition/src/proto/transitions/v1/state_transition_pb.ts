// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file proto/transitions/v1/state_transition.proto (package proto.transitions.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum proto.transitions.v1.ResponseStatus
 */
export enum ResponseStatus {
  /**
   * @generated from enum value: RESPONSE_STATUS_ACCEPTED_UNSPECIFIED = 0;
   */
  ACCEPTED_UNSPECIFIED = 0,

  /**
   * @generated from enum value: RESPONSE_STATUS_REJECTED = 1;
   */
  REJECTED = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(ResponseStatus)
proto3.util.setEnumType(ResponseStatus, "proto.transitions.v1.ResponseStatus", [
  { no: 0, name: "RESPONSE_STATUS_ACCEPTED_UNSPECIFIED" },
  { no: 1, name: "RESPONSE_STATUS_REJECTED" },
]);

/**
 * @generated from message proto.transitions.v1.StateTransitionRequest
 */
export class StateTransitionRequest extends Message<StateTransitionRequest> {
  /**
   * @generated from field: string user = 1;
   */
  user = "";

  /**
   * @generated from field: string block = 2;
   */
  block = "";

  /**
   * @generated from field: uint32 version = 3;
   */
  version = 0;

  /**
   * @generated from field: string transition = 4;
   */
  transition = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 5;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<StateTransitionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.transitions.v1.StateTransitionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "transition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateTransitionRequest {
    return new StateTransitionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateTransitionRequest {
    return new StateTransitionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateTransitionRequest {
    return new StateTransitionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StateTransitionRequest | PlainMessage<StateTransitionRequest> | undefined, b: StateTransitionRequest | PlainMessage<StateTransitionRequest> | undefined): boolean {
    return proto3.util.equals(StateTransitionRequest, a, b);
  }
}

/**
 * @generated from message proto.transitions.v1.StateTransitionResponse
 */
export class StateTransitionResponse extends Message<StateTransitionResponse> {
  /**
   * @generated from field: proto.transitions.v1.ResponseStatus status = 1;
   */
  status = ResponseStatus.ACCEPTED_UNSPECIFIED;

  constructor(data?: PartialMessage<StateTransitionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.transitions.v1.StateTransitionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(ResponseStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateTransitionResponse {
    return new StateTransitionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateTransitionResponse {
    return new StateTransitionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateTransitionResponse {
    return new StateTransitionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StateTransitionResponse | PlainMessage<StateTransitionResponse> | undefined, b: StateTransitionResponse | PlainMessage<StateTransitionResponse> | undefined): boolean {
    return proto3.util.equals(StateTransitionResponse, a, b);
  }
}

/**
 * @generated from message proto.transitions.v1.GetStateTransitionRequest
 */
export class GetStateTransitionRequest extends Message<GetStateTransitionRequest> {
  /**
   * @generated from field: string user = 1;
   */
  user = "";

  /**
   * @generated from field: string block = 2;
   */
  block = "";

  /**
   * @generated from field: uint32 version = 3;
   */
  version = 0;

  constructor(data?: PartialMessage<GetStateTransitionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.transitions.v1.GetStateTransitionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStateTransitionRequest {
    return new GetStateTransitionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStateTransitionRequest {
    return new GetStateTransitionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStateTransitionRequest {
    return new GetStateTransitionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetStateTransitionRequest | PlainMessage<GetStateTransitionRequest> | undefined, b: GetStateTransitionRequest | PlainMessage<GetStateTransitionRequest> | undefined): boolean {
    return proto3.util.equals(GetStateTransitionRequest, a, b);
  }
}

/**
 * @generated from message proto.transitions.v1.GetStateTransitionResponse
 */
export class GetStateTransitionResponse extends Message<GetStateTransitionResponse> {
  /**
   * @generated from field: string user = 1;
   */
  user = "";

  /**
   * @generated from field: string block = 2;
   */
  block = "";

  /**
   * @generated from field: uint32 version = 3;
   */
  version = 0;

  /**
   * @generated from field: string transition = 4;
   */
  transition = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 5;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<GetStateTransitionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.transitions.v1.GetStateTransitionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "transition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetStateTransitionResponse {
    return new GetStateTransitionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetStateTransitionResponse {
    return new GetStateTransitionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetStateTransitionResponse {
    return new GetStateTransitionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetStateTransitionResponse | PlainMessage<GetStateTransitionResponse> | undefined, b: GetStateTransitionResponse | PlainMessage<GetStateTransitionResponse> | undefined): boolean {
    return proto3.util.equals(GetStateTransitionResponse, a, b);
  }
}

/**
 * @generated from message proto.transitions.v1.HealthCheckRequest
 */
export class HealthCheckRequest extends Message<HealthCheckRequest> {
  constructor(data?: PartialMessage<HealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.transitions.v1.HealthCheckRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined, b: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined): boolean {
    return proto3.util.equals(HealthCheckRequest, a, b);
  }
}

/**
 * @generated from message proto.transitions.v1.HealthCheckResponse
 */
export class HealthCheckResponse extends Message<HealthCheckResponse> {
  /**
   * @generated from field: proto.transitions.v1.HealthCheckResponse.ServingStatus status = 1;
   */
  status = HealthCheckResponse_ServingStatus.UNKNOWN_UNSPECIFIED;

  constructor(data?: PartialMessage<HealthCheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.transitions.v1.HealthCheckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(HealthCheckResponse_ServingStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined, b: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined): boolean {
    return proto3.util.equals(HealthCheckResponse, a, b);
  }
}

/**
 * @generated from enum proto.transitions.v1.HealthCheckResponse.ServingStatus
 */
export enum HealthCheckResponse_ServingStatus {
  /**
   * @generated from enum value: SERVING_STATUS_UNKNOWN_UNSPECIFIED = 0;
   */
  UNKNOWN_UNSPECIFIED = 0,

  /**
   * @generated from enum value: SERVING_STATUS_SERVING = 1;
   */
  SERVING = 1,

  /**
   * @generated from enum value: SERVING_STATUS_NOT_SERVING = 2;
   */
  NOT_SERVING = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(HealthCheckResponse_ServingStatus)
proto3.util.setEnumType(HealthCheckResponse_ServingStatus, "proto.transitions.v1.HealthCheckResponse.ServingStatus", [
  { no: 0, name: "SERVING_STATUS_UNKNOWN_UNSPECIFIED" },
  { no: 1, name: "SERVING_STATUS_SERVING" },
  { no: 2, name: "SERVING_STATUS_NOT_SERVING" },
]);

