---
sidebar_position: 1

---

# Mustang Finance Protocol Contracts

**Network:** Saga EVM (Chain ID: 5464)  
**Deployment Date:** Latest  

## Governance

| Contract | Address | Description |
|----------|---------|-------------|
| Governance Safe | `0x92A857b519F73783E27642c0f4A5DBAc8953e66B` | 2-of-3 multisig controlling protocol parameters and receiving fees |

## Core Contracts

These contracts are shared across all collateral branches:

| Contract | Address | Description |
|----------|---------|-------------|
| MUST Stablecoin | `0xa8b56ce258a7f55327bde886b0e947ee059ca434` | Main protocol token |
| CollateralRegistry | `0xf39bdcfb55374ddb0948a28af00b6474a566ac22` | Registry for all collateral types |
| HintHelpers | `0xf2a7cab8056bcc477872b34f9be1d1d67a7d109c` | Helper contract for trove operations |
| MultiTroveGetter | `0x651d868ef9d04ca0b2a3bf2bc299b92e58aed8c3` | Batch trove data retrieval |

## Collateral Branches

### Branch 0: WETH (Wrapped Ether)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xeb41D53F14Cb9a67907f2b8b5DBc223944158cCb` | WETH token address on SagaEVM |
| AddressesRegistry | `0x58158fbb9da27fe5eb121f5e637a5886746f416f` | Branch-specific address registry |
| BorrowerOperations | `0x5092addcdfa1f74125700ae67d597b1e49314120` | Trove management operations |
| TroveManager | `0x9fcb3ba3a87357d223f117827bae8d8bbb985ab9` | Core trove management logic |
| TroveNFT | `0x3abd5c94f1f1ef448bec40e01d4af0391dd896c4` | Trove ownership NFTs |
| StabilityPool | `0x6df479f80453c4fd8561cfb7d663ae1c34de0a94` | Stability pool for liquidations |
| ActivePool | `0xabd9e344aea0ead8ceb3952f163b37197eef9e09` | Active collateral pool |
| DefaultPool | `0x3e1cd5a674f09d5b7169a04b86888e07c9dc6a1b` | Default collateral pool |
| GasPool | `0xcb65e9498d9d2eed03a83c49d918b3084795ac81` | Gas compensation pool |
| CollSurplusPool | `0x40721101f1de731f34a207f783b2a40026a65f0d` | Collateral surplus pool |
| SortedTroves | `0xd4570c6a2bd6e18ff7c8ce1341ba8f2e0154a476` | Sorted trove data structure |
| MetadataNFT | `0x42673e96954006f7b71989aea5d0566274d616c8` | NFT metadata contract |
| PriceFeed | `0x080612f74f3c823b0c7f1649136ab8a096d2576f` | WETH price feed |
| FixedAssetReader | `0x82bae1eeb3e5e01dc542d0d61bd4d043627a305c` | Fixed asset price reader |
| GasCompZapper | `0xe68eeeb004ee98b57a50af279950cf4d98fb0aa6` | Gas compensation zapper |
| LeverageZapper | `0x31a2552006b47a77c10b18fde3ac35ba2b1c09a0` | Leverage zapper contract |

### Branch 1: yETH (YieldFi ETH)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xA6F89de43315B444114258f6E6700765D08bcd56` | yETH token address on SagaEVM |
| AddressesRegistry | `0x57fe798fb0d69e7e1e80624e539a05e94f6d6d37` | Branch-specific address registry |
| BorrowerOperations | `0xf6f919bccad71bef15809f75ec46fa2b87827fd0` | Trove management operations |
| TroveManager | `0xda6c08f4d8f13ac71acedb3ed4bcab5256bd0928` | Core trove management logic |
| TroveNFT | `0x63ecb09a72d6852602f80dff41f5c1d7b88e8bb4` | Trove ownership NFTs |
| StabilityPool | `0x8fa656dd831e6a82740eb614fe6e09b509e7c4ec` | Stability pool for liquidations |
| ActivePool | `0x28bf8d53c2f98fd6a5157ad0ea4d016562712420` | Active collateral pool |
| DefaultPool | `0x812749d9611ad78074edd55c8bb7423a0d3849e1` | Default collateral pool |
| GasPool | `0x837ac0a8a523c416bf43843205372c45966bb66f` | Gas compensation pool |
| CollSurplusPool | `0x882d8e06d3389a9a1e9db5d407cdf28957605a03` | Collateral surplus pool |
| SortedTroves | `0xceea52002f3d226f0162cd8846c0ae5153fb89df` | Sorted trove data structure |
| MetadataNFT | `0x4e3c8df114b556b3df982c9c49ce9a585d6e36ab` | NFT metadata contract |
| PriceFeed | `0x5329e02140e328397b65428be28776e025d08edc` | yETH price feed |
| FixedAssetReader | `0x8446e5b215189f200c56a0c3992e5f2afc5b97ae` | Fixed asset price reader |
| GasCompZapper | `0xb8825197bcb1cdf5937a9a2dc1c568dc8870d824` | Gas compensation zapper |
| LeverageZapper | `0x2e0128f8d160455d1bd90dd7160251f2c4aeec2d` | Leverage zapper contract |

### Branch 2: tBTC (Threshold BTC)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x7cF468a019C5bf734311D10C3a429bB504CAF3Ce` | tBTC token address on SagaEVM |
| AddressesRegistry | `0x08503d385062fc141db08f95b09fce8ce3a34ac4` | Branch-specific address registry |
| BorrowerOperations | `0x95db55721754afb448fc480267a8143785a6fc29` | Trove management operations |
| TroveManager | `0xd5fd443357956a40f3808d296839502b5db7b45a` | Core trove management logic |
| TroveNFT | `0xcbeeeea1e5de468196d398f1508dc481bc2337a3` | Trove ownership NFTs |
| StabilityPool | `0x6f4a647699bfcb85501946f429e2c8d9ac625774` | Stability pool for liquidations |
| ActivePool | `0xf94cf42e4ad9c49854a0009e6eac8282be868ca1` | Active collateral pool |
| DefaultPool | `0x0270691db7849ead9908a665fb3cc8f2160f8c71` | Default collateral pool |
| GasPool | `0xcb32df9b0bf6cba75893c6fdcff0856eb10007cb` | Gas compensation pool |
| CollSurplusPool | `0xb5b890b1b12d9a0419931ad613be65f5fe5c7807` | Collateral surplus pool |
| SortedTroves | `0xc169c5258b404b1c0c5edc5f11302147180e91c5` | Sorted trove data structure |
| MetadataNFT | `0x3aec73c5902e42b0e626a77a6b409199f2867431` | NFT metadata contract |
| PriceFeed | `0x2737550dd3d1ae3f3b0461947d413497f1712240` | tBTC price feed |
| FixedAssetReader | `0xe7cd2f6edbb2e31c1c556ec292837b3deb45bf54` | Fixed asset price reader |
| GasCompZapper | `0x072fc09f063a95b0efae9054203df7a1cc9ed1a6` | Gas compensation zapper |
| LeverageZapper | `0xcc17aaa404d76358b84a414735f0d7eda59f6ad8` | Leverage zapper contract |

### Branch 3: SAGA

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xA19377761FED745723B90993988E04d641c2CfFE` | SAGA token address on SagaEVM |
| Wrapped Token | `0xaa5e2ea42f0a9c3b43f2b7d26eaa2ba17ae41dac` | Wrapped SAGA token contract |
| AddressesRegistry | `0x1b6b326655f2d03953ed931948475b3fcf0d0fb2` | Branch-specific address registry |
| BorrowerOperations | `0x0bb7c14d34aa27741790c44835bd12cba8d2d1d2` | Trove management operations |
| TroveManager | `0x9d0c4b508089c8466e1569c95811f9171da21f56` | Core trove management logic |
| TroveNFT | `0xea2d1d947038131f029cb0e4fdee147214461252` | Trove ownership NFTs |
| StabilityPool | `0x790faf0c691f5fb3ce717c50c100a5f47ebe334e` | Stability pool for liquidations |
| ActivePool | `0x9f98b8b55f94b617a9a96cc778d8d2ffabd5a746` | Active collateral pool |
| DefaultPool | `0xf490982d6e3735f908a999eb00f3e31ac0a2a3ea` | Default collateral pool |
| GasPool | `0x5a6f24b6a74a139cfe4110a5f1b0564c7b2b5480` | Gas compensation pool |
| CollSurplusPool | `0x50c7afece49b0a88d90425f081a10d1cadd55e88` | Collateral surplus pool |
| SortedTroves | `0x05c8742fa874e2080cb48c94a6bf03793f26c685` | Sorted trove data structure |
| MetadataNFT | `0x6dc77ecbef17e25480f66fa95714534d5c505f72` | NFT metadata contract |
| PriceFeed | `0x93a80cd6de30d096e391d96dddc9c7d078091f36` | SAGA price feed |
| FixedAssetReader | `0x2302ad2efa0a524b0ff0e6be4fe521a8c469d50b` | Fixed asset price reader |
| WrappedTokenZapper | `0x7dc35c44f317125a4e10f8b814989e45886731ad` | Wrapped token zapper contract |
| LeverageZapper | `0x7dc35c44f317125a4e10f8b814989e45886731ad` | Leverage zapper contract |

### Branch 4: stATOM (Stride Staked ATOM)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xDaF9d9032b5d5C92528d6aFf6a215514B7c21056` | stATOM token address on SagaEVM |
| Wrapped Token | `0x32604f9ea6c739d0c56b2d01e07a57c7a05ff007` | Wrapped stATOM token contract |
| AddressesRegistry | `0xf671dd2de7a19a49e90f5df1cfea7f921a0f0ae2` | Branch-specific address registry |
| BorrowerOperations | `0x2ac8eb0d574e137e21e8cf313e23bf4b6078bcf4` | Trove management operations |
| TroveManager | `0x2300966646832a703c6bb0194eb900a35703125c` | Core trove management logic |
| TroveNFT | `0x3646e4f920f27d722fff56cb427ea2e541ba5eb1` | Trove ownership NFTs |
| StabilityPool | `0x0be254f7ec628fc5aec0b6faab2a7dc1b9aafc74` | Stability pool for liquidations |
| ActivePool | `0x345a2515860ce84f6966a214eea786eff628c163` | Active collateral pool |
| DefaultPool | `0xb5eb128ca42f5586950fad8bb3eb804e0cff251f` | Default collateral pool |
| GasPool | `0xf65557393d056d2450ef1bb5671fa54d171c0f92` | Gas compensation pool |
| CollSurplusPool | `0xa0b34f50f1926d15cab09b4b975cca0a3442de04` | Collateral surplus pool |
| SortedTroves | `0x0d9bf6e3eb3bb6fadefe55ec3294066c8d3431c5` | Sorted trove data structure |
| MetadataNFT | `0xebafae7620de2385ccc81111a73f59a0eccf818a` | NFT metadata contract |
| PriceFeed | `0xb565638e0ad6904a0eb06718a5da404818fa9a0a` | stATOM price feed |
| FixedAssetReader | `0x43ece357ea9acf2e5b3e1f2357a3b80fe3ffb016` | Fixed asset price reader |
| WrappedTokenZapper | `0xa29ed354b419c0c7f82665c6384cc2eb9cabb7f4` | Wrapped token zapper contract |
| LeverageZapper | `0xa29ed354b419c0c7f82665c6384cc2eb9cabb7f4` | Leverage zapper contract |

### Branch 5: KING

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x58d9fbBc6037dedfBA99cAfA28e4C371b795ad97` | KING token address on SagaEVM |
| AddressesRegistry | `0x9cd90d60fa352ca30978b53d57f9f1b2e1b2f3e2` | Branch-specific address registry |
| BorrowerOperations | `0x6cc01367544e117c092a349cc5f8e52286c2df93` | Trove management operations |
| TroveManager | `0x2854e8d68cb4cf17980db0756e2b22b7c9b0bea5` | Core trove management logic |
| TroveNFT | `0xbcc575a007f8814fd4a029208004884a40dc1370` | Trove ownership NFTs |
| StabilityPool | `0xe83317567beef3967ab60a062e8327918e7ced48` | Stability pool for liquidations |
| ActivePool | `0xd874e6b1e259d0cf948928b367cfae2678b43ab7` | Active collateral pool |
| DefaultPool | `0x2dba20fcbfca9b632aeedb772f368e0da7a46ffe` | Default collateral pool |
| GasPool | `0x49381b9b5f219beace8287c5d3a57aa07eac8ca2` | Gas compensation pool |
| CollSurplusPool | `0x9abcc04e6392ee6a3131ac873c55fe8adb07ba96` | Collateral surplus pool |
| SortedTroves | `0x47f65ef3ebe52fee1ba778095ca5ee67dd9f20dc` | Sorted trove data structure |
| MetadataNFT | `0x6182f3bfb6e1b0e326c72f87f95c65aa4fe8ecbf` | NFT metadata contract |
| PriceFeed | `0x8e7f799324d888aa94aaa0179370294a496f31fc` | KING price feed |
| FixedAssetReader | `0x073e24bd3ff224af1a98ffcc4a0412e77e03aca9` | Fixed asset price reader |
| GasCompZapper | `0x5c5f1b16f6363460ae95834880f4149071020b30` | Gas compensation zapper |
| LeverageZapper | `0x1b2443df05c8aca7301825d4a1fbcd0d7ac09b14` | Leverage zapper contract |

### Branch 6: yUSD (YieldFi USD)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x839e7e610108Cf3DCc9b40329db33b6E6bc9baCE` | yUSD token address on SagaEVM |
| AddressesRegistry | `0x4a7fd74d6edf1530d36b8ff781e777e96193ba08` | Branch-specific address registry |
| BorrowerOperations | `0xe1e3fc853efb78256d0e617206eea35d06548a16` | Trove management operations |
| TroveManager | `0xec729a2871e084e392744570854829cebcee16f3` | Core trove management logic |
| TroveNFT | `0x28b633ddc21933a8fed23ee14fd015cf5e24d6ce` | Trove ownership NFTs |
| StabilityPool | `0x71a406d5d18d3712daf57a6b165850c455822e5f` | Stability pool for liquidations |
| ActivePool | `0xcde75337ce6c94b247fe76753ae9263caa5907cb` | Active collateral pool |
| DefaultPool | `0x1d3cbde978b1e462c2dc7de8d3c8ace655b69e36` | Default collateral pool |
| GasPool | `0x36f12d021b6334848c466e77b14bac7dc1f51aa3` | Gas compensation pool |
| CollSurplusPool | `0xd06868531c94ae1ebb6e3637c0f3b33f1782e573` | Collateral surplus pool |
| SortedTroves | `0x54861f1cf3f53932b020d8649d8b3c5a0dbc7c69` | Sorted trove data structure |
| MetadataNFT | `0x72fa15d8f87c81acc03304899867f90363f42164` | NFT metadata contract |
| PriceFeed | `0x224b80725fff00fbf06336a93ba94de7b5f88022` | yUSD price feed |
| FixedAssetReader | `0xc8764377e19b0a3995cb79f0794fb52df249a587` | Fixed asset price reader |
| GasCompZapper | `0x9544a342bbd0970e89315ab0b202c7ede6f7e0db` | Gas compensation zapper |
| LeverageZapper | `0xb9cecd6801cfcabe477a9968d0dd389b42a957af` | Leverage zapper contract |

## Notes

- All addresses are from the latest deployment on Saga EVM (Chain ID: 5464).
- Each collateral branch operates independently with its own set of contracts, isolating risks.
- Core contracts (MUST Stablecoin, CollateralRegistry, HintHelpers, MultiTroveGetter) are shared across all branches.
- Token Address shows the actual collateral token address registered in the Collateral Registry for each branch. Some tokens may be wrapped while others are native, but this address represents the exact token used by each branch.
- Price feeds provide real-time pricing data for each collateral type with several safe-guards built in.
- **New Contracts**: This deployment includes several new contract types:
  - **FixedAssetReader**: Provides fixed asset price reading functionality across all branches
  - **GasCompZapper**: Gas compensation zapper contract (available in most branches)
  - **WrappedTokenZapper**: Token wrapping/unwrapping functionality (available for SAGA and stATOM branches)
  - **Wrapped Token**: ERC20 wrapper contracts for native tokens (SAGA and stATOM)