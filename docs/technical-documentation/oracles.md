---
sidebar_position: 2
---

# Oracles

Nerite leverages Api3's OEV (Oracle Extractable Value) oracles as its primary price feed solution. Api3 not only provides Nerite reliable, price data but also generates additional revenue for the protocol through OEV rewards. By capturing value that would otherwise leak to MEV bots and arbitrageurs, Api3's oracles help maximize protocol efficiency while maintaining robust price accuracy.

To learn more about Api3 check out this website here: https://api3.org/

## Oracle Addresses

| Oracle Type | Address | Description |
|-------------|---------|-------------|
| ETH/USD | `0x4DF393Fa84e4a0CFdF14ce52f2a4E0c3d1AB0668` | Api3 ETH/USD oracle |
| wstETH/stETH | `0xAC7d5c56eBADdcBd97F9Efe586875F61410a54B4` | wstETH/stETH oracle |
| stETH/USD | `0x07C5b924399cc23c24a95c8743DE4006a32b7f2a` | Chainlink stETH/USD oracle |
| rETH/ETH | `0xA99a7c32c68Ec86127C0Cff875eE10B9C87fA12d` | rETH/ETH oracle |
| rsETH/ETH | `0x8fE61e9D74ab69cE9185F365dfc21FC168c4B56c` | rsETH/ETH oracle |
| weETH/ETH | `0xabB160Db40515B77998289afCD16DC06Ae71d12E` | weETH/ETH oracle |
| ARB/USD | `0x016aAE62d4c3a9b1101a8F9597227c045a41656F` | ARB/USD oracle |
| COMP/USD | `0x9Bd88Dc926DDC36EbBf533Eee0f323C4A194753B` | COMP/USD oracle |
| tBTC/USD | `0x1aF6168B78aDeE8F3CF3E99156FC066CfCB03F9e` | tBTC/USD oracle |
| BTC/USD | `0xF4A606Ab69FCac4cc429bf4B032BB2Ff74fe31f1` | BTC/USD oracle |

## Staleness Thresholds
:::tip
All oracles have a 25-hour staleness threshold to ensure price feeds remain current and reliable.
:::

## Oracle Providers

- **API3**: Primary oracle provider, which also pays Nerite OEV rewards
- **Chainlink**: Backup oracle provider and used for stETH/USD price feeds

## Usage

These oracles are used as part of the PriceFeeds in the Nerite protocol for:
- Collateral valuation
- Liquidation calculations
- Risk management
- Price stability monitoring



