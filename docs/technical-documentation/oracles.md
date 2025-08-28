---
sidebar_position: 2
---

# Oracles

Mustang Finance leverages Api3's OEV (Oracle Extractable Value) oracles as its primary price feed solution. Api3 not only provides Mustang Finance reliable, price data but also generates additional revenue for the protocol through OEV rewards. By capturing value that would otherwise leak to MEV bots and arbitrageurs, Api3's oracles help maximize protocol efficiency while maintaining robust price accuracy.

To learn more about Api3 check out this website here: https://api3.org/

## Oracle Addresses

| Oracle Type | Address | Description |
|-------------|---------|-------------|
| ETH/USD | `0x0` | Api3 ETH/USD oracle |
| wstETH/stETH | `0x0` | wstETH/stETH oracle |
| stETH/USD | `0x0` | Chainlink stETH/USD oracle |
| rETH/ETH | `0x0` | rETH/ETH oracle |
| rsETH/ETH | `0x0` | rsETH/ETH oracle |
| weETH/ETH | `0x0` | weETH/ETH oracle |
| ARB/USD | `0x0` | ARB/USD oracle |
| COMP/USD | `0x0` | COMP/USD oracle |
| tBTC/USD | `0x0` | tBTC/USD oracle |
| BTC/USD | `0x0` | BTC/USD oracle |

## Staleness Thresholds
:::tip
All oracles have a 25-hour staleness threshold to ensure price feeds remain current and reliable.
:::

## Oracle Providers

- **API3**: Primary oracle provider, which also pays Mustang Finance OEV rewards
- **Chainlink**: Backup oracle provider and used for stETH/USD price feeds

## Usage

These oracles are used as part of the PriceFeeds in the Mustang Finance protocol for:
- Collateral valuation
- Liquidation calculations
- Risk management
- Price stability monitoring



