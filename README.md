# chain-registry

<p align="center" width="100%">
    <img height="90" src="https://user-images.githubusercontent.com/545047/190171475-b416f99e-2831-4786-9ba3-a7ff4d95b0d3.svg" />
</p>

<p align="center" width="100%">
  
  <a href="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml">
    <img height="20" src="https://github.com/cosmology-tech/chain-registry/actions/workflows/run-tests.yml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/chain-registry/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/chain-registry"><img height="20" src="https://img.shields.io/npm/dt/chain-registry"></a>
   <a href="https://www.npmjs.com/package/chain-registry"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/chain-registry?filename=v2%2Fpackages%2Fchain-registry%2Fpackage.json"></a>
</p>

The JSON Store for the [chain registry](https://github.com/cosmology-tech/chain-registry), which is the npm package for the Official Cosmos [chain registry](https://github.com/cosmos/chain-registry)

```
npm install chain-registry
```

A unified store of chains info, assets, asset lists, and IBC channels for the Cosmos ecosystem. Get everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.


## Registries

#### [@chain-registry/minimal](registries/minimal)

A minimal chain registry, using `camelCase` for properties.

#### [@chain-registry/full](registries/full)

The full chain registry, using `camelCase` for properties.

#### [@chain-registry/original](registries/original)

The original chain registry, using original (unconventional) casing for properties.

## Developing

Checkout the repository run yarn to initialize the workspace:

```sh
# Clone the repo.
git clone https://github.com/chain-registry/chain-registry
yarn
```
### Building

```sh
yarn build
```

### Updating Submodule Data

Use the following Makefile commands to update the data in the submodules. These commands will ensure that your submodules are synchronized with their respective remote repositories.

- **update**: Updates the submodule to the latest commits of the `cosmos/chain-registry` repository. This should be used to pull the most current production data into your local environment.

```
make update
```

## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
