---
sidebar_position: 1
---


# General

### What is Mustang Finance?
Mustang Finance is a decentralized borrowing protocol that lets users deposit WETH, rETH, tBTC, and SAGA as collateral, and mint the stablecoin MUST at an interest rate depositors choose. Mustang Finance is a Liquity V2 fork built specifically for the Saga EVM.

### The main use-cases for Mustang Finance are:

- Borrow MUST
- 1-click multiply exposure to collateral assets
- Earn yield by depositing MUST in the stability pool or farming elsewhere

To understand Mustang Finance it's helpful to understand [Liquity](https://www.liquity.org) 


:::tip
**Liquity V1** was a lending protocol that allowed users to take 0% interest loans on their ETH to receive $LUSD. Over the past 4 years it proved itself resilient in a variety of market conditions.

**Liquity V2** is the next iteration of borrowing, allowing users to set their own interest rate, and use more tokens as collateral.
:::


### Liquity V1 vs Liquity V2
| Similarities | Differences  |
|--|--|
|Decentralized  |  User-set interest rates – more control over your borrowing cost. |
|Rigorous Security|Improved redemption mechanism (lowest borrowing rate is redeemed first)|
|Redemption of stablecoins for underlying collateral maintains the $1.00 peg no matter what| Troves are now transferable|
|ETH Mainnet Only|V1’s code was free and open-sourced (FOSS), while with V2, Liquity will have its code set as a business source license (BUSL)|

### Mustang Finance vs Liquity V2
| Key Differences | Description  |
|--|--|
| **Blockchain** | Saga EVM (Chain ID: 5464) vs Ethereum Mainnet |
| **Collateral Types** | WETH, rETH, tBTC, SAGA vs ETH, wstETH, rETH (Liquity V2) |
| **No Gas Costs** | Transactions on Saga EVM don't require gas or a gas deposit |
| **Governance** | More protocol parameters are governable: fees, LTV requirements, minimum debt, minimum interest rate, ability to add/remove collateral branches |
| **Security Features** | Additional security features including debt limits per collateral type |
| **EVM Version** | Built for Saga's EVM version vs Cancun EVM (Liquity V2) |

## Does Mustang Finance have governance?
Mustang Finance has governance that can manage specific protocol parameters including:
- Distributing Protocol Liquidity Incentives (PIL)
- Directing protocol revenue to external initiatives
- Managing fees, LTV requirements, and minimum debt thresholds
- Updating collateral debt limits
- Adding or removing collateral branches via the Collateral Registry

Governance operates with a manual incentive direction system, replacing Liquity's original governance model.


## Other Helpful Resources:

Mustang Github:
https://github.com/MustangProtocol/must-finance

Block explorer for Saga EVM:
https://sagaevm.sagaexplorer.io/

Saga Dev docs:
https://docs.saga.xyz/

Saga EVM Subgraphs from Goldsky:
https://goldsky.com/products/subgraphs

Squid Router for bridging to Saga EVM from anywhere:
https://app.squidrouter.com/