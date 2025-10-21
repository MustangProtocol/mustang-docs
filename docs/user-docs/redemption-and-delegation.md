---
sidebar_position: 4
---


# Redemptions and Delegation

### What are redemptions?

Redemptions serve the crucial purpose of keeping MUST pegged to the value of a dollar, creating a price floor around $0.9945. They do this in a decentralized way without reliance on centralized assets, oracles, or 3rd parties.

A redemption is essentially swapping MUST for ETH/LST at face value, as if 1 MUST is exactly worth $1.00. Redemptions can be initiated by anyone, but are only profitable when MUST is less than $1.

The redeemer sends MUST to the protocol and in return  gets a mix of WETH, wstETH and rETH (minus the redemption fee). The redeemed amount is split among the different collateral assets based on their current Stability Pool backing (see [link](#how-is-the-collateral-split-determined) for more info).

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252F0XdFvKy05sdM3JClXcI5%252Flight%2520-%2520BOLD%2520individual%2520redemption.png%3Falt%3Dmedia%26token%3D3037c032-5464-4614-b206-d9d5157c0228&width=768&dpr=4&quality=100&sign=abb38c31&sv=2)

Redemptions start from the borrower paying the least interest.

Read more about how to [protect yourself](#how-can-i-stay-protected) from redemptions and what happens if [you are redeemed](#what-happens-if-my-trove-gets-redeemed).

You can also watchi this [9 min video](https://www.youtube.com/watch?v=CQVmjFx987A) on redemptions.

### What happens if two Troves have the same IR?

In this case, the "Last In, First Out" (LIFO) principle applies, meaning the Trove that set its interest rate more recently will be redeemed first.

### When can redemptions occur? 

A redemption can occur at any time, but will likely only happen when it is profitable to do so. This is usually the case when the price of MUST is less than $1 (minus the current redemption fee).

### Who can initiate a redemption? 

Any Ethereum address can initiate a redemption, provided that they have a sufficient amount of MUST to do so. However, we expect redemptions to be mainly performed by professional bots rather than humans.

### What happens if my Trove gets redeemed?

You can think of redemptions as if somebody else is repaying your debt and retrieving an equivalent amount of your collateral in return.

If your collateral (ETH or LST) is redeemed, an equivalent amount of your debt in USD terms is repaid. The redeemer receives your collateral, less the redemption fee, which remains  in your Trove. This means that at the time of redemption you have not lost any money in USD terms, likely even made a small gain with the received redemption fee as the peg recovers.

Example with ETH at $3'000:

* Before the redemption: 10 ETH collateral, 20'000 MUST debt.
* After the redemption: 5.025 ETH collateral, 5'000 MUST debt.

You can see your collateral and debt reduced equally (in USD terms) and the redemption fee (0.025 ETH) being added to your collateral value.

Partially affected Troves whose debt stays above the minimum debt threshold of 500 MUST continue to work as before, while Troves whose debt is reduced to a lesser amount (or 0) switch to a dormant operating mode (see below for [more](#what-happens-when-redemptions-cause-a-debt-of-a-trove-to-fall-below-the-minimum-amount) info).

### How do redemptions work using three collateral assets?
![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FJtx0jgGBkGisNExyXZ5a%252Fredemption%2520split%25202.png%3Falt%3Dmedia%26token%3D79f895c0-290c-41e9-9aeb-b3fa5a3709f5&width=768&dpr=4&quality=100&sign=17e818d8&sv=2)

In contrast to LUSD, MUST is backed by a multitude of collaterals. Instead of letting the redeemer freely choose the collateral to redeem, Liquity V2 and Mustang Finance optimize the process for economic safety. Redemptions are thus serviced through a collateral mix in a way that enhances the overall backing of MUST.

The process starts with the Troves paying the lowest interest rates in each collateral market and continues until the full amount of MUST is exchanged for collateral assets. Redemptions can be partial or full, as illustrated below.

In this example, the rETH market shows a full redemption of the first Trove and a partial redemption of the second. The wstETH and ETH markets have one partial and two full redemptions, respectively

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FJtx0jgGBkGisNExyXZ5a%252Fredemption%2520split%25202.png%3Falt%3Dmedia%26token%3D79f895c0-290c-41e9-9aeb-b3fa5a3709f5&width=768&dpr=4&quality=100&sign=17e818d8&sv=2)

### How is the collateral split determined?

The split is dynamic, optimizing for the economic safety of the system. The logic is straightforward: the riskier a collateral is, the more redemption volume is directed to that market. In other words, if a market's Stability Pool is relatively small compared to its total debt, it's considered riskier, as there's a higher likelihood of bad debt occurring in extreme events.

To mitigate this risk, the system redeems proportionally to the "outside debt" of each collateral type. This is calculated as the total debt borrowed against a specific collateral minus the size of the Stability Pool for that borrowing market.

Here is an example: given outside debt amounts of 100 MUST, 50 MUST and 100 MUST respectively, a redemption will result in a 40% (WETH), 20% (wstETH) and 40% (rETH) split.



![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FjSQv4scadWPAaEtb0whz%252Fredeem2.png%3Falt%3Dmedia%26token%3D6b7dc320-1b97-4cd7-9ad1-1afbbb7c70fe&width=768&dpr=4&quality=100&sign=eeabe72d&sv=2)

### Is there a redemption fee?

Yes. The redemption fee mechanics are broadly the same as in Liquity V1, but with adapted parametrization leading to a faster fee decay. The redemption fee is taken as a cut of the total ETH/LST drawn from the system in a redemption. Contrary to Liquity V1, the fee stays with the users as part of their collateral.

Redemption fees are based on the `baseRate` state variable, which is dynamically updated. The `baseRate` increases with each redemption, and exponentially decays according to time passed since the last redemption (half-life of 6 hours).

Upon each redemption of x MUST: `baseRate` is decayed based on time passed since the last fee event and incremented by an amount proportional to the fraction of the total MUST supply to be redeemed, i.e. `x/total_bold_supply`

The redemption fee percentage is given by `min (0.5%  + baseRate, 100%)`.

<figure>![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FoS6SRJ41pw82HYtf9Wd2%252Fredem.png%3Falt%3Dmedia%26token%3D244f49b2-3587-4d26-bb9e-b90b9713361d&width=768&dpr=4&quality=100&sign=59cf6c&sv=2)<figcaption><p>The redemption fee (red line) follows this dynamic over time as redemptions occur (blue bars).</p></figcaption></figure>

### How can I stay protected?

The risk of redemption depends on two factors: the interest rate you set and the price of MUST.

**The interest rate** you set determines how much MUST must be redeemed before it's your turn.  The higher your rate, the more MUST is redeemable before you, and vice versa.

You can see this on any frontned, in the example below the number is 41M.

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FHkqGvdaJxndhC8uhzLw0%252Frerwere.png%3Falt%3Dmedia%26token%3D796599d0-6785-4cd2-ad6a-bad02d062f45&width=768&dpr=4&quality=100&sign=c26f7d49&sv=2)

This means that 41M MUST must be removed from the system before it would reach you. However, this number is relative, and you also need to consider recent redemption activity. While past events don't guarantee future outcomes, they can serve as a useful guide.

For example, if only 200K MUST were redeemed in the last week, you're comparatively safer than if 15M were redeemed. 

**The price of MUST** is the second crucial factor. When it trades above $1, redemptions become unprofitable and should cease. If demand for MUST is strong, it could maintain a price above $1 for an extended period.

During such times, you can comfortably reduce the interest rate you're paying without increasing your risk of redemption.

### What is delegation of interest rates?

Interest rate delegation is a feature in Liquity V2 and Mustang Finance that allows borrowers to delegate the management of their interest rate to a third party. This enables them to create a passive, hands-off position, while still keeping a competitive rate and low redemption risk.

There are three types of delegations:

* To a third party manager: A specialized entity which provides predetermined strategies for batches of multiple Troves and charges a fee for the service
* To an automated and decentralized contract strategy: A predefined strategy managing interest rates in an autonomous manner
* To your own wallet: Delegate to a hot wallet when on vacation, or to a friend

It is important to note that a delegate or contract strategy can do nothing else but set the interest rate in a predetermined range, significantly limiting the risks of the borrowers.

Borrowers should thus keep an eye on the interest rate range and the maximum update frequency (relevant in case of premature adjustments) preset by the manager.

### Who are the current active interest rate delegates? <a href="#docs-internal-guid-441d8c3f-7fff-4efa-6319-4ba00d908597" id="docs-internal-guid-441d8c3f-7fff-4efa-6319-4ba00d908597"></a>


| Entity | Collateral Assets | Delegation Info | Description |
| ------ | ---------------- | ---------------- | ----------- |
| Summerstone | All assets on Mustang Finance | https://summerstone.xyz/docs/for-users/managed-interest-rates/supported-protocols/must-from-mustang-finance | Experienced infrastructure parter who provides several services for Mustang Finance. |
| Bolder Cash | All assets on Mustang Finance | https://bolder.cash/rate-strategies?f=mustang-finance&c=combined | Customizable rate manager offering various low, medium, and high rate strategies transparently. |
|        |                  |                  |             |

_Note that neither  Liquity AG nor Mustang Finance are responsible for the actions of any delegates. Please do your own research._

### What happens if there are issues with the smart contract for delegating interest rates? 

Your Trove would not be affected - the only thing would get affected is the interest rate at which your position is set.

### Why are redemptions not a feature of both LTV & interest rate, but only interest rate? 

Given that the _raison d'etre_ for redemptions is to diminish MUST supply in response to reduced demand, and interest rates drive demand, rate-based redemption processing is a more sustainable and effective lever to reach market equilibrium. Actively managing for both interest rate and LTV would weaken the ability to enforce market-level interest rates and deposit yields, while complicating the process for the system and its users

### What's the difference in redemption fees charged between Liquity V1 and Mustang Finance? 
In v2, when borrowers are affected by redemptions, the redemption fee charged to the redeemer stays within the affected Troves instead of being diverted as in Liquity.

So, in Liquity the `borrower_loss = redemption_fee + redeemer_gain`, while in MUST it's `borrower_loss = redeemer_gain`.

### What happens when redemptions cause a debt of a Trove to fall below the minimum amount?

If the redeemed amount exceeds the debt of an affected Trove, it doesn't get closed as in Liquity V1, but remains open with 0 MUST debt and the remaining collateral. The owner of a fully redeemed Trove may close it by withdrawing the remaining collateral, or borrow again to bring its debt above the minimum of 500 MUST, topping up its collateral if needed.

In the scenario that the redeemed amount of a Trove does not exceed the debt of a Trove, but would leave it between 0 and 500 MUST, the Trove would remain open with the remaining debt, and the remaining collateral. The owner of the Trove may close it by paying off the remaining debt and withdrawing the remaining collateral, or borrow anew as described above.

### How to redeem MUST for collateral (mix of ETH, rETH and wstETH) using Etherscan

**Step 1**

To redeem MUST you first have to give the CollateralRegistry contract an approval to use your MUST using the approve() function of the MUST token contract.

After connecting your wallet through "Connect to Web3", set\
spender to `CollateralRegistry address`and the amount to be at least as high as the amount you wish to redeem, adding 18 zeros.

**Example for 1000 MUST:**

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FyfWVv0gTWqCfg3YWYder%252Fred1.png%3Falt%3Dmedia%26token%3Dc05978b8-7946-4828-b81c-e7256bfeb0ce&width=768&dpr=4&quality=100&sign=b9753e68&sv=2)

**Step 2**\
You can now redeem MUST using the `CollateralRegistry` contract:

[(insert CollateralRegistry address after deployment)](#)Simply input the MUST amount to redeem, the redemption fee percentage you are willing to accept and the maximum number of list iterations per collateral (limits the number of troves whose debt can be repaid on each branch).

Note: The redemption fee must be higher than the current fee.

**Example**

`_boldAmount:` amount to redeem \* 1e18

`_maxIterationsPerCollateral:` 0

`_maxFeePercentage:` 1% \* 1e16, i.e. 1000000000000000000

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FcVvVXORMhz0UPk0QHMW0%252Fred2.png%3Falt%3Dmedia%26token%3Dd1be9844-ce90-415a-b35e-a276003532ce&width=768&dpr=4&quality=100&sign=9a897da2&sv=2)
