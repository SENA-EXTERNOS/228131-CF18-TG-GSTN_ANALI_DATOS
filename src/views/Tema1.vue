<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a pruebas de #[em software]
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right") 
        p Las pruebas de #[em software] son una serie de procesos que buscan poner a prueba los sistemas o aplicaciones en distintos escenarios para determinar su correcto funcionamiento. Se aplican en cualquier fase del desarrollo del #[em software], es decir, desde la etapa de análisis y diseño hasta la etapa de producción. La ejecución de las pruebas de #[em software] se puede realizar de forma automática para establecer la estabilidad de la aplicación; también facilita la identificación de cambios que afectan otras funcionalidades antes de que se prueben.
      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.svg', alt='') 
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  #[em Testing] y calidad de #[em software] 
    p.mb-5(data-aos='fade-right') El testing y el aseguramiento de la calidad, también llamado #[em Quality Assurance] (QA), es un mecanismo para la verificación y validación de las funcionalidades de los programas o aplicaciones de #[em software] con el fin de ofrecer un producto sin defectos o errores.
    .tarjeta.mb-5.p-5(style="background-color: #f5fafe")
      SlyderA(tipo='b')
        .row.justify-content-center.mx-3
          .col-lg-6
            p El propósito final es hacer coincidir los requisitos iniciales con un #[em software] de calidad, lo cual incorpora la integración de herramientas asistidas o automatizadas que permiten la evaluación de las características de interés. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/2.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p El proceso de #[em testing] es paralelo a las etapas de construcción del #[em software] para que las actividades se realicen con calidad en cada una de las fases, se eviten reprocesos y fallas de funcionalidad, previo a la puesta en producción.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/3.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p El #[em testing] es una actividad que demanda tiempo y dinero, sin embargo, si se implementan técnicas efectivas para los procesos de control de calidad, se podrán anticipar a problemas como fallas de arquitectura, funcionalidades incorrectas o inválidas, fallos de seguridad, entre otros.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/4.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Considera el riesgo e impacto que genera para una empresa el retiro de productos del mercado por defectos de #[em software] que ponen en peligro la seguridad de los usuarios. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/5.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Por ejemplo, el fabricante de autos Nissan descubre una falla en los sensores de su sistema de bolsas de aire, esto implica el retiro de todas las unidades de automóviles que presentan este problema. por tanto, los gastos económicos y efectos negativos en su reputación serán de gran impacto (IBM, 2022).
          .col-lg-6: img(src='@/assets/curso/temas/tema1/6.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Cuando en el proceso de construcción del #[em software] se asignan suficientes recursos para la ejecución de pruebas de calidad, los resultados se pueden evidenciar con el aumento en la confiabilidad del mismo y la calidad de los productos finales.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/7.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Dentro de los procesos de testing se encuentran dos conceptos fundamentales: validación y verificación. Estos controlan que el software que se está desarrollando cumpla con las especificaciones y expectativas requeridas por el cliente. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/8.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p La validación y la verificación comparten propósito. La validación vela porque el #[em software] satisfaga los requerimientos, es decir, compara el que está en construcción con los modelos definidos en los requerimientos, a través de sus casos de usos o historias de usuario.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/9.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p La verificación se encarga de controlar que el producto en desarrollo haga lo que tiene que hacer. Un ejemplo cotidiano para ampliar el entendimiento de estos conceptos puede ser el proceso de construcción de una casa, donde antes de empezar a construir se crea un plano o modelo que el cliente revisa para corroborar que cumple con sus expectativas.  
          .col-lg-6: img(src='@/assets/curso/temas/tema1/10.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Esto es la validación. Finalmente, cuando se construye la casa, se realizan constantes comprobaciones del plano para confirmar que está de acuerdo con lo planteado. Esto es la verificación.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/11.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Para mejorar la calidad del #[em software] o servicios desarrollados es necesario entender y conocer al cliente y sus necesidades. La creación de productos con altos niveles de calidad permite aumentar la fiabilidad como desarrollador, disminuir el mantenimiento y soporte e incrementar la satisfacción del cliente (Alfaro & Carrizo, 2021).
          .col-lg-6: img(src='@/assets/curso/temas/tema1/12.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Existen muchas definiciones para #[em testing] y calidad de #[em software], sin embargo, una forma general de definirlo es: hacer #[em testing] es verificar dinámicamente la adaptación del producto o #[em software] a los requerimientos.   
          .col-lg-6: img(src='@/assets/curso/temas/tema1/13.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p En el proceso de #[em testing] se reportan los riesgos para que los desarrolladores los tengan en cuenta y se pueda minimizar la probabilidad de ocurrencia y disminución del impacto, de ahí que riesgos y testing estén relacionados. No hacer #[em testing] durante la construcción de un #[em software] genera vulnerabilidades para el alcance del proyecto.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/14.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p La depuración o #[em debugging] en inglés, es otro concepto fundamental en el #[em testing], que permite a los desarrolladores implantar puntos de interrupción o #[em breakpoint] para analizar el estado del #[em software] en una parte dada del código.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/15.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Con ello se busca encontrar las causas de las fallas y corregirlas sin necesidad de ejecutar la totalidad del #[em software]. La depuración es realizada por los programadores y el #[em testing] por los #[em tester] o probadores de #[em software]; además, el testing expone la existencia de #[em bugs] o errores y la depuración encuentra las causas de las fallas para corregirlas. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/16.png', alt='')
    p.mb-5(data-aos='fade-right') El proceso de calidad de #[em software] garantiza productos con niveles de calidad y eficiencia adecuados para satisfacer las necesidades de los usuarios y minimizar los riesgos y las amenazas que generen impacto negativo.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2 
          span Calidad del #[em software]
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')
              figcaption.mt-5 Referencia. Nota: Reproducida de Calidad del #[em Software]. Tordecilla, D. (2022). Visme. 
          div(x="21.6%" y="17%" tooltip="Abrir" numero="" )
            h4 Reporte de resultados
            p Los reportes de resultados se utilizan para realizar nuevos requerimientos  y mejoras que requiere el producto en su nueva versión.
          div(x="78.5%" y="17%" tooltip="Abrir" numero="" )
            h4 Ejecución de pruebas
            p La ejecución de pruebas es el proceso que permite al probador de #[em software] ejecutar los métodos de prueba para verificar y validar el correcto funcionamiento del #[em software.] 
          div(x="10%" y="49%" tooltip="Abrir" numero="" )
            h4 Entorno de pruebas
            p El entorno de pruebas es el escenario donde se realizan las pruebas. 
              br
              |Debido a la diversidad de los tipos de aplicaciones pueden existir entornos #[em web],  de escritorio, móviles entres otros.
          div(x="90%" y="49%" tooltip="Abrir" numero="" )
            h4 Requerimientos
            p Los requerimientos de #[em software] son una descripción detallada del comportamiento del #[em software], es decir, lo que el usuario espera que haga. Son reglas que siguen los desarrolladores para crear el producto final  y satisfacer las necesidades de los usuarios.
          div(x="21.6%" y="82%" tooltip="Abrir" numero="" )
            h4 Diseño de pruebas
            p El diseño de pruebas consiste en el análisis de los requerimientos existente y el planteamiento de los puntos críticos donde el sistema puede fallar, así mismo la hoja de ruta que deben seguir los  probadores del #[em software] para garantizar el mínimo de errores en el producto final.
          div(x="78.5%" y="82%" tooltip="Abrir" numero="" )
            h4 Creación de pruebas
            p A partir del diseño y planificación de las pruebas se crean los casos de pruebas que permiten determinar si el #[em software] es o no aceptable por los usuarios del sistema.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Principios de las pruebas
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/18.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Los principios de las pruebas sumado con métodos, estándares y herramientas maximizan el performance en la labor del testing, debido a que permiten el diseño de casos de pruebas, la ejecución de pruebas exploratorias y automáticas, entre otras utilidades. A continuación, se describen una serie de principios que fortalecen la actividad de pruebas de software:
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/19.png', alt='')
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-acc")
          div(titulo='Ejecutar pruebas expone las fallas del <em>software</em>')
            p Las pruebas permiten exponer la presencia de fallas en un #[em software], pero no la falta de ellas. Después del reporte de una falla y su sucesiva subsanación, es posible minimizar la probabilidad de que las fallas que no han sido encontradas permanezcan en el #[em software], sin embargo, no se podrá confirmar que un producto está libre de errores. 
          div(titulo='Realizar pruebas exhaustivas no es viable')
            p Con excepción de casos particulares, donde el riesgo de la materialización de una falla tiene un impacto vital, la realización de todas las posibilidades de los datos y funciones de un software comúnmente no es práctico, debido a los altos costos en recursos y tiempo. 
              br
              br
              |En razón a lo expuesto, es conveniente en la etapa de diseño y estructuración de las pruebas de software tener en cuenta la relación de costo/beneficio, sin dejar de enfocarse en verificar las funcionalidades más importantes y de gran impacto para el proyecto.   
          div(titulo='Probar en etapas tempranas')
            p El proceso de testing debe ser paralelo a las fases del desarrollo del software, por lo tanto, realizar pruebas tempranas, preferiblemente en la etapa de análisis y diseño, resulta muy ventajoso porque permite la detección de errores cuando los costos y recursos para su subsanación son bajos en comparación a si se detectan en fases finales, como en la fase de despliegue.
          div(titulo='Agrupación de fallas')
            p Con frecuencia existen módulos o funcionalidades que tienden a presentar más fallas o #[em bugs] que otros. Estos módulos por lo general se agrupan de acuerdo con la regla 80/20, donde se establece que el 80 % de los bugs están relacionados con el 20 % de las mismas causas; es decir, los módulos de un #[em software] están caracterizados por un nivel de relevancia, que permite aplicar estrategias de pruebas para un determinado grupo y priorizar los módulos etiquetados con altas probabilidades de presentar #[em bugs]. 
          div(titulo='Paradoja del pesticida')
            p La ejecución de pruebas repetidas en una misma ubicación o módulo del sistema impide la detección de nuevos #[em bugs], por lo tanto, para aumentar la probabilidad de encontrar nuevos errores se recomienda que el #[em tester] realice la exploración en distintas ubicaciones y la actualización constante de las estrategias y métodos de las pruebas.   
          div(titulo='Las pruebas dependen del escenario')
            p Las estrategias y tipos de pruebas son elegidas dependiendo del sistema y el escenario que se desea verificar. Es decir, una aplicación de tipo comercial no será testeada con los mismos métodos que una aplicación del sector salud. 
          div(titulo='Falacia de ausencia de fallas')
            p Después de corregir las fallas encontradas en un proceso de #[em testing] y de realizar un nuevo recorrido de pruebas sin encontrar #[em bugs] no es posible determinar que el producto sea 100 % útil, por cuanto, esto es medido a través de los parámetros de satisfacción y expectativas de los usuarios.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #d2f3f8")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/tema1/20.svg', alt='')
            .col-lg-10
              p La identificación y aplicación de los principios de las pruebas son útiles para crear y organizar estrategias innovadoras que proporcionan visiones distintas a las implementadas por los desarrolladores al momento de crear las funcionalidades del producto.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Metodología de desarrollo de #[em software] ágil
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/21.svg', alt='')
      .col-lg-8
        p La metodología de desarrollo de #[em software] ágil emerge por el alto volumen de trabajo que tienen las áreas encargadas de codificar y el escaso tiempo para entregar a producción las aplicaciones. Teniendo en cuenta estos factores, la metodología ágil responde de mejor manera a las necesidades del mercado y supera a los métodos tradicionales como la metodología en cascada, donde las entregas son lentas debido a que se sigue un flujo de fase a fase para finalmente llevar un producto a producción, (Ramos et al., 2022). 
          br
          br
          |La implementación de metodologías ágiles además de satisfacer al cliente con entregas tempranas, tiene las siguientes ventajas:  
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Aumentar la velocidad y eficiencia <br> las entregas del producto")
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/22.svg', alt='')
          .col-md-5
            p Con la implementación de metodologías ágiles las organizaciones pueden elevar la velocidad y la eficiencia de los grupos de desarrollo. Considerando que, al dedicarse a entregas parciales en plazos cortos, son menores los tiempos que cuando se tienen entregas totales de un producto. Además, permite mejoras en el versionado del #[em software].
      .py-4.py-md-5(titulo="Incrementar la <br>calidad del software")
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/23.svg', alt='' style="width: 362px").m-auto
          .col-md-5
            p Cuando los desarrolladores interactúan constantemente con el cliente se generan retroalimentaciones que son fundamentales en la calidad del #[em software], de hecho, uno de los objetivos de esta metodología es ofrecer espacios de permanente intercambio.
      .py-4.py-md-5(titulo="Encontrar <em>bugs</em> <br>y evitar fallas")
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/24.svg', alt='')
          .col-md-5
            p Con la aplicación de metodologías ágiles los tester tienen la posibilidad de generar alertas sobre los #[em bugs] casi en tiempo real y con ello se evitan fallas mayores cuando el producto esté más completo.
      .py-4.py-md-5(titulo="Aumentar la <br> satisfacción del cliente")
        .row.align-items-center.justify-content-center
          .col-md-8.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/25.svg', alt='')
          .col-md-4
            p La comunicación permanente entre los desarrolladores y el cliente es percibida como un factor de compromiso con la finalización del proyecto de #[em software].  En efecto, cuando se brinda la opción para que el cliente realice retroalimentación constante, en pro de las mejoraras, el #[em software] estará respondiendo a sus necesidades.
    p.mb-5(data-aos='fade-right') Existen metodologías ágiles cada una con un enfoque particular, sin embargo, todas comparten las ventajas antes mencionadas. A continuación, se exponen algunas de las metodologías más populares y usadas por las organizaciones que se dedican al desarrollo de software. 
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta ")
      div(titulo='Extreme Programing o programación extrema')
        p Metodología también conocida como XP, consiste en la agrupación de reglas que generan agilidad y resiliencia a las organizaciones en la ejecución de los proyectos de software en contextos que son muy variables. Por lo tanto, cuando se aplica una metodología ágil XP se establece como prioridad la entrega del #[em software] final de conformidad con los requerimientos exactos del cliente.
          br
          br
          |Para que la metodología XP sea exitosa debe existir un alto compromiso de las partes involucradas y mucho trabajo en equipo. Es necesario que los requisitos del #[em software] se establezcan al inicio del proceso, para que continuamente se dé tratamiento a las necesidades que vayan surgiendo.
          br
          br
          |Algunas de las propiedades de la metodología XP son: 
        ul.lista-ul--color
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Impulsar el diálogo permanente entre los clientes y el equipo de desarrollo.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Garantizar la flexibilidad en el cronograma del proyecto. 
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Priorizar la reparación de los #[em bugs] de manera rápida y ofrecer respuestas precisas y claras. 
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Centrar la atención en la entrega del #[em software] sobre cualquier otro requisito como manuales o guías. 
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Trabajar con equipos bien estructurados para garantizar el correcto funcionamiento del #[em software.]
        p La metodología XP promueve los cambios constantes en el proyecto de #[em software]. Con ello se busca que al producto se le realicen continuas evaluaciones para mejorar y cumplir los requisitos establecidos por el cliente. 
      div(titulo='Kanban')
        p Es una de las más sencillas y fáciles de implementar en las organizaciones. El método consiste en tener una pizarra visual para clasificar las actividades que se encuentran en los estados de pendiente, en curso o finalizadas.  
          br
          br
          |Kanban emplea seis procedimientos básicos para lograr incrementar la agilidad en el desarrollo de las actividades. Estos procedimientos se deben aplicar y revisar periódicamente para la satisfacción del cliente.
        ul.lista-ul--color
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Exponer todos los objetivos del proyecto. 
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Minimizar el trabajo en proceso para reducir los ciclos.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Controlar los flujos de trabajo del grupo.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Diseñar e implantar directrices y procedimientos de atención al cliente.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Ejecutar reuniones de retroalimentación.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Maximizar la colaboración en los equipos de desarrollo.
      div(titulo='Scrum')
        p Es la metodología ágil más popular y empleada en el desarrollo de software. Está construida por procesos iterativos que se separan en fases regulares que se van incrementado de forma periódica.
          br
          br
          |El propósito principal de la metodología Scrum es la satisfacción de las necesidades de los clientes, basándose en los principios de transparencia, avances permanentes y responsabilidad de equipo. A diferencia de otras metodologías ágiles tienen varios roles para lograr entregas y resultados inmediatos. 
      div(titulo='Roles del equipo SCRUM')
        p Es la metodología ágil más popular y empleada en el desarrollo de #[em software]. Está construida por procesos iterativos que se separan en fases regulares que se van incrementado de forma periódica.
          br
          br
          |El propósito principal de la metodología Scrum es la satisfacción de las necesidades de los clientes, basándose en los principios de transparencia, avances permanentes y responsabilidad de equipo. A diferencia de otras metodologías ágiles tienen varios roles para lograr entregas y resultados inmediatos. 
        ul.lista-ul--color
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Dueño del producto o cliente: este rol es el responsable de entregar los requisitos del sistema, además tiene la función de priorizar los pendientes durante el desarrollo del producto y presentar comentarios para mejorar la calidad del software.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Scrum Máster:  el rol de Scrum Máster se encarga de entrenar y ayudar al equipo de desarrollo a permanecer centrado en las metas del proyecto. También elimina los impedimentos que surgen en el proceso para garantizar que los objetivos establecidos se lleven a cabo.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Equipo de desarrollo:  es el grupo de especialistas que cuenta con las habilidades necesarias para ejecutar el proyecto y alcanzar las metas propuestas en cada uno de los sprint.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-derecha
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/26.svg')})`}"
            )
            .bloque-texto-g__texto.p-4.w-75
              p.mb-0 Los roles descritos dentro de la metodología Scrum se pueden entender de mejor forma con una analogía de la vida cotidiana, donde se tiene un auto de carreras que es el equipo de desarrollo. El cliente es el conductor que acelera y determina la orientación y destino y el Scrum Master es el mecánico que realiza los mantenimientos y ajustes para que funcione correctamente.
                br
                br
                |Fases de la metodología Scrum:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/27.png', alt='')
      .col-lg-8(data-aos="fade-left")
        SlyderF.slyder-100(columnas="col-lg-6 col-xl-6")
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
            h5.text-center #[em Sprint]
            p.text-center Son lapsos de tiempo, por lo general de dos a cuatro semanas, que se imponen para cumplir con las metas propuestas. 
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/29.svg' alt='AvatarTop')
            h5.text-center Planificación del #[em Sprint]
            p.text-center Son sesiones donde se establecen los flujos de trabajo y metas que se asignarán a los equipos de desarrollo.  
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/30.svg' alt='AvatarTop')
            h5.text-center Reuniones diarias
            p.text-center Sesiones cortas de aproximadamente 20 minutos que se realizan para hacer seguimiento a los avances del #[em Sprint] y programar nuevas metas para el siguiente día.
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/31.svg' alt='AvatarTop')
            h5.text-center Revisión del #[em Sprint]
            p.text-center Son sesiones que se realizan al final de cada #[em Sprint] para constatar si las metas propuestas se cumplieron o no. 
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/32.svg' alt='AvatarTop')
            h5.text-center Retrospectiva del #[em Sprint]
            p.text-center Sesiones que realiza el equipo de desarrollo cuando termina un Sprint para analizar los errores cometidos y mejorar en el próximo #[em Sprint.]
    p.mb-5(data-aos='fade-right') La constante evolución del desarrollo de software requiere metodologías que se ajusten a los altos estándares de rendimiento y competitividad del mercado. La metodología Scrum es una excelente alternativa para resolver situaciones donde son prioritarias las entregas en corto plazo. 
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3
          br
          span Metodología SCRUM
        img(src='@/assets/curso/temas/tema1/33.svg' alt='AvatarTop').mb-4
        figcaption Referencia. Nota: La infografía ilustra las fases involucradas en la aplicación de la metodología Scrum. 
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/34.svg', alt='')
      .col-lg-10
        p Sprint es el nombre de cada ciclo o iteración que haremos en un proyecto Scrum. Nos permitirán planificar el ritmo de trabajo, la duración habitual de un #[em sprint] es de unas 4 semanas, aunque la metodología dice que debe ser entre dos semanas y dos meses. En cada #[em Sprint] o cada ciclo de trabajo, queremos lograr lo que se llama un incremento de producto o entregable que agrega valor al cliente.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/35.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="37%" y="20%" numero="")
              .contenido.p-4
                h4 Revisión
                p Sesiones que se realizan al final de cada sprint para constatar que las metas propuestas se cumplieron o no.
              .contenedor-color(style="background-color: #091743 ; width: 150px ")
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="64%" y="20%" numero="")
              .contenedor-color(style="background-color: #4dd0e1 ; width: 150px ")
              .contenido.p-4
                h4 Pruebas
                p Ejecución de casos de pruebas que garanticen los requisitos.
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="28%" y="65%" numero="")
              .contenedor-color(style="background-color: #0f2771 ; width: 150px ")
              .contenido.p-4
                h4 Diseño
                p Creación de los flujos de trabajo y metas que se asignan a los equipos de desarrollo.
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="72.5%" y="65%" numero="")
              .contenido.p-4
                h4 Construcción
                p Codificación de la aplicación de acuerdo a los requisitos del usuario.
              .contenedor-color(style="background-color: #3da6b4 ; width: 150px ")
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="50%" y="93%" numero="")
              .contenido.p-4
                h4 Planificación 
                p Sesiones de trabajo donde se establecen los flujos de trabajo y metas que se asignan a los equipos de desarrollo.
              .contenedor-color(style="background-color: #6f969c ; width: 150px ")
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta(style=" border: 2px solid #f6f6f6 ").p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5: img(src='@/assets/curso/temas/tema1/36.svg', alt='')
            .col-lg-10
              p Para reforzar los conceptos sobre metodología Scrum, se recomienda leer el e-libro de Subra J. (2020). Scrum: un método ágil para sus proyectos. 
              a.anexo.mb-4.mb-lg-0.d-inline-block(href="https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_biblioteca_eniDPT3SCRU" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] SENA Sistema de Bibliotecas. 
                    br
                    |Scrum: un método ágil para sus proyectos.
              p Asimismo, el artículo Aplicación de UML y SCRUM al desarrollo del #[em software] sobre control de acceso. publicado por Páez, Cortés, Simanca & Blanco. (octubre de 2021).  
              a.anexo.mb-4.mb-lg-0.d-inline-block(href="https://doi-org.bdigital.sena.edu.co/10.4067/S0718-07642021000500057" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Sistema de Bibliotecas. Aplicación de UML y SCRUM al #[br] desarrollo del #[em software] sobre control de acceso.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Prueba ágil
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/37.svg', alt='')
      .col-lg-10 
        p Una prueba ágil es una práctica del #[em testing] de #[em software] donde se siguen los fundamentos del desarrollo ágil y se busca que las pruebas se adapten a la organización. En este enfoque se integran los roles del equipo de trabajo y se adiciona el rol de tester, el cual tiene como propósito la ejecución de las pruebas de software para la verificación de los requisitos que solicita el cliente.
          br
          br
          |Las pruebas ágiles se basan en los siguientes principios:
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/38.svg' alt='AvatarTop')
        h5.text-center Testing continuo
        p.text-center.mb-0 Se deben realizar pruebas constantes para garantizar la calidad del #[em software] a través de cada uno de los ciclos de entrega.
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/39.svg' alt='AvatarTop')
        h5.text-center Retroalimentaciones periódicas
        p.text-center.mb-0 Contribuye para que el equipo de trabajo logre las metas establecidas en el proyecto de #[em software.]
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/40.svg' alt='AvatarTop')
        h5.text-center Compromiso de equipo
        p.text-center.mb-0 En un #[em testing] ágil los desarrolladores, diseñadores, el cliente y en general todos los que intervienen en el proyecto son responsables por las pruebas del #[em software], a diferencia de la metodología tradicional donde solo es el equipo de #[em testing.]
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/41.svg' alt='AvatarTop')
        h5.text-center Rapidez en las respuestas 
        p.text-center.mb-0 Los integrantes del proyecto son involucrados en cada ciclo de este y aportan con la retroalimentación en la disminución de los tiempos de respuesta. 
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/42.svg' alt='AvatarTop')
        h5.text-center Codificación limpia y simple
        p.text-center.mb-0 La codificación sencilla permite que en las próximas iteraciones se encuentren los #[em bugs] más fácilmente y sus respectivas correcciones demanden menos tiempo.
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/43.svg' alt='AvatarTop')
        h5.text-center Reducir la documentación
        p.text-center.mb-0 Minimizar la documentación del producto es útil para ganar tiempo y enfocarse en las pruebas. 
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/44.svg' alt='AvatarTop')
        h5.text-center Pruebas  en caliente
        p.text-center.mb-0 Las pruebas se realizan durante la implementación, a diferencia de la metodología tradicional donde se realizan luego de finalizar la codificación del producto.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta(style=" border: 3px solid #f6f6f6 ").p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5: img(src='@/assets/curso/temas/tema1/45.svg', alt='')
            .col-lg-10
              p Para afianzar los conocimientos en esta unidad temática, se recomienda leer el e-libro de Piattini, García Rubio, Pino & García Rodríguez. (2020). Calidad de sistemas de información. 
              a.anexo.mb-4.mb-lg-0.d-inline-block(href="https://www.alphaeditorialcloud.com/library/publication/calidad-de-sistemas-de-informacion-5a-edicion-ampliada-y-actualizada" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] alphaeditorial. Calidad de sistemas de información.
    p.mb-5(data-aos='fade-right') A continuación, se describen a grandes rasgos los tipos de pruebas que se pueden emplear en la verificación del funcionamiento del #[em software] para optimizar su calidad.









































</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.img-infografica-b__modal
  background-color: #cde1e4
  h4, p
    color: $color-sistema-texto !important
.img-infografica-b__modal__btn-cerrar
  background-color: $color-acento-botones
  padding: 1rem
  border-radius: 50%
  i
    color: $color-sistema-texto
.acordion__accion__btn--b
    background-color: #feca2e
    border: 0
    border-bottom: 1px solid #b3d6f6
</style>
