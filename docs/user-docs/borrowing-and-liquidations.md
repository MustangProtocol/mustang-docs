---
sidebar_position: 2
---

# Borrowing and Liquidations

### What makes borrowing on Mustang so unique?

Mustang allows users to borrow the stablecoin USND on their own terms. Borrowers can choose and adjust the rate they are willing to pay for their loans. Borrowers can choose to pay 0%, 5%, 20%, etc.. Borrowers will establish market rates in accordance with their individual risk tolerance without relying on governance or algorithm rate management. Each collateral also has its own respective borrow market which allows room for a market of rates to develop.

All of this makes for a highly capital efficient, secure and decentralized borrowing experience.

### What is a Trove?

When a borrower deposits collateral (ETH, rETH, ARB, etc) a Trove is created.
A **Trove** is Mustang's version of a 'vault'. Each Trove has a particular Ethereum address owner, and each owner can have multiple Troves.

Each Trove can only have 1 type of collateral deposited in it.
```mermaid
flowchart  LR

A["User"]  -- Deposit ETH -->  B("Create Trove")

B  -->  C("Set Rate, Collateral, and Debt value")

C  -- Delegate -->  D("Manager")

A  -- Deposit rETH -->  E("Create Trove")

F("Set Rate, Collateral, and Debt value")  -- Delegate -->  G("Manager")

E  -->  F

n2("Set Rate, Collateral, and Debt value")  -- Delegate -->  n3("Manager")

n1("Create Trove")  -->  n2

A  --Deposit ARB-->  n1
```

Each Trove allows you to manage a loan, adjusting collateral and debt values as needed, as well as setting your own interest rate. Trove management can optionally be delegated to a "Manager" who is given special permissions. 

Troves are also transferable NFTs, and can be found in the wallet of the owner. Be cautious with this: transferring the NFT also transfers the ownership of the position.

### What types of collateral can I use on Mustang?

Mustang works with the following ten collaterals: 
- WETH (wrapped Ethereum)
- wstETH (wrapped Lido ETH)
- rETH (Rocket pool ETH)
- rsETH (Kelp ETH)
- weETH (Etherfi ETH) 
- tETH (Treehouse ETH)
- ARB (Arbitrum) 
- COMP (Compound Finance)
- tBTC (Threshold Bitcoin)

:::tip
New collateral types can never be added. But existing ones can be removed, or re-added, based on risk factors. 
:::

### Is there a minimum debt?

Yes, a minimum debt of 500 USND is required for borrowing.

### **When do I need to pay back my loan?**

Loans issued by the protocol do not have a repayment schedule. You can leave your Trove open and repay your debt any time, as long as you maintain a healthy Loan-to-Value (LTV) Ratio.

### Is there a lockup period? 

There is no lockup period. Users are free to withdraw their collateral deposits whenever they want. 
As an exception, withdrawals by borrowers are temporarily suspended if the total LTV of a borrow market goes above 75%.

### How do I decide on my LTV?

This depends on your personal preferences, primarily your risk tolerance and how actively you want to manage your position(s). To help with the decision, you'll find preset options on the user interface that can serve as a guide.

:::tip
We may display BOLD instead of USND in several graphics which are borrowed from Liquity.
:::

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FKYV7j08QhkPfeWdSZCE5%252Fltv_preset.png%3Falt%3Dmedia%26token%3D98dda88c-18ee-4993-9993-ece6d9242a86&width=768&dpr=4&quality=100&sign=6093ec1&sv=2)
Please note that these examples are for illustration purposes only and do not represent definitive risk or safety thresholds. It's essential to determine your own risk tolerance and comfort level as a user.

If your LTV becomes too high, your position will be liquidated.
> LTV = Loan to Value a LTV of 50% means that if you borrowed $100, your collateral is $200.

### How do Liquidations work in Mustang?

Mustang primarily uses Api3's OEV oracles to prevent value leakage and maintain proper price feeds for our collaterals. Chainlink is also used as a backup in some cases. Check out the [oracles](/docs/technical-documentation/oracles) section for more info.

Troves get liquidated if the LTV goes above the maximum value.

Mustang uses Stability Pools as its primary liquidation mechanism to absorb liquidated debt and collateral. Each borrow-market has its own dedicated Stability Pool earning liquidation gains (in the respective collateral) in exchange for burning debt. That means Stability Pool depositors earn 100% of the fees from liquidations on the protocol, and earn those fees in the liquidated collateral (for example, ETH).

Just-In-Time liquidations and a redistribution of debt and collateral across borrowers of the same market handle liquidations as a last resort if the Stability Pool were ever empty.

A liquidated borrower usually incurs a penalty of 5% and will be able to claim the remaining collateral after liquidation.

A special case is when a Redistribution is necessary, then:

* For ETH, the loss amounts to 10% of the debt (at most). That corresponds to a max. loss of 9.09% expressed in terms of collateral.
* For rETH/wstETH the loss is 20% of the debt, corresponding to a max. loss of 16.67% expressed in terms of collateral.

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FhaTvXYC1FTrAwmfXQZ14%252Fliqtable.png%3Falt%3Dmedia%26token%3Da2ab7753-5fd6-4741-8c43-871fc704aa1a&width=768&dpr=4&quality=100&sign=fba442d0&sv=2)

### How am I compensated for liquidating a Trove? 

The liquidation of Troves is connected with certain gas costs which the initiator has to cover. The protocol offers a gas compensation given by the following formula:

`0.0375 WETH + min(0.5% trove_collateral, 2_units_of_LST_or_WETH)`

The `0.0375 WETH` is funded by a [refundable gas deposit](borrowing-and-liquidations.md#what-is-the-refundable-gas-deposit) while the variable `0.5%` part comes from the liquidated collateral, slightly reducing the liquidation gain for Stability Providers.

### What is the max Loan-To-Value (LTV)?

That depends on the collateral type you will use.&#x20;

ETH will have a LTV of 90.91% while wstETH and rETH will have it at 83.33%.

### What is the refundable gas deposit?

To open a new Trove, the protocol requires a liquidation reserve of 0.0375 ETH regardless of the chosen collateral, which is set aside to cover the gas costs of a potential liquidation. The deposit is returned when the Trove is closed by the user (including upon redemptions).

### How much will I pay for my loan?

On Mustang, there are no upfront fees. Instead, you pay interest on an ongoing basis, making it suitable for short-term loans as well. When creating a new position or increasing the amount borrowed, borrowers pay the first week of interest up front to prevent the protocol from leaking value to arbitrage bots.

The interest you pay is determined by the rate you set yourself. For example, if you borrow 10,000 USND at a 5% interest rate, you'll pay \~500 USND in interest after one year. This interest is added to your outstanding debt.

### What are user-set rates?

On Mustang, users set their own interest rates, giving them full control over costs and improving predictability. This feature allows for adaptability to various market conditions and helps stabilize USND's peg.

User-set interest rates facilitate a capital-efficient equilibrium between USND borrowers and holders in a fully market-driven manner. Additionally, these rates serve as the primary revenue source for USND holders, generating a continuous, sustainable real yield for USND depositors and liquidity providers.

Borrowers should set their rates based on their [redemption](/docs/user-docs/redemption-and-delegation#what-are-redemptions) risk tolerance.

Read more about setting your rates, or letting a Rate Manager partner set them for you for free [here](https://www.liquity.org/blog/interest-rate-management-in-liquity-v2).

### Can I adjust the rate?

Yes, you can always adjust your interest rate at any time. Since you as a user get to set your own interest rate, you have full autonomy over your borrowing costs.

Note however, that a fee corresponding to 7 days of average interest is charged when opening the loan, as well as on any rate adjustments that happen less than 7 days after the last adjustment. Without it, low-interest rate borrowers could evade redemptions by sandwiching a redemption transaction with both an upward and downward interest rate adjustment, which in turn would unduly direct the redemption against higher-interest borrowers.

### How do I decide on the right rate for me?

Setting an interest rate determines a user's redemption risk and needs to be aligned with your goals and how actively you want to manage your position.

Users can also  decide to delegate interest rate management to a third party, who can set your interest rate and charge a fee for this service (see [link](/docs/user-docs/redemption-and-delegation#what-is-delegation-of-interest-rates)).

By opting to manage your own rate, you will have to weigh the savings from a lower rate against the higher redemption risk and the increased adjustment frequency with potential additional costs (premature adjustment fees and gas costs).

Since redemptions are performed in ascending order of interest rate (for the respective collateral asset), you will typically want to keep a buffer of other borrowers with lower rates in front of you. Choosing higher rates may increase the recurring costs of your loan, but give you peace of mind regarding unexpected market fluctuations.

You can see the distribution of other users' rates in a histogram and position yourself accordingly.

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FHkqGvdaJxndhC8uhzLw0%252Frerwere.png%3Falt%3Dmedia%26token%3D796599d0-6785-4cd2-ad6a-bad02d062f45&width=768&dpr=4&quality=100&sign=c26f7d49&sv=2)

Redemptions usually occur when USND is trading below $1 minus the current redemption fee. Keeping an eye on the past [redemption activity](https://dune.com/liquity/liquity-v2#redemptions) can help you assess the overall redemption risk, serving as an additional data point for your rate selection.

In general, those willing to actively monitor their positions, or borrowing for shorter periods of time, may opt for lower rates. Conversely users optimizing for a more passive, long-term position would be better off with setting a higher relative interest rate.

### What could the average interest rate be?

These will be set, continuously, by the market and will vary over time. We would expect that, on average, rates should be similar to borrowing on Sky or Aave using ETH. However, due to the flexibility of user-set rates, it is possible that some users will pay significantly lower rates during certain periods.&#x20;

Given that 75% of the interest revenue is directly paid out to USND depositors , we further expect that stablecoin deposit yields should be comparable, if not higher than what competing CDP's and lending markets offer. Thanks to the attractiveness of USND and assuming the emergence of external use cases (monetary premium), this could lead to lower borrow rates overall than offered by other platforms. Learn more about the spread between borrowers and lenders in our [article](https://www.liquity.org/blog/liquity-v2-a-de-facto-reference-rate-for-defi).

### What determines the riskiness of my Trove?

There are two key parameters to consider:

* **Loan-to-value (LTV)**: This is based on your debt-to-collateral ratio and affects your risk of [liquidation](borrowing-and-liquidations.md#how-do-liquidations-work-in-mustang).
* **Interest rate (IR)**: You set this rate yourself, and it influences your risk of being [redeemed](/docs/user-docs/redemption-and-delegation#what-are-redemptions).

You have the flexibility to set these parameters as you see fit, allowing you to control the relative riskiness of each Trove. You can create multiple Troves under the same address, enabling you to manage different risk profiles for different portions of your portfolio.

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FPtoSsrpN4nxIZviPrc1s%252FLoan%2520personas.png%3Falt%3Dmedia%26token%3D649cb0e4-eb3e-44e4-8fe6-4432dbaed967&width=768&dpr=4&quality=100&sign=bb12995f&sv=2)

### Are there any other fees related to borrowing?

To impede Trove redemption evasion strategies where borrowers try to minimize their interest payments in an unfair manner, a small "premature adjustment fee" is charged on interest rate changes that happen within less than 7 days since the last adjustment (or the opening of the Trove). The premature adjustment fee is equal to 7 days of average interest on the respective borrow market. Note that this fee differs from the user's set interest rate.&#x20;

The fee is denominated in USND and added to the Trove's debt. The same fee is charged when a new Trove is opened or when its debt is increased (only affecting the added debt).

### How many Troves (loans) can I open with the same address?

You can have multiple open Troves for the same collateral or across different collateral types, all represented as separate NFTs.&#x20;

### Are Troves transferable?

Yes, they are represented as a NFT (ERC-721), hence easily transferable between wallets. When you send the NFT you also send full access to your Trove and all the funds within it.&#x20;

Please note that more advanced strategies like 'selling' Troves on secondary markets like OpenSea comes with inherent risks, and caution is advised.

### How do I loop my exposure?

Looping allows you to borrow USND against your deposited collateral (ETH, wstETH or rETH) and use it to buy more collateral, increasing your exposure to the underlying . Liquity V2 comes with built-in automation to achieve this with one click (zappers).&#x20;

Make sure you choose a frontend that supports this functionality, and be mindful of liquidity/slippage.

### How are collateral risks mitigated?

Liquity V2 will have three separate borrow markets for the different collateral types with their own Stability Pools (for efficient liquidations), user-set interest rates, and LTV factors for their respective assets (ETH, wstETH, and rETH). 

Mustang will have those 3 plus the additional collaterals mentioned above, but all will follow the same patterns.

Risks are mitigated through temporary borrowing restrictions in times of low collateralization of a given market, a redemption logic prioritizing  collateral with less Stability Pool backing, and a collateral shutdown as an emergency measure to maintain system balance and protect against market instability.

Keep in mind that despite all these measures, USND remains dependent on the three mentioned collateral assets and there is no strict guarantee that it remains overcollateralized in case of a sudden collapse of a collateral asset.

### How does the system compartmentalize risk among different LSTs? 

This depends on the party in question:

* Borrowers: Collateral risk is limited to the collateral asset held by the borrower. A borrower isn't negatively affected by a failure of another collateral asset.
* USND Holders: As a multi-collateral stablecoin, USND is reliant on effective liquidations of undercollateralized loans in every borrow market to remain overcollateralized. Holders are subject to the risks of all supported collateral assets.
* Earners: Stability Pool depositors only get exposure to the asset they have opted for. However, as USND holders, they are similarly affected by potential depegging.

### What mechanisms are in place if the Stability Pool is empty?

If the Stability Pool doesn't cover the full entire debt and gets completely emptied by the liquidation, the system falls back to the following liquidations modes.

The liquidator can freely choose between two fallback liquidation modes for the debt exceeding the funds in the Stability Pool:

1. Just-in-time (JIT) liquidation: the liquidator sends an amount of USND corresponding to the (remaining) debt in exchange for 105% of its nominal value in ETH.
2. Redistribution: the liquidator triggers a redistribution, through which the Trove's entire debt and collateral is redistributed to all fellow borrowers of the respective collateral market, in proportion to their own collateral amounts. Thus, the respective borrowers will receive a share of the liquidated collateral and see their debts increase proportionally.

### Shutdown Borrow Markets
The system may shut down borrow markets whose total collateralization ratio (TCR) falls below 110% (for ETH) or 120% (for wstETH and rETH). The shutdown is performed by incentivizing redemptions against the respective collateral (see [this](https://liquity.gitbook.io/v2-whitepaper/liquity-v2-whitepaper/functionality-and-use-cases#c9aukpugrj32) for more details)
