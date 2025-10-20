---
sidebar_position: 7
---

# Bridging to Saga Chain

This guide explains how to bridge assets from other chains to Saga chain to use with Mustang Finance.

## Using Squid Router (Recommended)

Squid Router is the easiest way to bridge assets to Saga from 70+ supported chains including Ethereum, Base, Arbitrum, Optimism, Polygon, and more.

### Quick Start

1. **Visit Squid Router**: Go to [app.squidrouter.com](https://app.squidrouter.com/?chains=ssc-1%2C5464&tokens=usaga%2C0xa19377761fed745723b90993988e04d641c2cffe)
   - The link above is pre-configured for bridging to Saga chain

2. **Connect Your Wallet**: 
   - Click "Sign In" in the top right
   - Choose your wallet (MetaMask, WalletConnect, etc.)
   - Approve the connection

3. **Select Source Chain and Token**:
   - Choose which blockchain you're bridging FROM (e.g., Ethereum, Base, Arbitrum)
   - Select the token you want to bridge (e.g., USDC, ETH, USDT, WBTC)

4. **Configure Destination**:
   - Destination chain should be "Saga" or "SagaEVM"
   - Enter the amount you want to bridge
   - Review the fees and estimated arrival time

5. **Execute the Bridge**:
   - Click "Swap" or "Bridge"
   - Confirm the transaction in your wallet
   - Wait for confirmation (typically 20 seconds to 5 minutes)

### Supported Assets

Common tokens you can bridge to Saga:
- **USDC** (recommended for stablecoins)
- **USDT**
- **ETH** (for borrowing with Mustang Finance)
- **WBTC** (tBTC on Saga for borrowing)
- **SAGA** (native token)
- **rETH** (Rocket Pool ETH for borrowing)
- Most major ERC-20 tokens with sufficient liquidity

### Fees and Timing

- **Bridge fees**: Typically 0.1-0.3% of transfer value
- **Gas fees**: Vary by source chain (higher on Ethereum mainnet, lower on L2s like Base or Arbitrum)
- **Transaction time**: 20 seconds to 5 minutes depending on the source chain

:::tip
Bridge from Layer 2 chains (Base, Arbitrum, Optimism) instead of Ethereum mainnet to save significantly on gas fees.
:::

## Alternative Methods

### From Cosmos Chains (IBC)

If you're bridging from other Cosmos ecosystem chains:
1. Use Keplr wallet
2. Use the built-in IBC transfer function
3. Send to your Saga address

### Oku Trade (Bridge Aggregator)

[Oku Trade](https://oku.trade/bridge-saga) compares rates from 11+ bridges to find you the best deal.

## After Bridging

Once your assets arrive on Saga chain:

1. **Add Saga Network to Your Wallet** (if not already added):
   - Network Name: Saga EVM
   - RPC URL: `https://evm-rpc.saga.org`
   - Chain ID: `5464`
   - Currency Symbol: SAGA

2. **Start Using Mustang Finance**:
   - Visit [app.mustangfinance.org](https://app.mustangfinance.org)
   - Connect your wallet
   - Use your bridged assets as collateral to mint MUST stablecoin
   - Deposit MUST in stability pools to earn yield

## Troubleshooting

**Bridge taking too long?**
- Check the source chain's block explorer for your transaction status
- Most bridges complete within 5 minutes; longer delays may indicate network congestion

**Transaction failed?**
- Ensure you have enough native tokens for gas fees on the source chain
- Check that you haven't exceeded any bridge limits
- Verify you're using the correct destination address format

**Assets not showing in wallet?**
- Ensure your wallet is connected to the Saga network
- Add the token contract address manually if needed
- Allow up to 10 minutes for the bridge to fully complete

**Need the token contract address?**
- Check the [collaterals documentation](/docs/technical-documentation/collaterals) for supported token addresses on Saga

## Need Help?

- Join the [Mustang Finance Discord](https://discord.gg/5h3avBYxcn) for community support
- Check the [Squid Router documentation](https://docs.squidrouter.com)
- Visit our [GitHub](https://github.com/mustangfinance/mustang) for technical questions

---

:::warning
Always verify you're on the official Squid Router website and never share your seed phrase with anyone.
:::
