---
sidebar_position: 6
---

# Collateral Parameters

[Checkout out this blog](https://www.mustangfinance.org/writing/tech-talk-collateral-ratios) on how various collateral ratio systems work.

MCR is the primary requirement for each trove, but there are also overall global requirements for each branch.

| Token              | CCR_Tag | Initial Debt Limit | Over Col Ratio (MCR) | SCR | CCR | LTV    |
|--------------------|---------|---------------------|------------------------|-----|-----|--------|
| ETH                | ETH     | $100,000,000         | 110                    | 110 | 150 | 90.91% |
| rETH (Rocket Pool) | LST     | $25,000,000          | 120                    | 110 | 160 | 83.33% |
| tBTC               | BTC     | $100,000,000         | 110                    | 110 | 150 | 90.91% |
| SAGA               | SAGA    | $5,000,000           | 140                    | 120 | 165 | 71.43% |

BCR is MCR + 10% in all cases.


## Debt Limit

For security, the debt limit can be set to 0 by governance, in case of emergency. This would allow only paying back debt, and no new borrowing. Governance can then later increase up to the initial debt limit, or up to 2x the current debt limit.