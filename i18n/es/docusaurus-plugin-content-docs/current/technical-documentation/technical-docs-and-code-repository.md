---
sidebar_position: 1
---

# Documentación técnica y código

Documentación técnica e información sobre repositorios de código para desarrolladores.

## Repositorio principal

https://github.com/NeriteOrg/nerite

Contiene el núcleo de contratos y librerías para el Protocolo Nerite. También incluye el front-end y todo lo necesario para ejecutar su propia instancia de la aplicación.

El ReadMe también tiene más información sobre diseño y arquitectura.

## Cambios en las especificaciones técnicas de Nerite desde Liquity V2

### Delegación
`ActivePool.sol` ahora tiene la función `delegateTokens`. Cualquier token puede ser delegado al rol `delegate`. El papel puede ser actualizado por `governance`, que es el DAO de los titulares de NERI. Cualquiera puede llamar a la función de delegación de forma segura, ya que siempre delega en el papel `delegado`.

### Superfluid
Bold token (que es renombrado ), es ahora streamable via custom streaming token usando esta librería: (https://www.npmjs.com/package/@superfluid-finance/ethereum-contracts)

Las funciones _mint, _burn, _transfer han sido sustituidas por selfMint, selfBurn, y selfTransfer del [superfluid supertoken](https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/superfluid/SuperToken.sol).

BoldToken ya no es un ERC-20 por sí mismo, sino un proxy que se initaliza en un ERC-20. Muchos cambios de despliegue como resultado. Nota del desarrollador: no utilice deal() cheatcode con boldToken en las pruebas, ya que la memoria no se almacena como foundry espera.

Las importaciones de ERC-20 en BoldToken se eliminan en favor del uso de UUPS proxy ERC-20 importado por superfluid. Utiliza la misma implementación ERC-20 de openzeppelin. 

También remaps OZ en muchos lugares debido a las dependencias circulares. 

### Más colaterales y límites de deuda
`BorrowOperations` maneja la acuñación de nuevas stablecoins. La deuda puede ser acuñada en `withdrawBold`, `_openTrove` (que se utiliza en el gestor de lotes y en otros lugares también, así que ten cuidado), y `_moveTokensFromAdjustment`. El límite de deuda simple es sólo un uint256 almacenado en el `TroveManager` de cada sucursal, y accesible al `CollateralRegistry` a través del índice de la garantía. Se añaden getters y setters.

No gestiona la situación en la que los intereses devengados superan el límite de deuda. 

El límite de deuda puede ser incrementado por el `governance` en un factor máximo de 2 a la vez, llamando al `CollateralRegistry` que entonces llama al `TroveManager` para esa rama colateral.

El límite de deuda puede reducirse a cualquier cantidad en cualquier momento. (Todavía debe utilizar el timelock)