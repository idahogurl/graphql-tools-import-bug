const { loadTypedefsSync, OPERATION_KINDS } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { print } = require('graphql');
const allOptions = {
    loaders: [
      new GraphQLFileLoader(),
    ],
    filterKinds: OPERATION_KINDS,
    sort: false,
    forceGraphQLImport: true,
    useSchemaDefinition: false,
  };

  const results = loadTypedefsSync(`${__dirname}/index.schema.graphql`, allOptions);
  const mergedDocuments = mergeTypeDefs(results.map((r) => r.document), allOptions);
  if (typeof mergedDocuments === 'string') {
    console.log(mergedDocuments);
  }
  if (mergedDocuments) {
    console.log(print(mergedDocuments));
  }
  console.log('')