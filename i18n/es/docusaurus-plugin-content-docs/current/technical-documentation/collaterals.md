---
sidebar_position: 6
---

# Parámetros de garantía

[Eche un vistazo a este blog](https://www.nerite.org/writing/tech-talk-collateral-ratios) sobre cómo funcionan los distintos sistemas de coeficiente de garantía.

MCR es el requisito principal para cada trove, pero también existen requisitos globales generales para cada sucursal.

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

BCR es MCR + 10% en todos los casos.


## Límite de deuda

Por seguridad, el límite de deuda puede ser fijado a 0 por el gobierno, en caso de emergencia. Esto permitiría sólo el pago de la deuda, y no nuevos préstamos. El gobierno puede aumentar posteriormente hasta el límite de deuda inicial, o hasta el doble del límite de deuda actual.