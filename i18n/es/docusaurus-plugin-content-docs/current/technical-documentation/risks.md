---
sidebar_position: 6
---

# Auditorías y divulgación de riesgos

Divulgación detallada de los riesgos del protocolo y consideraciones para el usuario. El código Nerite ha sido auditado varias veces por empresas de primera línea.

## Riesgo contractual

Los contratos subyacentes de Liquity son auditados y seguros. El protocolo Nerite es una bifurcación de Liquity y hereda la mayoría de los mismos riesgos y consideraciones de seguridad, pero con varias diferencias.

Los contratos del protocolo Nerite (y todos los cambios de los contratos principales de Liquity) son auditados por Sherlock, 0xSimao y otros auditores independientes.

Auditorías Nerite:
- [Informe: auditoría de Sherlock con 0xSimao](https://drive.google.com/file/d/1knlIgoEGv5x33n9mhTLRqJe8T55r3HCy/view?usp=sharing)
- Nerite también se sometió a pruebas exhaustivas con pruebas de vulnerabilidad automatizadas con [Octane](https://octane.security/), con informes disponibles para cada pull request en nuestro Github.


## Riesgo de centralización

### Nerite Gobernanza
El protocolo Nerite está diseñado para ser lo más descentralizado e inmutable posible. Los únicos parámetros en el protocolo que pueden ser actualizados o cambiados por el gobierno Nerite son:
1. 1. Límites de deuda para cada tipo de garantía, que pueden ser reducidos en cualquier momento pero sólo aumentados en un factor de 2x con un bloqueo temporal de 7 días.
2. A dónde dirigir el 25% de las tasas de protocolo. 

El gobierno de Nerite NO puede añadir nuevos tipos de garantías. 
El gobierno de Nerite NUNCA puede acuñar USND.
El gobierno de Nerite NO puede cambiar el porcentaje de comisiones que se destinan al fondo de estabilidad.

### Arbitrum Red
Arbitrum es una red descentralizada, pero sigue dependiendo de un mecanismo de actualización de emergencia. Para obtener más información sobre esto, consulte el rastreador [L2 Beat](https://l2beat.com/scaling/projects/arbitrum) para la descentralización de Arbitrum.

### Colaterales

Es posible que algunos tokens colaterales puedan ser actualizados por las respectivas DAOs o grupos en el futuro. Se han elegido límites de deuda conservadores y ratios de sobrecolateralización para limitar los riesgos de que esto plantee algún problema.











