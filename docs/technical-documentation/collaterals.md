---
sidebar_position: 6
---

# Collateral Parameters

[Checkout out this blog](https://www.mustangfinance.org/writing/tech-talk-collateral-ratios) on how various collateral ratio systems work.

MCR is the primary requirement for each trove, but there are also overall global requirements for each branch.

| Asset | Native chain | Decimals | Custom Wrapper | Initial Debt Limit | Collateralization Requirement | Max LTV | Liquidation Penalty |
|-------|--------------|----------|----------------|-------------------|-------------------|---------|-------------------|
| wETH | Ethereum | 18 | no | $100M | 110 | 90.91% | 5% |
| yETH | Ethereum | 18 | no | $5M | 120 | 83.33% | 5% |
| tBTC | Ethereum | 18 | no | $100M | 110 | 90.91% | 5% |
| SAGA | SagaEVM | 6 | yes | $1M | 150 | 66.67% | 5% |
| stATOM | SagaEVM | 6 | yes | $1M | 125 | 80.00% | 5% |
| KING | Ethereum | 18 | no | $500K | 150 | 66.67% | 5% |
| yUSD | SagaEVM | 18 | no | $5M | 115 | 86.96% | 5% |

BCR is MCR + 10% in all cases.


## Debt Limit

For security, the debt limit can be set to 0 by governance, in case of emergency. This would allow only paying back debt, and no new borrowing. Governance can then later increase up to the initial debt limit, or up to 2x the current debt limit.