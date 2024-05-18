import { Registry, RegistryBuilder, RegistryBuilderOptions, SchemaValidator } from '@chain-registry/workflows';
import { join } from "path";

import { assetListDefaultValuesSetter, assetListOperations, assetListPropertyRenameMap, assetListValueReplacer,chainPropertyRenameMap, registriesDir, registry } from './config';
import { camelCaseTransform, isValidIdentifierCamelized } from './utils';

const registryDir = join(registriesDir, 'full')

const options: RegistryBuilderOptions = {
  assetList: {
    camelCase: true,
    space: 2,
    propertyRenameMap: assetListPropertyRenameMap,
    defaultValuesSetter: assetListDefaultValuesSetter,
    valueReplacer: assetListValueReplacer
  },
  chain: {
    camelCase: true,
    space: 2,
    propertyRenameMap: chainPropertyRenameMap
  },
  ibcData: {
    camelCase: true,
    space: 2
  },
  ops: {
    assetList: [
      ...assetListOperations,
    ],
    chain: [ ],
    ibcData: []
  }
}

const builder = new RegistryBuilder(registry, options);

builder.build(registryDir);
builder.buildSchemas(registryDir, camelCaseTransform, isValidIdentifierCamelized);

// validate

const validator = new SchemaValidator(new Registry(registryDir), {
  allErrors: false,
  useStrict: false
});
validator.validateAllData();