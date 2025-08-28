---
sidebar_position: 3
---

# Liquity's Bug Bounty

Ya está en marcha un programa de recompensas por fallos para los contratos inteligentes subyacentes de Liquity que utiliza Nerite. Pretendemos que los hackers busquen vulnerabilidades de contratos inteligentes en nuestro sistema que puedan llevar a la pérdida de fondos o al bloqueo de componentes.

Consulte el programa [bug bounty](https://docs.liquity.org/v2-documentation/bug-bounty) de Liquity para obtener la información más actualizada.

La forma preferida de enviar una vulnerabilidad es a través de Liquity's Vault en [Hats Finance](https://app.hats.finance/bug-bounties/liquity-0xd9a1751269d5506e3528241e3f35d3fbeb974b6b/rewards). Si, por cualquier motivo, no se puede utilizar Hats, las vulnerabilidades también se pueden enviar utilizando el método descrito a continuación.

Las recompensas se concederán a la entera discreción de Liquity AG. La calidad del informe y las instrucciones de reproducción pueden influir en la recompensa. Las recompensas se denominan y pagan en USD. Si ambas partes están de acuerdo, las recompensas también pueden pagarse en criptoactivos.

## Informar de una vulnerabilidad
Por favor, comunique responsablemente cualquier hallazgo al equipo de desarrollo, siguiendo estas instrucciones:

Para informar de una vulnerabilidad, por favor escribe un email a security@liquity.org con [SECURITY DISCLOSURE] en el asunto del email.

En el caso de vulnerabilidades delicadas, cifra el mensaje con esta clave PGP (huella digital: D4BA B0E7 3B99 4FC5 79DC 9E0A C640 0C72 C5B8 CA28).

Haremos todo lo que esté en nuestra mano para responderle a la mayor brevedad posible y ofrecerle un plazo de resolución.

Por favor, incluya un informe detallado sobre la vulnerabilidad con pasos claros de reproducción. La calidad del informe puede influir en el importe de la recompensa.

En caso contrario, el hallazgo no podrá optar a ninguna recompensa.

## Ámbito
En el ámbito de la recompensa por fallos están todos los componentes del contrato inteligente del protocolo Liquity V2. Pueden encontrarse en el siguiente repositorio: https://github.com/liquity/bold

Código Solidity en el directorio contracts: 

/src

├── ActivePool.sol

├── AddressesRegistry.sol

├── BoldToken.sol

├── BorrowerOperations.sol

├── CollateralRegistry.sol

├── CollSurplusPool.sol

├── DefaultPool.sol

├── Dependencies

│   ├── AddRemoveManagers.sol

│   ├── AggregatorV3Interface.sol

│   ├── Constants.sol

│   ├── IRETHToken.sol

│   ├── LiquityBase.sol

│   ├── LiquityMath.sol

│   └── Ownable.sol

├── GasPool.sol

├── Interfaces

│   ├── IActivePool.sol

│   ├── IAddRemoveManagers.sol

│   ├── IAddressesRegistry.sol

│   ├── IBoldRewardsReceiver.sol

│   ├── IBoldToken.sol

│   ├── IBorrowerOperations.sol

│   ├── ICollateralRegistry.sol

│   ├── ICollSurplusPool.sol

│   ├── ICommunityIssuance.sol

│   ├── ICompositePriceFeed.sol

│   ├── IDefaultPool.sol

│   ├── IInterestRouter.sol

│   ├── ILiquityBase.sol

│   ├── ILQTYStaking.sol

│   ├── ILQTYToken.sol

│   ├── IMultiTroveGetter.sol

│   ├── IPriceFeed.sol

│   ├── ISortedTroves.sol

│   ├── IStabilityPoolEvents.sol

│   ├── IStabilityPool.sol

│   ├── ITroveEvents.sol

│   ├── ITroveManager.sol

│   ├── ITroveNFT.sol

│   ├── IWETHPriceFeed.sol

│   ├── IWETH.sol

│   ├── IWSTETHPriceFeed.sol

│   └── IWSTETH.sol

├── MockInterestRouter.sol

├── PriceFeeds

│   ├── CompositePriceFeed.sol

│   ├── MainnetPriceFeedBase.sol

│   ├── RETHPriceFeed.sol

│   ├── WETHPriceFeed.sol

│   └── WSTETHPriceFeed.sol

├── SortedTroves.sol

├── StabilityPool.sol

├── TroveManager.sol

├── TroveNFT.sol

├── Types

│   ├── BatchId.sol

│   ├── LatestBatchData.sol

│   ├── LatestTroveData.sol

│   ├── TroveChange.sol

│   └── TroveId.sol

└── Zappers

    ├── GasCompZapper.sol

    ├── Interfaces

    │   ├── IExchange.sol

    │   ├── IFlashLoanProvider.sol

    │   ├── IFlashLoanReceiver.sol

    │   └── ILeverageZapper.sol

    ├── LeverageLSTZapper.sol

    ├── LeverageWETHZapper.sol

    ├── Modules

    │   ├── Exchanges

    │   │   ├── CurveExchange.sol

    │   │   └── UniV3Exchange.sol

    │   │   └── HybridCurveUniV3Exchange.sol

    │   └── FlashLoans

    │       └── BalancerFlashLoan.sol

    └── WETHZapper.sol

## Fuera de alcance
Los problemas conocidos no serán recompensados

## Áreas de interés
Estos son algunos ejemplos de vulnerabilidades que serían interesantes:

Robo de tokens o manipulación del proceso de generación de tokens.

Bloqueo o congelación de alguno de los contratos Liquity V2.

Ataques de Griefing: ¿es posible bloquear liquidaciones, reembolsos, operaciones con prestatarios, reparto de recompensas, etc.?

¿Se mantienen las restricciones deseadas en las operaciones de los prestatarios?

Ataques a préstamos flash

Explotaciones de tokens LQTY que implican a los LockupContracts

Interacciones de contratos inteligentes iniciadas por el frontend que tengan un impacto negativo inesperado en el usuario - por ejemplo, riesgo MEV por retirar liquidez de un AMM.

## Elegibilidad
Sólo las vulnerabilidades desconocidas recibirán una recompensa; en caso de informes duplicados, el primer informe recibirá la recompensa.

La divulgación pública de la vulnerabilidad, antes del consentimiento explícito de Liquity AG para hacerlo, hará que la vulnerabilidad no sea elegible para una recompensa.

El intento de explotar la vulnerabilidad en una red pública Ethereum también hará que no sea elegible para una recompensa.