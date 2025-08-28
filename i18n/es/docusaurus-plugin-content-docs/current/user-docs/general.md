---
sidebar_position: 1
---


# General

### ¿Qué es Nerite?
Nerite es un protocolo de préstamo descentralizado que permite a los usuarios depositar ETH, LST y ARB como garantía y acuñar la moneda estable USND a un tipo de interés elegido por los depositantes. Nerite es una bifurcación amigable basada en Liquity v2.

### Los principales casos de uso de Nerite son:

- Pedir prestado USND
- Multiplicar con un solo clic la exposición a los activos de garantía
- Obtener rendimiento depositando USND en el fondo de estabilidad o cultivando en otros lugares
- Apostar NERI para dirigir PLI (incentivos de liquidez del protocolo) y obtener recompensas
- Transmitir USND como suscripción, salario, subvención o cualquier otro tipo de pago

Para entender Nerite, es útil comprender [Liquity](https://www.liquity.org)

> Liquity V1 era un protocolo de préstamo inmutable que permitía a los usuarios obtener préstamos al 0 % de interés sobre su ETH para recibir $LUSD. Durante los últimos 4 años, ha demostrado su resistencia en diversas condiciones de mercado. 
> 
> Liquity V2 es la siguiente iteración de los préstamos, que permite a los usuarios establecer su propio tipo de interés y utilizar más tokens como garantía.


### Liquity V1 frente a Liquity V2
| Similitudes | Diferencias  |
|--|--|
|Inmutabilidad  |  Tipos de interés establecidos por el usuario: mayor control sobre el coste de los préstamos. |
|Descentralizado| Nuevos tipos de garantías: ETH, rETH, wstETH|
|Seguridad rigurosa|Mecanismo de rescate mejorado (el tipo de interés más bajo se rescata primero)|
|El rescate de monedas estables por garantías subyacentes mantiene la paridad de 1,00 $ pase lo que pase| Los troves ahora son transferibles|
|Solo ETH Mainnet|El código de la V1 era gratuito y de código abierto (FOSS), mientras que con la V2, Liquity tendrá su código establecido como una licencia de código fuente comercial (BUSL)|

### Nerite vs Liquity V2
| Similitudes | Diferencias  |
|--|--|
| Inmutabilidad|Solo ETH Mainnet (Liquity V2) frente a solo Arbitrum (Nerite) |
|Descentralización| **Garantías adicionales:** sfrxETH, weETH, tETH, tBTC, COMP y ARB|
|El rescate de monedas estables por garantías subyacentes mantiene la paridad de 1,00 $ pase lo que pase| Nerite añade streaming: USND se puede transmitir a cualquier velocidad utilizando  [Superfluid](https://www.superfluid.finance/). Paga a cualquiera cada segundo.|
|Seguridad compartida de bifurcaciones amigables |El ARB depositado en el protocolo puede ser delegado por la gobernanza de Nerite.|
||Nerite añade características de seguridad adicionales para permitir otras características, como los límites de deuda|
|||\

## ¿Tiene Nerite gobernanza?
Nerite está sujeto a una gobernanza mínima cuya única tarea es distribuir los incentivos de liquidez del protocolo (PIL), destinar el 25 % de los ingresos del protocolo a iniciativas externas, delegar ARB y actualizar los límites de deuda colateral. La gobernanza nunca puede cambiar el reparto de comisiones, actualizar los parámetros del protocolo, acuñar nuevas monedas estables ni nada por el estilo.