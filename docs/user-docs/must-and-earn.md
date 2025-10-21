---
sidebar_position: 3
---


# MUST & Earn

### What is MUST?

MUST is the USD-pegged stablecoin issued by the Mustang Finance protocol. It's decentralized, overcollateralized, and backed only by a basket of crypto native assets.

MUST is a resilient stablecoin by design:

* Only backed by crypto assets ("no real world assets" like US Treasuries)
* Directly redeemable for the underlying assets at any time by any one permissionlessly (always convertible in a fast and liquid way)
* Can only be created by users depositing more collateral. 

### What are MUST's main benefits compared to other stablecoins?

* MUST is backed by a variety of LSTs, LRTs, plus ETH, ARB, and COMP.
* It is always redeemable for the underlying assets, meaning you can always swap it as if worth $1, for the collateral backing it
* MUST has native incentives via Protocol Incentivized Liquidity (PIL) directed by governance, ensuring that there will always be sufficient liquidity to handle transactions
* MUST is a streamable super-token, making it perfect for subscriptions, money streaming, annuities, and other specialized use cases.
* MUST is Arbitrum native, and is built specifically for the fast and cheap Arbitrum network.

### What is MUST's peg mechanism?

Mustang Finance uses Liquity V2's market-driven monetary policy through user-set interest rates to maintain MUST's peg and to dynamically respond to situations where the token is above or below $1.00.

When MUST trades above $1, borrowers tend to reduce their rates due to lower redemption risk, making borrowing more and holding MUST less attractive. This helps correct the price downwards.

In contrast, when MUST trades below $1, arbitrageurs will initiate redemptions to restore the peg. Borrowers' exposure to redemption risk prompts them to increase interest rates, boosting demand for MUST (and Earn deposits) and pushing its price upward.
![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FOPagS0zx2PSCiAFmH8Uq%252Flight%2520-%2520BOLD%2520peg%2520mechanism.png%3Falt%3Dmedia%26token%3Dfcc3163a-a96d-4085-a1ea-d5c4606ab3b7&width=768&dpr=4&quality=100&sign=37ed4c8c&sv=2)

### How can I earn yield with Mustang Finance?

* Stability Pool deposits (Earn): Earn protocol revenue by depositing MUST into the various Stability Pools.
* Protocol Incentivized Liquidity (PIL): Supply liquidity for MUST onto the incentivized external DEXes like Bunni and Camelot. 
* Stake NERI (coming soon): Accrue voting power over liquidity incentives by staking NERI. On top of directing revenue, NERI stakers can potentially receive bribes (subject to governance vote) from third parties as an added bonus.

Users can also use "set-and-forget" strategies, like depositing MUST into the Yearn managed [yMUST vault](https://app.must.finance/earn/ymust). This vault aggigates yield between all the  stability pools and is recommended for users looking for the simplest MUST strategy. It issues the [yMUST token](https://arbiscan.io/address/0x252b965400862d94bda35fecf7ee0f204a53cc36), which is a yield bearing version of MUST.
![yUSNDvault](/img/yUSNDvault.png)

### Where does the yield for the Stability Pool deposits come from?

The yield comes from three sources:

1. **Interest payments**: Each borrow-market funnels 75% of the of its revenue to its Stability Pool depositors (Earners). This is paid out in MUST.
2. **Liquidation fees**: Your MUST will be used to liquidate under-collateralized loans, effectively buying their collateral with a \~5% discount. This is paid out in (staked) ETH.
3. **Inflationary Incentives**: NERI tokens are added as a bonus inflationary reward to depositors.

All the yield is fully sustainable, scalable and "real", with no token emissions and lockups.

### Is there a lockup period? 

There is no lockup period. Users are free to withdraw their MUST deposits from the Stability Pool whenever they want.

### What is the estimated yield on Earn? 

The yield is a representation of the rates borrowers are paying. Since 75% of the borrowers' interest payments go to Earn, the effective yield can exceed the average interest rate paid in a borrow market if less than 75% of the MUST supply is deposited to the respective Stability Pool. This yield amplification sets Liquity V2 and Mustang Finance apart from competitors and money markets where lending rates cannot be higher than borrow rates.

Check historic rates on Liquity V2 [here](https://dune.com/liquity/liquity-v2#interest-rates).

### Why are there multiple Stability Pools?

The goals are to:

* Establish separate borrow markets for different collateral assets with their own market driven interest rates, using the Stability Pool backing to dynamically split redemptions across the available collaterals (link to "Redemption").
* Compartmentalize the risks as much as possible when depositing to the respective Stability Pools (Earn) by giving the depositors control over which collateral assets they want exposure to in case of liquidations.

### How have Stability Pools evolved in Liquity based systems like Mustang Finance, from Liquity V1 to V2?

In V2, the concept of Stability Pools is expanded to accommodate multiple Liquid Staking Tokens (LSTs), Vanguard crypto tokens, as well as ETH as collateral, and keeping the interest revenue and liquidations proceeds inside the respective borrow market (collateral). Each collateral asset thus has its own Stability Pool to distribute yield to MUST depositors.

Additionally, user-set interest rates in V2 influence the yield dynamics for  Stability Pools depositors (Earn) as the yield is now fully sustainable coming from user-set interest rates (in MUST) rather than token emissions.

### How do risks differ for the different Stability Pools?

Users can deposit their stablecoins into the Stability Pool of their choice, aligning with their risk preference and the types of collateral they're comfortable being exposed to. By selecting pools associated with a specific collateral, participants can tailor their risk exposure and potential reward profile.

By offering separate pools for different collateral types, the system allows users to choose their exposure based on the perceived risk and potential returns of each LST or ETH. This compartmentalization helps manage systemic risk, ensuring that impacts from liquidations in one asset class don't disproportionately affect the entire ecosystem.

It is important to note that all MUST holders including depositors still remain dependent on MUST to keep its peg, remaining exposed to both all LSTs and ETH.


:::tip
A Stability Pool aggregation vault is currently under development, to simplify this.
:::
