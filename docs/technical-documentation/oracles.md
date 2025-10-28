---
sidebar_position: 2
---

# Oracles

Mustang Finance uses Tellor oracles as its price feed solution on Saga EVM. Tellor provides decentralized, censorship-resistant price data with frequent updates to ensure accurate collateral valuations and liquidation calculations.

To learn more about Tellor check out this website here: https://tellor.io/

## Oracle Addresses (Saga EVM - Chain ID 5464)

All oracles use the shared DataBank address: `0x6f250229af8D83c51500f3565b10E93d8907B644`

| Oracle Type | Address | Description |
|-------------|---------|-------------|
| ETH/USD | `0xf568a35f0D1D4C0a389bB29033a0f13E02536D62` | Tellor ETH/USD oracle for WETH collateral |
| tBTC/USD | `0x987fc3b27226427323EFDB73E713669cf87B588c` | Tellor tBTC/USD oracle for tBTC collateral |
| SAGA/USD | `0xB4eA7fc3359E390CADcee542bDbd34caB89E64f0` | Tellor SAGA/USD oracle for SAGA collateral |
| stATOM/USD | `0x457fC8f0D3E7319eb078E076afD3F49120Bd0c4a` | Tellor stATOM/USD oracle (upcoming) |
| KING/USD | `0x54cb7d1c225100B05720d37735316BF16D885496` | Tellor KING/USD oracle (planned) |
| yETH/USD | `0xE087D1936257444ec4bc34caD95cA58EE0129a7e` | Tellor yETH/USD oracle (planned) |

## Staleness Thresholds
:::tip
All oracles have a 5-hour staleness threshold (4-hour heartbeat + 1-hour buffer) to ensure price feeds remain current and reliable.
:::

## Oracle Update Frequency

- **Heartbeat**: 4 hours (oracles update at least every 4 hours)
- **Price Threshold**: 1.00% for ETH/USD, 2.00% for all other feeds (triggers update if price moves beyond threshold)

## Oracle Provider

- **Tellor**: Decentralized oracle network providing censorship-resistant price feeds for all Mustang Finance collaterals

## Usage

These oracles are used as part of the PriceFeeds in the Mustang Finance protocol for:
- Collateral valuation
- Liquidation calculations
- Risk management
- Price stability monitoring



