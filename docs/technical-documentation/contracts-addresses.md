---
sidebar_position: 1

---

# Mustang Finance Protocol Contracts

**Network:** Saga EVM (Chain ID: 5464)  
**Deployment Date:** Latest  

## Core Contracts

These contracts are shared across all collateral branches:

| Contract | Address | Description |
|----------|---------|-------------|
| MUST Stablecoin | `0xf4e4f7b7a09c50d3cc710151536b88b48422f48b` | Main protocol token |
| CollateralRegistry | `0x04920e4abbf8a0173f2545f83bfb62beb98aaadd` | Registry for all collateral types |
| HintHelpers | `0xece3fa12e6bcbc34291060febf0428855ceb805b` | Helper contract for trove operations |
| MultiTroveGetter | `0x0213a091fdba1e8a67a37f5fbb47f7c93cb61c46` | Batch trove data retrieval |

## Collateral Branches

### Branch 0: WETH (Wrapped Ether)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xeb41D53F14Cb9a67907f2b8b5DBc223944158cCb` | WETH token address on SagaEVM |
| AddressesRegistry | `0x4c2d21407e917c290f4336d5bc1db6df0b5f18f1` | Branch-specific address registry |
| BorrowerOperations | `0xd1abdcdaebce8fe6d8c9da3c557cad2d0d0f0dd7` | Trove management operations |
| TroveManager | `0x13e9927901c3cec3234172addf47581077ccba0b` | Core trove management logic |
| TroveNFT | `0x90955e36c36568a2a6ca42bfd22a489a3f64d85b` | Trove ownership NFTs |
| StabilityPool | `0xde6dc2fb3a26a791b0f9cfa83166be729860b0ee` | Stability pool for liquidations |
| ActivePool | `0xcb0f20f6cc2d72f635af6fab739c87ee2e30462c` | Active collateral pool |
| DefaultPool | `0xc1ae9987367eb1cad327e7633dca02b511bd76a7` | Default collateral pool |
| GasPool | `0x22f05c86344bb7f2580e48b33aa6e5d141e47292` | Gas compensation pool |
| CollSurplusPool | `0x4d69f1a8e6878999fcb1f02e8ddd343ce0617fe0` | Collateral surplus pool |
| SortedTroves | `0x0140f36f34f497b1bfd4cdce9a7349719c96523b` | Sorted trove data structure |
| FixedAssetReader | `0x8c4405d48b4330f59c43e84ec401bf03723f1d1c` | Fixed asset reader contract |
| MetadataNFT | `0x094b784f50f3692cd69c9315492f1c31e64b59b1` | NFT metadata contract |
| GasCompZapper | `0xeb2c4fa3240a8f45933417b258fcb544eb70c0c2` | Gas compensation zapper |
| WETHPriceFeed | `0x633530744e745f483beb3b70f7fdfb1249aee7df` | WETH price feed |

### Branch 1: yETH (YieldFi ETH)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xA6F89de43315B444114258f6E6700765D08bcd56` | yETH token address on SagaEVM |
| AddressesRegistry | `0x7d63ab7531d8b1190a5b89ae1a38b0088e27dbdb` | Branch-specific address registry |
| BorrowerOperations | `0x70e1f01ce47c966d3bd98aed927c5ed0d54efb6a` | Trove management operations |
| TroveManager | `0xfe474264e7d65005719bac266190db1f8ba8ed64` | Core trove management logic |
| TroveNFT | `0x2961f681424ed5bced819ecad73e6e02378882f9` | Trove ownership NFTs |
| StabilityPool | `0xa999817b8371b504ea9c13d3fd4d10ae45db7d86` | Stability pool for liquidations |
| ActivePool | `0xd0e0f75a53ae486eb124c6e181b0252c805f26c0` | Active collateral pool |
| DefaultPool | `0x4da6793c24e54b8b6ee0e20712c6ccd72b45c2d9` | Default collateral pool |
| GasPool | `0xcd2da7ccf448896c818035c7a1b2201d61d02699` | Gas compensation pool |
| CollSurplusPool | `0x2d843efd6f39ed2c6db88a8cabedf6de58db9dc6` | Collateral surplus pool |
| SortedTroves | `0xe1e4eedbfb60222727ea148c9bde2193b5da6675` | Sorted trove data structure |
| FixedAssetReader | `0x0cf8bf0d3ccb014fe757465c303588275250700e` | Fixed asset reader contract |
| MetadataNFT | `0xc16ba743c88b79be5d3122068b28c05612e0f4e7` | NFT metadata contract |
| GasCompZapper | `0x109a5e350c767ea393e94071af0ebf2cb22ff344` | Gas compensation zapper |
| yETHPriceFeed | `0xc0ba91e9b39d44040534de5e2834f19ce6ad5f4c` | yETH price feed |

### Branch 2: tBTC (Threshold BTC)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xa740E6758e309840ffFfe58f749F018386A3b70b` | tBTC token address on SagaEVM |
| AddressesRegistry | `0x54b4dfd03181504672a0ba775c349e1d31cd9649` | Branch-specific address registry |
| BorrowerOperations | `0x677a5c863490dd6b674b92410c69688135f2d9e1` | Trove management operations |
| TroveManager | `0x0a66df058fb462458a10f01393d6f2118104fe8a` | Core trove management logic |
| TroveNFT | `0x2f1f3efc79c4a7def428c0cd5b22f0e3586593b7` | Trove ownership NFTs |
| StabilityPool | `0x50a1b3b63b27219ebb363a5ee4d9e24ef0fc23b1` | Stability pool for liquidations |
| ActivePool | `0x9e3bb586b8f410210835fd132c78ebc156d9fca0` | Active collateral pool |
| DefaultPool | `0xa1dbe43b1220bc9f3367c29ed1003a7c01aec7dc` | Default collateral pool |
| GasPool | `0x4d16679409d4dae2b71dc9d4eb22333a2b8b92cb` | Gas compensation pool |
| CollSurplusPool | `0x02472d413251750db1bd6bbd1b9e84d419a4e76c` | Collateral surplus pool |
| SortedTroves | `0x27de1849a74f868d57f960546acc76eabb59b6f1` | Sorted trove data structure |
| FixedAssetReader | `0xab149fd0bdc4f787ad3e4d6a233d3b39dfb9cd24` | Fixed asset reader contract |
| MetadataNFT | `0x99aaf05a6fc91592b5bbd344f8c2e76df1a61b15` | NFT metadata contract |
| GasCompZapper | `0x0f9375c6819018d2e1433a7e65e16d914b989c24` | Gas compensation zapper |
| TBTCPriceFeed | `0x41a6323e7d7469b555c89b8aba301ac42432f9e4` | tBTC price feed |

### Branch 3: SAGA

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xA19377761FED745723B90993988E04d641c2CfFE` | SAGA token address on SagaEVM |
| AddressesRegistry | `0xce85847bd75f9f126e3b3efdc987c895a48614b5` | Branch-specific address registry |
| BorrowerOperations | `0xb349f0225752380d0a1b6463799bf8f099b4e11e` | Trove management operations |
| TroveManager | `0x4eafce7e6054bce0868678802ec61f9ab075ca1a` | Core trove management logic |
| TroveNFT | `0xd594e7961f64c49d1eb01321f7c57509e4b97169` | Trove ownership NFTs |
| StabilityPool | `0x638e183dcf7913374addc1330d0c020ca9459c11` | Stability pool for liquidations |
| ActivePool | `0x30cb9e6cdcc749cf5805deb4f209cc4b95e4fbea` | Active collateral pool |
| DefaultPool | `0x70f00a209e2a30b363b396357a13a0b7bb14e1b4` | Default collateral pool |
| GasPool | `0xab8d9e04b99d6b5055137e7be7e30aa2d3f1a0f7` | Gas compensation pool |
| CollSurplusPool | `0x2ad2fa004ad1280a48691e2a8d50fc295bda5fad` | Collateral surplus pool |
| SortedTroves | `0xd11efdd6f4811e5c67b8d0c9978606e097930bca` | Sorted trove data structure |
| FixedAssetReader | `0x780eeb3ae01f2bac324a4797734a9f4df35b843a` | Fixed asset reader contract |
| MetadataNFT | `0x2ea18402ca9abdaebfdef8df7699cd150af04e16` | NFT metadata contract |
| GasCompZapper | `0x45f7ccd8062ad129d26dc8ad4d0eed179b315cc7` | Gas compensation zapper |
| SAGAPriceFeed | `0x006db9341a2f747684d31ace72a77c994dfb64f8` | SAGA price feed |

### Branch 4: stATOM (Stride Staked ATOM)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0xDaF9d9032b5d5C92528d6aFf6a215514B7c21056` | stATOM token address on SagaEVM |
| AddressesRegistry | `0xcf7e28abb54b7c306061b83058fb8c3f535a921a` | Branch-specific address registry |
| BorrowerOperations | `0xf9339df2bf05a3548afe304c7992480c7701a754` | Trove management operations |
| TroveManager | `0xdcd96430e273ec8764ae3f50c67a150bd9bb3390` | Core trove management logic |
| TroveNFT | `0x5d5e93100f494efb1410b737b58ed8098898c379` | Trove ownership NFTs |
| StabilityPool | `0xd624541380cbc7ccfd50de071cf415453a5d9e9f` | Stability pool for liquidations |
| ActivePool | `0x4abdee73201a47d31528b34e43f53381846e7183` | Active collateral pool |
| DefaultPool | `0xee28ddffbbc322eb08b0bc0d4544c4bb4444e861` | Default collateral pool |
| GasPool | `0x73377be318c5c9961538d16748d501d46d4c197f` | Gas compensation pool |
| CollSurplusPool | `0xca809ed097349c7f707c4cf0ec29e1e9ed749e68` | Collateral surplus pool |
| SortedTroves | `0xf2a8cb619daa589a964f912ae138324c3743301d` | Sorted trove data structure |
| FixedAssetReader | `0xa592f0279d47798d54df9ea073739796fa619736` | Fixed asset reader contract |
| MetadataNFT | `0xa45350f5ceacd2ef14b035faecd4d42281e5a642` | NFT metadata contract |
| GasCompZapper | `0x87d781e632c1da292c2526bbbed84d8d785dec53` | Gas compensation zapper |
| stATOMPriceFeed | `0x4cb650983800723fe13ce1483c89c1d22ba85aa9` | stATOM price feed |

### Branch 5: KING

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x58d9fbBc6037dedfBA99cAfA28e4C371b795ad97` | KING token address on SagaEVM |
| AddressesRegistry | `0xe6f3f507b044fd92680a02fb87e0913fda37ad20` | Branch-specific address registry |
| BorrowerOperations | `0xc86a2221fb969f50914666222c7a2420dae793e0` | Trove management operations |
| TroveManager | `0xa8fc7de1015c113b8f2dba58cc5e0e846fbaf74a` | Core trove management logic |
| TroveNFT | `0x8ad64e9a10da54d18af5152e45b3b833cd7aba8c` | Trove ownership NFTs |
| StabilityPool | `0x711e0c24c5c7a8b07ee58db6638348189b74f61b` | Stability pool for liquidations |
| ActivePool | `0x90c1e0de750b0287f2dd5a4c065eb950b5792f19` | Active collateral pool |
| DefaultPool | `0xec8c02deadde926ed1e0f269a8a4552a4df238ab` | Default collateral pool |
| GasPool | `0x2ca89111ee03c829aadaa1debc169eea71b40105` | Gas compensation pool |
| CollSurplusPool | `0x0cd19d190eaf8e4780093e69b9208579ce20a9b6` | Collateral surplus pool |
| SortedTroves | `0xe460a878061637cdf13b1205231234f7d215e25f` | Sorted trove data structure |
| FixedAssetReader | `0x9f171bf68b44a87362769f6c361667c5016e909b` | Fixed asset reader contract |
| MetadataNFT | `0xd37b9edb362539a7ab14174f68d6049dc71879e8` | NFT metadata contract |
| GasCompZapper | `0x87d781e632c1da292c2526bbbed84d8d785dec53` | Gas compensation zapper |
| KINGPriceFeed | `0x8824680c771813421210ef39bb5e56586208d40d` | KING price feed |

### Branch 6: yUSD (YieldFi USD)

| Contract | Address | Description |
|----------|---------|-------------|
| Token Address | `0x839e7e610108Cf3DCc9b40329db33b6E6bc9baCE` | yUSD token address on SagaEVM |
| AddressesRegistry | `0x6e3c69c548c2c96bd81f6ff7383314cf2de0e957` | Branch-specific address registry |
| BorrowerOperations | `0x2d221d3368a935a0d6f5eea6dca9be1f16963e35` | Trove management operations |
| TroveManager | `0x6a08df8ffc74baac2ad49317f1972be5c5cb28c6` | Core trove management logic |
| TroveNFT | `0x1ff471e1f88c7f42c7f1be5ab980e27b9e08224c` | Trove ownership NFTs |
| StabilityPool | `0xdb1304a9739f9b2e9578ecbb52cef53ee10f0165` | Stability pool for liquidations |
| ActivePool | `0xb1da53a9869c555dd7bc8e1f7cd81bfde6dd2bf7` | Active collateral pool |
| DefaultPool | `0xfafce30c8dfbb005b98ba27667f6b7c3d543aa19` | Default collateral pool |
| GasPool | `0xb0eb75cbe453d69ae7283b0e6f1388bc19c9c0a8` | Gas compensation pool |
| CollSurplusPool | `0xbdccd84bdc6ae92dd97ac70ee6f2db06f091d203` | Collateral surplus pool |
| SortedTroves | `0xb3cdd548c90508f112248ef24b56ce69fac8d09a` | Sorted trove data structure |
| FixedAssetReader | `0x882e6a238320ecb28d553a64c79f5110b798d419` | Fixed asset reader contract |
| MetadataNFT | `0x7f5c494026495060ce5922530d12628162e2c784` | NFT metadata contract |
| GasCompZapper | `0x87d781e632c1da292c2526bbbed84d8d785dec53` | Gas compensation zapper |
| yUSDPriceFeed | `0x7fd478468e272168601dcfcdc57474692adaf422` | yUSD price feed |

## Notes

- All addresses are from the latest deployment on Saga EVM (Chain ID: 5464).
- Each collateral branch operates independently with its own set of contracts, isolating risks.
- Core contracts are shared across all branches.
- Token Address shows the actual collateral token address registered in the Collateral Registry for each branch. Some tokens may be wrapped while others are native, but this address represents the exact token used by each branch.
- Price feeds provide real-time pricing data for each collateral type with several safe-guards built in.