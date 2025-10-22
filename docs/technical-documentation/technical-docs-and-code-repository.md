---
sidebar_position: 1
---

# Technical Docs & Code

Technical documentation and code repository information for developers.

## Primary Core Repository

https://github.com/MustangProtocol/must-finance/

Contains the core contracts and libraries for the Mustang Protocol. Also includes the front end and everything you need to run your own instance of the app.

The ReadMe also has more design and architecture information.

## Tech spec changes on Mustang from Liquity V2

### Delegation
`ActivePool.sol` now has `delegateTokens` funtion. Any tokens can be delegated to the `delegate` role. The role can be update by `governance`, which is the DAO of NERI holders. Anyone can call delegate function safely since it always delegates to the `delegate` role.

_mint, _burn, _transfer functions have been replaced with selfMint, selfBurn, and selfTransfer from the [superfluid supertoken](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/superfluid/SuperToken.sol).

BoldToken is no longer an ERC-20 on its own, but rather a proxy which is initalized into an ERC-20. Many deployment changes as a result. Dev note: do not use deal() cheatcode with boldToken in testing, since the memory is not stored how foundry expects.

ERC-20 imports on BoldToken are removed in favor of using UUPS proxy ERC-20 imported by superfluid. It uses the same openzeppelin ERC-20 implementation. 

Also remaps OZ in many places because of circular dependencies. 

### More collaterals and debt limits
`BorrowOperations` handles minting new stablecoins. Debt can be minted in `withdrawBold`, `_openTrove` (which is used in the batch manager and elsewhere too, so be careful), and `_moveTokensFromAdjustment`. Simple debt limit is just a uint256 stored in the `TroveManager` of each branch, and accessable to the `CollateralRegistry` via the index of the collateral. Getters and setters are added.

Does not handle the situation where interest accrued goes over the debt limit. 

Debt limit can be raised by `governance` by a max factor of 2 at a time, by calling the `CollateralRegistry` which then calls the `TroveManager` for that collateral branch.

Debt limit can be lowered to any amount at any time. (Still must use the timelock)