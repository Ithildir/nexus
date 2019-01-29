/**
 * This file was automatically generated by Nexus 0.7.0-alpha.2
 * Do not make changes to this file directly
 */

import * as t from "./typeDefs"
declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  PatchSize: "LARGE" | "SMALL"
}

export interface NexusGenRootTypes {
  Boolean: boolean;
  Float: number;
  ID: string;
  Int: number;
  Launch: t.Launch;
  LaunchConnection: { // root type
    cursor?: string | null; // String
    hasMore?: boolean | null; // Boolean
    launches?: Array<NexusGenRootTypes['Launch'] | null> | null; // [Launch]
  }
  Mission: t.Mission;
  Mutation: {};
  Query: {};
  Rocket: t.Rocket;
  String: string;
  TripUpdateResponse: { // root type
    launches?: NexusGenRootTypes['Launch'][] | null; // [Launch!]
    message?: string | null; // String
    success?: boolean | null; // Boolean
  }
  User: { // root type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenFieldTypes {
  Launch: { // field return type
    id: string | null; // ID
    isBooked: boolean | null; // Boolean
    mission: NexusGenRootTypes['Mission'] | null; // Mission
    rocket: NexusGenRootTypes['Rocket'] | null; // Rocket
    site: string | null; // String
  }
  LaunchConnection: { // field return type
    cursor: string | null; // String
    hasMore: boolean | null; // Boolean
    launches: Array<NexusGenRootTypes['Launch'] | null> | null; // [Launch]
  }
  Mission: { // field return type
    missionPatch: string | null; // String
    name: string | null; // String
  }
  Mutation: { // field return type
    bookTrips: NexusGenRootTypes['TripUpdateResponse'] | null; // TripUpdateResponse
    cancelTrip: NexusGenRootTypes['TripUpdateResponse'] | null; // TripUpdateResponse
    login: string | null; // String
  }
  Query: { // field return type
    launch: NexusGenRootTypes['Launch'] | null; // Launch
    launches: NexusGenRootTypes['LaunchConnection'] | null; // LaunchConnection
    me: NexusGenRootTypes['User'] | null; // User
  }
  Rocket: { // field return type
    id: string | null; // ID
    name: string | null; // String
    type: string | null; // String
  }
  TripUpdateResponse: { // field return type
    launches: NexusGenRootTypes['Launch'][] | null; // [Launch!]
    message: string | null; // String
    success: boolean | null; // Boolean
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // ID
    trips: NexusGenRootTypes['Launch'][] | null; // [Launch!]
  }
}

export interface NexusGenArgTypes {
  Mission: {
    missionPatch: { // args
      size?: NexusGenEnums['PatchSize'] | null; // PatchSize
    }
  }
  Mutation: {
    bookTrips: { // args
      launchIds: string[]; // [ID!]!
    }
    cancelTrip: { // args
      launchId: string; // ID!
    }
    login: { // args
      email?: string | null; // String
    }
  }
  Query: {
    launch: { // args
      count?: number | null; // Int
      id: string; // ID!
    }
    launches: { // args
      after?: string | null; // String
      pageSize?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Launch" | "LaunchConnection" | "Mission" | "Mutation" | "Query" | "Rocket" | "TripUpdateResponse" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "PatchSize";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: t.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['enumNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

export type Gen = NexusGenTypes;