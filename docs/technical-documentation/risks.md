---
sidebar_position: 6
---

# Audits & Risk Disclosure

Detailed disclosures of protocol risks and user considerations. Nerite code has been audited several times by top firms.

## Contract Risk 

Underlying Liquity contracts are audited and secure. Nerite Protocol is a fork of Liquity and inherits most of the same risks and security considerations, but with several differences.

Nerite protocol contracts (and all changes from the Liquity core contracts) are audited by Sherlock, 0xSimao and other independent auditors.

Nerite audits: 
- [Report: Sherlock audit with 0xSimao](https://drive.google.com/file/d/1knlIgoEGv5x33n9mhTLRqJe8T55r3HCy/view?usp=sharing)
- Nerite also underwent extensive testing with automated vulnerability testing with [Octane](https://octane.security/), with reports available for each pull request on our Github.


## Centralization Risk

### Nerite Governance
Nerite Protocol is designed to be as limited, decentralized, and immutable as possible. The only parameters in the protocol which can be updated or changed by Nerite governance are:
1. Debt limits for each collateral type, which can be lowered at any time but only raised by a factor of 2x with a 7 day timelock.
2. How to direct 25% of protocol revenue. 

New collateral types can NOT be added by Nerite governance. 
USND can NEVER be minted by Nerite governance.
The percentage of fees that are directed to the stability pool can NOT be changed by Nerite governance.

### Arbitrum Network
Arbitrum is a decentralized network, but still relies on an emergency upgrade mechanism. For more information on this, see the [L2 Beat](https://l2beat.com/scaling/projects/arbitrum) tracker for Arbitrum decentralization.

### Collaterals

It is possible that some collateral tokens could be upgraded by respective DAOs or groups in the future. Conservative debt limits and over-collateralization ratios have been chosen to limit risks of this posing any issues.











