---
sidebar_position: 6
---

# Collateral Parameters

[Checkout out this blog](https://www.nerite.org/writing/tech-talk-collateral-ratios) on how various collateral ratio systems work.

MCR is the primary requirement for each trove, but there are also overall global requirements for each branch.

| Token              | CCR_Tag | Initial Debt Limit | Over Col Ratio (MCR) | SCR | CCR | LTV    |
|--------------------|---------|---------------------|------------------------|-----|-----|--------|
| WETH               | ETH     | $100,000,000         | 110                    | 110 | 150 | 90.91% |
| wstETH             | LST     | $25,000,000          | 110                    | 110 | 160 | 90.91% |
| rETH               | LST     | $25,000,000          | 110                    | 110 | 160 | 90.91% |
| rsETH (kelp)       | LRT     | $5,000,000           | 130                    | 115 | 160 | 76.92% |
| weETH (etherfi)    | LRT     | $2,000,000           | 130                    | 115 | 160 | 76.92% |
| tETH (treehouse)   | TREE    | $2,000,000           | 140                    | 120 | 165 | 71.43% |
| ARB                | ARB     | $5,000,000           | 140                    | 3   | 165 | 71.43% |
| COMP               | COMP    | $2,000,000           | 140                    | 115 | 165 | 71.43% |
| tBTC (threshold)   | BTC     | $5,000,000           | 115                    | 110 | 160 | 86.96% |

BCR is MCR + 10% in all cases.


## Debt Limit

For security, the debt limit can be set to 0 by governance, in case of emergency. This would allow only paying back debt, and no new borrowing. Governance can then later increase up to the initial debt limit, or up to 2x the current debt limit.