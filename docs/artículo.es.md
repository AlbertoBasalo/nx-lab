# Optimizando la Arquitectura de Grandes Aplicaciones Web con Angular

> Optimizando proyectos monolíticos con librerías.

En el apasionante mundo del desarrollo web con Angular, nos encontramos con desafíos al enfrentarnos a proyectos monolíticos en crecimiento. Este artículo explora tres problemas comunes y presenta una solución razonable para mejorar la eficiencia y la flexibilidad en el desarrollo de aplicaciones web de gran escala.

## Desafíos de los Proyectos Monolíticos

### - Tiempo de Compilación y Ciclo de Pruebas:

Con el crecimiento del código en un único proyecto, nos enfrentamos a un aumento en el tiempo de compilación y una ralentización del ciclo de pruebas. Esto puede impactar negativamente en la **productividad** y la capacidad de respuesta del equipo de desarrollo. Incluso llevar al desestimiento en la adopción de pruebas durante el desarrollo.

### - Arquitectura Module-less:

La nueva arquitectura sin módulos de las recientes versiones de Angular facilita mucho el desarrollo y reduce la barrera de entrada de nuevos programadores. Pero, al eliminar la frontera que aportaban los módulos, puede generar un **caos** en el que cualquier artefacto es visible en toda la aplicación.  Esto permite crear dependencias complicadas de seguir y dificulta la implementación de arquitecturas de software sólidas.

## La Solución: Librerías Especializadas con Angular

La propuesta para superar estos desafíos se basa en la creación de librerías especializadas, reemplazando la función de los antiguos módulos pero con mayor flexibilidad y eficiencia.

### + Desarrollo Conducido, o Respaldado, por Pruebas:

Cada librería puede compilarse y probarse de manera independiente. Incluso con herramientas específicas según su contendio y base tecnológica. Esto facilita el desarrollo y acelera los ciclos de feedback.

### + Abstracción y Ocultamiento de Detalles:

Cada librería expone funcionalidades mientras oculta los detalles de implementación.  Esta es una buena práctica, ampliamente probada, que simplifica el refactoring y facilita la detección de problemas.

### + Reglas de Dependencias:

Se pueden establecer reglas de dependencias entre librerías, permitiendo la creación de jerarquías conformes con las arquitecturas de software más comunes, como *layered* o *clean architecture*.

### + Preparado para el Futuro:

La estructura propuesta facilita la adaptación a arquitecturas ***Micro-front-end\*** y la convivencia con otras tecnologías o versiones de Angular a largo plazo.

## Herramientas Recomendadas: Nx.dev

Para implementar esta arquitectura, se pueden utilizar las herramientas estándar de Angular y plugins para es-lint como [Sheriff](https://github.com/softarc-consulting/sheriff). 

Sin embargo, en la actualidad, recomiendo el uso de las herramientas de [Nx.dev](http://nx.dev/), que mejoran significativamente la experiencia del desarrollador.

### Ejemplo Práctico: Laboratorio en GitHub

Puedes explorar un ejemplo práctico en mi laboratorio en GitHub: [Nx Lab Repository](https://github.com/AlbertoBasalo/nx-lab). El repositorio detalla los [comandos de Nx utilizados](https://github.com/AlbertoBasalo/nx-lab/blob/main/docs/CLI.md) para la generación del workspace y todas las librerías.

Este es el resultado en VSCode del mono-repositorio multi-proyecto del ejemplo.





![img](https://media.licdn.com/dms/image/D4D12AQE_2E2KNk8YGA/article-inline_image-shrink_400_744/0/1703160780218?e=1708560000&v=beta&t=o133xrhxdQs6LeYbwLYujyYLwjeo9D_MvQGjynrDlL0)

Árbol de carpetas del repositorio.

### Estructura Recomendada y Límites de Dependencia

He partido de la estructura de carpetas propuesta para aplicaciones de tamaño medio presentada en mi anterior artículo: [Estructura de archivos y carpetas para aplicaciones Angular](https://www.linkedin.com/pulse/estructura-de-archivos-y-carpetas-para-aplicaciones-angular-basalo-3vcff/?trackingId=eDNnrQ1xQHeRCl%2BOfLZkkw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_publishing_post_edit%3BUbfI8YVjRy2rQQa33Q007Q%3D%3D).

Presta especial atención a la sección donde se establecen los [límites de dependencia entre proyectos](https://github.com/AlbertoBasalo/nx-lab/blob/main/docs/CLI.md#module-boundaries), facilitados por las herramientas de Nx.



![img](https://media.licdn.com/dms/image/D4D12AQGXUXYgeNOg9g/article-inline_image-shrink_400_744/0/1703156412180?e=1708560000&v=beta&t=MpHwT9f6_sG0Qdmc56vOv9miJGMhlLA4bIBhd3vd_uk)

Diagrama que diferencia entre arquitectura monolítica vs modular

## Granularidad de las Librerías

Al crear librerías, la granularidad es clave. Puedes comenzar con tres grandes librerías: ***core, routes y shared\***, pero es recomendable dividirlas aún más según las necesidades del proyecto.

### Librería por Ruta Principal:

Se recomienda tener una librería por cada ruta principal, facilitando la gestión y mantenimiento. Desde aquí puedes continuar con la navaja y cortando una rebanada para cada página. 

Incluso, puedes tratar cada ruta funcional como una mini aplicación, con sus librerías especializadas en *UI, Domain y Data services*.

### División de lo Compartido:

Lo que sí te recomiendo es que al menos subdividas el contenedor compartido. Para empezar, extrae funcionalidades como el *log o la seguridad*, siguiendo el principio de mantener soluciones cohesionadas y, potencialmente, reutilizables.

## División Tecnológica y Pruebas Especializadas

Hasta aquí he fomentado la división, o agrupación si prefieres verlo en positivo, por funcionalidad. Es lo que comunmente se llama *vertical slicing*. Pero tambien hay la posibilidad de reflejar físicamente en librerías la división técnica, el *horizontal layering.*

Ambas se puede representar en una tabla de como este ejmplo simplificado. Resaltando la dirección de dependencias permitidas y restringidas a nivel de [reglas eslint](https://github.com/AlbertoBasalo/nx-lab/blob/main/docs/CLI.md#module-boundaries).



![img](https://media.licdn.com/dms/image/D4D12AQG3kcMFb6DVVQ/article-inline_image-shrink_400_744/0/1703160268078?e=1708560000&v=beta&t=uQTEKBMlhwpms228Ma250Eb_V6WqnkHCWJPSqxqTkYU)

División horizantal (tipo técncio) y vertical (ambito funcional)



Las divisiones tecnológicas son interesantes al permitir el uso de herramientas más específicas, especialmente en el ámbito del **testing**. Por ejemplo, algunas librerías pueden centrarse en componentes, mientras que otras prescinden de cualquier relación con el *framework*.

### Pruebas Visuales con Cypress:

Las librerías especializadas en la capa de presentación esencialmente exponen componentes Angular. Porbar la UI de forma unitaria tradicional suele ser un dolo de muelas. 

Pero desde hace un tiempo pueden ser probadas visualmente y de manera amigable con Cypress. Con a aparición del component-testing nos han  proporcionando una experiencia de desarrollo eficiente y, sobre todo, agradable. 

### Librerías Puras para Datos y Lógica de Negocio:

Extraer definiciones de datos y lógica de negocio a librerías puras, sin contaminación de ningún *framework*, permite el uso de herramientas de prueba unitaria estándar y potencialmente reutilizables entre tecnologías. 

Y por supuesto, son el núcleo de arquitecutras limpias, en el caso de que optes por ello. En mi experiencia, la mayoría de los desarrollos front-end no las llevan al extremo por la complejidad de la abstracción y la inversión de dependencias que requieren. 

Pero, al menos,  esta visión del dominio como algo independiente del framework aunque sólo sea para *DTOs, entidades o funciones,* es de enorme utilidad cómo marco mental.

## Validación en Proyectos de Gran Escala

En mi experiencia como formador y consultor he visto que esta solución ha sido probada en el desarrollo de proyectos de grandes empresas. 

Demuestra una escalabilidad efectiva para cualquier tamaño o arquitectura deseada, incluyendo **Micro-front-end y clean architectures**. 

Al mismo tiempo, conserva los conceptos simples de aplicaciones más pequeñas: ***core, routed y shared.\***

Espero que estas ideas contribuyan a la claridad y efectividad de tus desarrollos. ¡Si hay algo más en lo que pueda ayudar o deba corregir, házmelo saber!

Salud y suerte.

[**Alberto Basalo.**](https://albertobasalo.dev/)

*Elevating code quality.*
