---
sidebar_position: 4
---


# Redenciones y delegación

### ¿Qué son los reembolsos?

Los reembolsos sirven al propósito crucial de mantener el USND vinculado al valor del dólar, creando un precio mínimo en torno a 0,9945 $. Lo hacen de forma descentralizada sin depender de activos centralizados, oráculos o terceras partes.

Un canje es esencialmente cambiar USND por ETH/LST a su valor nominal, como si 1 USND valiera exactamente 1,00 $. Los canjes pueden ser iniciados por cualquiera, pero sólo son rentables cuando USND es inferior a 1 $.

El canjeador envía USND al protocolo y a cambio obtiene una mezcla de WETH, wstETH y rETH (menos la comisión de canje). La cantidad canjeada se divide entre los diferentes activos de garantía en función de su respaldo actual del Fondo de Estabilidad (para más información, véase [enlace](#cómo-se-determina-la-división-de-la-garantía)).

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252F0XdFvKy05sdM3JClXcI5%252Flight%2520-%2520BOLD%2520individual%2520redemption.png%3Falt%3Dmedia%26token%3D3037c032-5464-4614-b206-d9d5157c0228&width=768&dpr=4&quality=100&sign=abb38c31&sv=2)

Los reembolsos parten del prestatario que paga menos intereses.

Más información sobre cómo [protegerse](#cómo-puedo-mantenerme-protegido) de los reembolsos y qué ocurre si [le reembolsan](#qué-sucede-si-mi-trove-es-reembolsado).

También puedes ver este [vídeo de 9 minutos](https://www.youtube.com/watch?v=CQVmjFx987A) sobre la redención

### ¿Qué ocurre si dos Troves tienen el mismo IR?

En este caso, se aplica el principio «Último en entrar, primero en salir» (LIFO, por sus siglas en inglés), lo que significa que el Trove (posición individual de préstamo) que haya fijado su tipo de interés más recientemente será reembolsado primero.

### ¿Cuándo pueden producirse los reembolsos?

Un rescate puede ocurrir en cualquier momento, pero probablemente sólo ocurrirá cuando sea rentable hacerlo. Este suele ser el caso cuando el precio del USND es inferior a 1 $ (menos la comisión de reembolso vigente).

### ¿Quién puede iniciar un canje?

Cualquier dirección Ethereum puede iniciar un canje, siempre que tenga una cantidad suficiente de USND para hacerlo. Sin embargo, se espera que los canjes sean realizados principalmente por bots (programas automatizados) profesionales y no por personas.

### ¿Qué ocurre si se canjea mi Trove?

Puedes pensar en los reembolsos como si otra persona estuviera pagando tu deuda y recuperando una cantidad equivalente de tu garantía a cambio.

Si su garantía (ETH o LST) es canjeada, se devuelve una cantidad equivalente de su deuda en USD. El canjeador recibe su garantía, menos la comisión de canje, que permanece en su Trove (posición individual de préstamo). Esto significa que en el momento del rescate usted no ha perdido dinero en USD, e incluso es probable que haya obtenido una pequeña ganancia con la comisión de rescate recibida a medida que se recupera la paridad.

Ejemplo con ETH a 3'000$:

* Antes del rescate: 10 ETH de garantía, 20'000 USND de deuda.
* Después del rescate: 5.025 ETH de garantía, 5'000 USND de deuda.

Verás que tu garantía y tu deuda se reducen por igual (en USD) y que la comisión de reembolso (0,025 ETH) se añade al valor de tu garantía.

Los Troves parcialmente afectados cuya deuda se mantiene por encima del umbral mínimo de deuda de 2000 USND continúan funcionando como antes, mientras que los Troves cuya deuda se reduce a una cantidad menor (o 0) cambian a un modo de funcionamiento inactivo (ver más abajo para [más](#qué-ocurre-cuando-los-canjes-causan-que-la-deuda-de-un-trove-quede-por-debajo-de-la-cantidad-mínima) información).

### ¿Cómo funcionan los reembolsos con tres activos de garantía?
![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FJtx0jgGBkGisNExyXZ5a%252Fredemption%2520split%25202.png%3Falt%3Dmedia%26token%3D79f895c0-290c-41e9-9aeb-b3fa5a3709f5&width=768&dpr=4&quality=100&sign=17e818d8&sv=2)

A diferencia del LUSD, el USND está respaldado por multitud de activos de garantía. En lugar de dejar que el rescatador elija libremente la garantía que desea rescatar, Liquity V2 y Nerite optimizan el proceso en aras de la seguridad económica. De este modo, los reembolsos se realizan mediante una combinación de garantías que mejora el respaldo global de USND.

El proceso comienza cuando los Troves pagan los tipos de interés más bajos en cada mercado de activos de garantía y continúa hasta que el importe total de USND se intercambia por activos de garantía. Los reembolsos pueden ser parciales o totales, como se ilustra a continuación.

En este ejemplo, el mercado rETH muestra un rescate total del primer Trove y un rescate parcial del segundo. Los mercados wstETH y ETH presentan un rescate parcial y dos completos, respectivamente

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FJtx0jgGBkGisNExyXZ5a%252Fredemption%2520split%25202.png%3Falt%3Dmedia%26token%3D79f895c0-290c-41e9-9aeb-b3fa5a3709f5&width=768&dpr=4&quality=100&sign=17e818d8&sv=2)

### ¿Cómo se determina la división de garantías?

La división es dinámica, optimizando la seguridad económica del sistema. La lógica es sencilla: cuanto más arriesgada es una garantía, más volumen de rescate se dirige a ese mercado. En otras palabras, si el Fondo de Estabilidad de un mercado es relativamente pequeño en comparación con su deuda total, se considera más arriesgado, ya que existe una mayor probabilidad de que se produzcan impagos en acontecimientos extremos.

Para mitigar este riesgo, el sistema amortiza proporcionalmente a la «deuda externa» de cada tipo de garantía. Esto se calcula como la deuda total prestada contra una garantía específica menos el tamaño del Fondo de Estabilidad para ese mercado prestatario.

He aquí un ejemplo: dados unos importes de deuda externa de 100 USND, 50 USND y 100 USND respectivamente, un reembolso dará lugar a un reparto del 40% (WETH), el 20% (wstETH) y el 40% (rETH).



![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FjSQv4scadWPAaEtb0whz%252Fredeem2.png%3Falt%3Dmedia%26token%3D6b7dc320-1b97-4cd7-9ad1-1afbbb7c70fe&width=768&dpr=4&quality=100&sign=eeabe72d&sv=2)

### ¿Existe una comisión de reembolso?

Sí. La mecánica de la comisión de reembolso es en líneas generales la misma que en Liquity V1, pero con una parametrización adaptada que da lugar a una caída más rápida de la comisión. La comisión de reembolso se toma como una parte del total de ETH/LST retirados del sistema en un reembolso. Al contrario que en Liquity V1, la comisión no va a parar a los creadores de LQTY, sino que se queda en manos de los usuarios como parte de su garantía.

Las comisiones de reembolso se basan en la variable de estado «baseRate», que se actualiza dinámicamente. La «tasa base» aumenta con cada canje y decae exponencialmente en función del tiempo transcurrido desde el último canje (vida media de 6 horas).

En cada canje de x USND: `baseRate` decae en función del tiempo transcurrido desde el último evento de canje y se incrementa en una cantidad proporcional a la fracción del suministro total de USND que se va a canjear, es decir, `x/total_suministro_negrita`.

El porcentaje de la comisión de reembolso viene dado por `min (0,5% + baseRate, 100%)`.

<figure>![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FoS6SRJ41pw82HYtf9Wd2%252Fredem.png%3Falt%3Dmedia%26token%3D244f49b2-3587-4d26-bb9e-b90b9713361d&width=768&dpr=4&quality=100&sign=59cf6c&sv=2)<figcaption><p>The redemption fee (red line) follows this dynamic over time as redemptions occur (blue bars).</p></figcaption></figure>

### ¿Cómo puedo estar protegido?

El riesgo de rescate depende de dos factores: el tipo de interés que usted fije y el precio de los USND.

**El tipo de interés** que establezca determina cuántos USND deben canjearse antes de que le toque a usted.  Cuanto más alto sea tu tipo de interés, más USND podrás canjear antes que a ti, y viceversa.

Puedes ver esto en cualquier frontned, en el ejemplo de abajo el número es 41M.

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FHkqGvdaJxndhC8uhzLw0%252Frerwere.png%3Falt%3Dmedia%26token%3D796599d0-6785-4cd2-ad6a-bad02d062f45&width=768&dpr=4&quality=100&sign=c26f7d49&sv=2)

Esto significa que 41M USND deben ser retirados del sistema antes de que le llegue a usted. Sin embargo, este número es relativo, y también hay que tener en cuenta la actividad de reembolso reciente. Aunque los acontecimientos pasados no garantizan resultados futuros, pueden servir de guía útil.

Por ejemplo, si sólo se han canjeado 200.000 USND en la última semana, estará comparativamente más seguro que si se han canjeado 15 millones.

**El precio del USND** es el segundo factor crucial. Cuando cotiza por encima de 1 $, los reembolsos dejan de ser rentables y deberían cesar. Si la demanda de USND es fuerte, podría mantener un precio superior a 1 $ durante un periodo prolongado.

En esos momentos, puede reducir cómodamente el tipo de interés que paga sin aumentar el riesgo de rescate.

### ¿Qué es la delegación de tipos de interés?

La delegación del tipo de interés es una función de Liquity V2 y Nerite que permite a los prestatarios delegar la gestión de su tipo de interés en un tercero. Esto les permite crear una posición pasiva, sin intervención, al tiempo que mantienen un tipo competitivo y un bajo riesgo de amortización.

Existen tres tipos de delegaciones:

* A un tercero gestor: Una entidad especializada que proporciona estrategias predeterminadas para lotes de múltiples Troves y cobra una comisión por el servicio.
* A una estrategia contractual automatizada y descentralizada: Una estrategia predefinida que gestiona los tipos de interés de forma autónoma.
* A su propio monedero: Delegue en un monedero caliente cuando esté de vacaciones, o en un amigo.

Es importante señalar que una estrategia delegada o contractual no puede hacer otra cosa que fijar el tipo de interés en un rango predeterminado, lo que limita considerablemente los riesgos de los prestatarios.

Así pues, los prestatarios deben vigilar la horquilla del tipo de interés y la frecuencia máxima de actualización (pertinente en caso de ajustes prematuros) preestablecida por el gestor.

### ¿Quiénes son los actuales delegados activos de tipos de interés? <a href="#docs-internal-guid-441d8c3f-7fff-4efa-6319-4ba00d908597" id="docs-internal-guid-441d8c3f-7fff-4efa-6319-4ba00d908597"></a>

Coming soon.

| Entidad | Activo de garantía | Dirección del delegado | Descripción |
| ------- | ------------------ | ---------------------- | ----------- |

Tenga en cuenta que ni Liquity AG ni Nerite son responsables de las acciones de los delegados. Por favor, investigue por su cuenta.

### ¿Qué ocurre si hay problemas con el contrato inteligente para delegar tipos de interés?

Su Trove no se vería afectado - lo único que se vería afectado es el tipo de interés al que está fijada su posición.

### ¿Por qué los reembolsos no son una característica tanto de LTV como del tipo de interés, sino sólo del tipo de interés?

Dado que la razón de ser de los reembolsos es disminuir la oferta de USND en respuesta a la reducción de la demanda, y que los tipos de interés impulsan la demanda, el tratamiento de los reembolsos basado en el tipo de interés es una palanca más sostenible y eficaz para alcanzar el equilibrio del mercado. Gestionar activamente tanto el tipo de interés como la LTV debilitaría la capacidad de aplicar tipos de interés y rendimientos de depósitos a nivel de mercado, a la vez que complicaría el proceso para el sistema y sus usuarios.

### ¿Cuál es la diferencia en las comisiones de reembolso aplicadas entre Liquity V1 y Nerite? 
En v2, cuando los prestatarios se ven afectados por reembolsos, la comisión de reembolso cobrada al reembolsador se queda en los Troves afectados en lugar de desviarse como en Liquity.

Así, en Liquity la `pérdida_prestatario = comisión_redención + ganancia_redención`, mientras que en USND es `pérdida_prestatario = ganancia_redención`.

### ¿Qué ocurre cuando los reembolsos hacen que la deuda de un Trove caiga por debajo del importe mínimo?

Si la cantidad amortizada supera la deuda de un Trove afectado, no se cierra como en Liquity V1, sino que permanece abierto con 0 deuda USND y la garantía restante. El propietario de un trove totalmente amortizado puede cerrarlo retirando la garantía restante, o pedir prestado de nuevo para elevar su deuda por encima del mínimo de 2000 USND, completando su garantía si es necesario.

En el caso de que la cantidad amortizada de un trove no supere la deuda de un trove, pero lo deje entre 0 y 2000 USND, el trove permanecerá abierto con la deuda restante y la garantía restante. El propietario del Trove puede cerrarlo pagando la deuda restante y retirando la garantía restante, o pedir un nuevo préstamo como se ha descrito anteriormente.

### Cómo canjear USND por colateral (mezcla de ETH, rETH y wstETH) usando Etherscan

**Paso 1

Para canjear USND primero tienes que dar al contrato CollateralRegistry una aprobación para usar tu USND usando la función approve() del contrato de tokens USND.

Después de conectar su monedero a través de "Connect to Web3", configure
spender a `CollateralRegistry address` y que la cantidad sea al menos tan alta como la cantidad que desea canjear, añadiendo 18 ceros.

**Ejemplo para 1000 USND:**

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FyfWVv0gTWqCfg3YWYder%252Fred1.png%3Falt%3Dmedia%26token%3Dc05978b8-7946-4828-b81c-e7256bfeb0ce&width=768&dpr=4&quality=100&sign=b9753e68&sv=2)

**Paso 2:
Ahora puede canjear USND mediante el contrato «CollateralRegistry»:

[(inserte la dirección de CollateralRegistry (registro de garantías) después de la implementación)](#)Simplemente introduzca la cantidad de USND a canjear, el porcentaje de la comisión de canje que está dispuesto a aceptar y el número máximo de iteraciones de lista por garantía (limita el número de Troves (posiciones) cuya deuda puede ser reembolsada en cada sucursal).

Nota: La comisión de reembolso debe ser superior a la comisión actual.

**Ejemplo**

`_boldAmount:` importe a reembolsar \* 1e18

`_maxIterationsPerCollateral:` 0

`_maxFeePercentage:` 1% \* 1e16, es decir 1000000000000000000

![](https://docs.liquity.org/~gitbook/image?url=https%3A%2F%2F2342324437-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE2A1Xrcj7XasxOiotWky%252Fuploads%252FcVvVXORMhz0UPk0QHMW0%252Fred2.png%3Falt%3Dmedia%26token%3Dd1be9844-ce90-415a-b35e-a276003532ce&width=768&dpr=4&quality=100&sign=9a897da2&sv=2)
