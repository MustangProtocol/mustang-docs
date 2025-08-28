---
title: Streaming
---

# Streaming
Nerite tiene el protocolo [Superfluid](https://superfluid.org/) incorporado--USND es un "[Super Token puro](https://docs.superfluid.org/docs/concepts/overview/super-tokens#pure-super-tokens)" que soporta streaming. Esto significa que puede realizar pagos USND en tiempo real y de forma continua. Cuando abres un flujo, USND se envía linealmente en el tiempo hasta que editas o cierras el flujo con otra transacción. Puede enviar 0,000001 $ por segundo durante dos semanas, 5 $ al mes durante un año, 100 $ por hora indefinidamente... Tú decides. 


:::tip
USND es la primera moneda estable en tiempo real.
:::

## Crear una corriente
Nuestra interfaz de usuario completa para esto está en desarrollo. Echa un vistazo a la [Superfluid App](https://app.superfluid.org/) para acceder a esta función ahora. 

## Recibir un Stream
No tienes que hacer nada para aceptar un stream, y el saldo de tu monedero aumentará en tiempo real cuando alguien te envíe un stream. No se necesitan carteras especiales ni nada parecido, ya que USND es un token ERC-20 normal. 

Los streams no dependen de los tiempos de bloque ni del secuenciador L2.

## Ejemplos de casos de uso
Los flujos superfluidos (streams, pagos continuos en tiempo real) ofrecen nuevas y emocionantes posibilidades para el dinero programable:
- Anualidades que pagan el rendimiento ganado en una posición linealmente para siempre.
- Suscripciones en cadena (Onchain). Ejemplo: flujo de 25 dólares linealmente durante un mes para mantener el acceso a contenidos o servicios (y cancelar en cualquier momento).
- Subvenciones por hitos. En lugar de conceder el importe íntegro de la subvención por adelantado, transmita el importe a lo largo de un periodo de tiempo mientras se espera que se alcancen hitos.
- Préstamos que se amortizan a sí mismos transfiriendo el rendimiento de una garantía para amortizar la deuda. 

¿Está construyendo uno de estos? Házselo saber a nuestro equipo: ¡queremos ayudarte!

:::tip
Estamos trabajando en varias funciones y servicios relacionados con el streaming construidos sobre Nerite. 
:::
