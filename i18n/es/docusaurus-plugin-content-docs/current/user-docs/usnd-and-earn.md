---
sidebar_position: 3
---


# USND & Earn

### ¿Qué es USND?

USND es la stablecoin con paridad en USD emitida por el protocolo Nerite. Está descentralizada, sobrecolateralizada y respaldada únicamente por una cesta de criptoactivos nativos.

USND es una stablecoin resistente por diseño:

* Sólo está respaldada por criptoactivos («no por activos del mundo real» como los bonos del Tesoro de EE.UU.).
* No está sujeta a cambios en las garantías ni a actualizaciones del protocolo (inmutable).
* Directamente canjeable por los activos subyacentes en cualquier momento por cualquiera sin permiso (siempre convertible de forma rápida y líquida)
* Sólo pueden ser creados por usuarios que depositen más garantías.

### ¿Cuáles son las principales ventajas de USND en comparación con otras stablecoins?

* USND está respaldada por una variedad de LSTs, LRTs, además de ETH, ARB y COMP.
* Siempre se puede canjear por los activos subyacentes, lo que significa que siempre se puede intercambiar como si valiera 1 $, por la garantía que lo respalda.
* Los contratos utilizados para emitir USND son inmutables, no permitiendo ningún cambio y reduciendo significativamente los vectores de ataque.
* USND tiene incentivos nativos a través del Protocolo de Liquidez Incentivada (PIL) dirigido por la gobernanza, asegurando que siempre habrá suficiente liquidez para manejar las transacciones.
* USND es un super-token fluido (token ERC-20 con capacidad de pagos continuos en tiempo real), lo que lo hace perfecto para suscripciones, flujos de dinero, anualidades y otros casos de uso especializados.
* USND es nativo de Arbitrum, y está construido específicamente para la rápida y barata red Arbitrum.

### ¿Cuál es el mecanismo de fijación de USND?

Nerite utiliza la política monetaria impulsada por el mercado de Liquity V2 a través de tipos de interés fijados por el usuario para mantener la paridad de USND y responder dinámicamente a situaciones en las que el token está por encima o por debajo de 1,00 $.

Cuando USND cotiza por encima de 1 $, los prestatarios tienden a reducir sus tipos debido al menor riesgo de reembolso, lo que hace que pedir prestado más y mantener USND sea menos atractivo. Esto ayuda a corregir el precio a la baja.

Por el contrario, cuando el USND cotiza por debajo de 1 $, los arbitrajistas iniciarán los reembolsos para restablecer la paridad. La exposición de los prestatarios al riesgo de reembolso les lleva a aumentar los tipos de interés, lo que impulsa la demanda de USND (y de depósitos de ganancias) y empuja su precio al alza.
![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FOPagS0zx2PSCiAFmH8Uq%252Flight%2520-%2520BOLD%2520peg%2520mechanism.png%3Falt%3Dmedia%26token%3Dfcc3163a-a96d-4085-a1ea-d5c4606ab3b7&width=768&dpr=4&quality=100&sign=37ed4c8c&sv=2)

### ¿Cómo puedo obtener rentabilidad con Nerite?

* Depósitos en el Fondo de Estabilidad (Ganar): Obtenga ingresos de protocolo depositando USND en los distintos fondos de estabilidad.
* Liquidez incentivada por protocolo (PIL): Suministre liquidez para USND en los DEX externos incentivados.
* Stake NERI (próximamente): Acumule poder de voto sobre los incentivos de liquidez apostando NERI. Además de dirigir los ingresos, los apostadores de NERI pueden recibir sobornos (sujetos al voto de gobernanza) de terceros como bonificación adicional.

### ¿De dónde procede el rendimiento de los depósitos del Fondo de Estabilidad?

El rendimiento procede de tres fuentes:

1. **Pago de intereses**: Cada mercado prestatario destina el 75% de sus ingresos a sus depositantes del Fondo de Estabilidad (participantes que obtienen rendimientos, anteriormente llamados 'Earners'). Se paga en USND.
2. **Comisiones de liquidación**: Sus USND se utilizarán para liquidar préstamos insuficientemente garantizados, comprando efectivamente su garantía con un descuento del \~5%. Esto se paga en ETH (apostado).
3. **Incentivos inflacionarios**: Los tokens NERI se añaden como una recompensa inflacionaria adicional a los depositantes.

Todo el rendimiento es totalmente sostenible, escalable y «real», sin emisiones de tokens ni bloqueos.

### ¿Existe un periodo de bloqueo?

No hay periodo de bloqueo. Los usuarios son libres de retirar sus depósitos USND del Fondo de Estabilidad cuando lo deseen.

### ¿Cuál es el rendimiento estimado de las ganancias?

El rendimiento es una representación de los tipos que pagan los prestatarios. Dado que el 75% de los pagos de intereses de los prestatarios se destina a Earn, el rendimiento efectivo puede superar el tipo de interés medio pagado en un mercado de empréstitos si menos del 75% de la oferta de USND se deposita en el respectivo fondo de estabilidad. Esta amplificación del rendimiento diferencia a Liquity V2 y Nerite de sus competidores y de los mercados monetarios, en los que los tipos de interés de los préstamos no pueden ser superiores a los de los empréstitos.

Consulte los tipos históricos de Liquity V2 [aquí](https://dune.com/liquity/liquity-v2#interest-rates).

### ¿Por qué hay varios Fondos de Estabilidad?

Los objetivos son:

* Establecer mercados de préstamos separados para diferentes activos de garantía con sus propios tipos de interés regidos por el mercado, utilizando el respaldo del Fondo de Estabilidad para dividir dinámicamente los reembolsos entre las garantías disponibles (enlace a «Reembolso»).
### Compartimentar al máximo los riesgos al depositar en los respectivos Fondos de Estabilidad (Earn), dando a los depositantes el control sobre a qué activos de garantía quieren exponerse en caso de liquidaciones.

### ¿Cómo han evolucionado los Fondos de Estabilidad en los sistemas basados en Liquidez como Nerite, de Liquidez V1 a V2?

En la V2, el concepto de fondos de estabilidad se amplía para dar cabida a múltiples Liquid Staking Tokens (LST), cripto tokens Vanguard, así como ETH como garantía, y manteniendo los ingresos por intereses y liquidaciones dentro del respectivo mercado de préstamos (garantía). Cada activo de garantía tiene así su propio Fondo de Estabilidad para distribuir el rendimiento a los depositantes de USND.

Además, los tipos de interés fijados por el usuario en V2 influyen en la dinámica de rendimiento para los depositantes de los Pools de Estabilidad (Earn), ya que el rendimiento es ahora totalmente sostenible y proviene de los tipos de interés fijados por el usuario (en USND) en lugar de las emisiones de tokens.

### ¿Cómo difieren los riesgos para los distintos Pools de Estabilidad?

Los usuarios pueden depositar sus stablecoins en el Fondo de Estabilidad de su elección, de acuerdo con sus preferencias de riesgo y los tipos de garantía a los que se sienten cómodos exponiéndose. Al seleccionar pools asociados a una garantía específica, los participantes pueden adaptar su exposición al riesgo y su perfil de recompensa potencial.

Al ofrecer agrupaciones separadas para distintos tipos de garantías, el sistema permite a los usuarios elegir su exposición en función del riesgo percibido y la rentabilidad potencial de cada LST o ETH. Esta compartimentación ayuda a gestionar el riesgo sistémico, garantizando que los impactos de las liquidaciones en una clase de activos no afecten desproporcionadamente a todo el ecosistema.

Es importante señalar que todos los titulares de USND, incluidos los depositantes, siguen dependiendo de USND para mantener su vinculación, permaneciendo expuestos a todos los LST y ETH.


:::tip
Actualmente se está desarrollando una bóveda de agregación Stability Pool, para simplificar esto.
:::
