---
sidebar_position: 1
---


# General

### What is Nerite?
Nerite is a decentralized borrowing protocol that lets users deposit ETH, LSTs, and ARB as collateral, and mint the stablecoin USND at an interest rate depositors choose. Nerite is friendly fork based on Liquity v2.

### The main use-cases for Nerite are:

- Borrow USND
- 1-click multiply exposure to collateral assets
- Earn yield by depositing USND in the stability pool or farming elsewhere
- Stake NERI to direct PLI (Protocol Liquidity Incentives) and earn rewards
- Stream USND as a subscription, salary, grant, or any other kind of payment

To understand Nerite it's helpful to understand [Liquity](https://www.liquity.org) 


:::tip
**Liquity V1** was an immutable lending protocol that allowed users to take 0% interest loans on their ETH to receive $LUSD. Over the past 4 years it proved itself resilient in a variety of market conditions.

**Liquity V2** is the next iteration of borrowing, allowing users to set their own interest rate, and use more tokens as collateral.
:::


### Liquity V1 vs Liquity V2
| Similarities | Differences  |
|--|--|
|Immutability  |  User-set interest rates – more control over your borrowing cost. |
|Decentralized| New collateral types - ETH, rETH, wstETH|
|Rigorous Security|Improved redemption mechanism (lowest borrowing rate is redeemed first)|
|Redemption of stablecoins for underlying collateral maintains the $1.00 peg no matter what| Troves are now transferable|
|ETH Mainnet Only|V1’s code was free and open-sourced (FOSS), while with V2, Liquity will have its code set as a business source license (BUSL)|

### Nerite vs Liquity V2
| Similarities | Differences  |
|--|--|
| Immutability|ETH Mainnet (Liquity V2) only vs Arbitrum Only (Nerite) |
|Decentralization| **Additional Collateral:** sfrxETH, weETH, tETH, tBTC, COMP, and ARB|
|Redemption of stablecoins for underlying collateral maintains the $1.00 peg no matter what| Nerite adds Streaming: USND can be streamed at any rate using  [Superfluid](https://www.superfluid.finance/). Pay anyone every second.|
|Shared Security from Friendly Forks |ARB deposited in the protocol can be delegated by Nerite governance.|
||Nerite adds Additional security features to allow for the other features, like debt limits|
|||\

## Does Nerite have governance?
Nerite is subject to minimal governance which is solely tasked with distributing Protocol Liquidity Incentives (PIL), directing 25% of the protocol's revenue to external initiatives, delegating ARB, and updating collateral debt limits. Governance can never change the fee split, update protocol parameters, mint new stablecoins, or anything else.


## Other Helpful Resources:

Dune Dashboard: https://dune.com/niftyteam/nerite

Supefluid USND streaming dashboard: https://app.superfluid.org/


