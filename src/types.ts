import {
  GraphQLType,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

export interface GrpcGraphqlSchemaConfiguration {
  endpoint: string;
  protoFilePath: string;
  serviceName: string;
  packageName: string;
}

export interface TypeMapping {
  [key: string]: GraphQLType;
}

export const GRPC_GQL_TYPE_MAPPING: TypeMapping = {
  int32: GraphQLInt,
  int64: GraphQLFloat, // TODO: https://github.com/graphql/graphql-js/issues/292
  float: GraphQLFloat,
  double: GraphQLFloat,
  string: GraphQLString,
};

export const typeDefinitionCache: TypeMapping = {
  ServerStatus: new GraphQLObjectType({
    name: 'ServerStatus',
    fields: () => ({
      status: {
        type: GraphQLString,
      },
    }),
  }),
};
