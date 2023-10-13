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

    
    h2 #[em Testing] y calidad de #[em software] 
    p.mb-5(data-aos='fade-right') El <i>testing</i> y el aseguramiento de la calidad, también llamado Quality Assurance (QA), es un mecanismo para la verificación y validación de las funcionalidades de los programas o aplicaciones de <i>software</i> con el fin de ofrecer un producto sin defectos o errores.
    .tarjeta.mb-5.p-5(style="background-color: #f5fafe")
      SlyderA(tipo='b')
        .row.justify-content-center.mx-3
          .col-lg-6
            p El propósito final es hacer coincidir los requisitos iniciales con un #[em software] de calidad, lo cual incorpora la integración de herramientas asistidas o automatizadas que permiten la evaluación de las características de interés. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/2.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p El proceso de #[em testing] es paralelo a las etapas de construcción del #[em software] para que las actividades se realicen con calidad en cada una de las fases, se eviten reprocesos y fallas de funcionalidad, previo a la puesta en producción.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/3-.png', alt='')
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
            p Por ejemplo, un fabricante de autos descubre una falla en los sensores de su sistema de bolsas de aire; esto implica el retiro de todas las unidades de automóviles que presentan este problema. Por lo tanto, los gastos económicos y efectos negativos en su reputación, serán de gran impacto. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/6.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Cuando en el proceso de construcción del #[em software] se asignan suficientes recursos para la ejecución de pruebas de calidad, los resultados se pueden evidenciar con el aumento en la confiabilidad del mismo y la calidad de los productos finales.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/7.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Dentro de los procesos de <i>testing</i>, se encuentran dos conceptos fundamentales: <b>validación</b> y <b>verificación</b>. Estos controlan que el <i>software</i> que se está desarrollando, cumpla con las especificaciones y expectativas requeridas por el cliente. 
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
            p Esto es la <b>validación.</b> Finalmente, cuando se construye la casa, se realizan constantes comprobaciones del plano para confirmar que está de acuerdo con lo planteado. Esto es la <b>verificación.</b>
          .col-lg-6: img(src='@/assets/curso/temas/tema1/11.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Para mejorar la calidad del <i>software</i> o servicios desarrollados, es necesario entender y conocer al cliente y sus necesidades. La creación de productos con altos niveles de calidad, permite aumentar la fiabilidad como desarrollador, disminuir el mantenimiento y soporte, para incrementar la satisfacción del cliente. (Alfaro & Carrizo, 2021)
          .col-lg-6: img(src='@/assets/curso/temas/tema1/12.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Existen muchas definiciones para #[em testing] y calidad de #[em software], sin embargo, una forma general de definirlo es: hacer #[em testing] es verificar dinámicamente la adaptación del producto o #[em software] a los requerimientos.   
          .col-lg-6: img(src='@/assets/curso/temas/tema1/13.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p En el proceso de #[em testing] se reportan los riesgos para que los desarrolladores los tengan en cuenta y se pueda minimizar la probabilidad de ocurrencia y disminución del impacto, de ahí que riesgos y #[em testing] estén relacionados. No hacer #[em testing] durante la construcción de un #[em software] genera vulnerabilidades para el alcance del proyecto.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/14.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p La depuración, o <i>debugging</i>, es otro concepto fundamental en el <i>testing,</i> que permite a los desarrolladores implantar puntos de interrupción o <i>breakpoint</i> para analizar el estado del <i>software</i> en una parte dada del código.
          .col-lg-6: img(src='@/assets/curso/temas/tema1/15.png', alt='')
        .row.justify-content-center.mx-3
          .col-lg-6
            p Con esto se busca encontrar las causas de las fallas y corregirlas sin necesidad de ejecutar la totalidad del <i>software.</i> La depuración es realizada por los programadores y el <i>testing</i> por los <i>testers</i> o probadores de <i>software</i>; además, el <i>testing</i> expone la existencia de <i>bugs</i> o errores, y la depuración encuentra las causas de las fallas para corregirlas. 
          .col-lg-6: img(src='@/assets/curso/temas/tema1/16.png', alt='')
    p.mb-5(data-aos='fade-right') El proceso de calidad de #[em software] garantiza productos con niveles de calidad y eficiencia adecuados para satisfacer las necesidades de los usuarios y minimizar los riesgos y las amenazas que generen impacto negativo.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')
            figcaption.mt-2 Nota. Adaptado de Tordecilla, D. (2022). 

          .tarjeta.color-primario.p-4(x="21.8%" y="17%" tooltip="Abrir" numero="" )
            h4 Reporte de resultados
            p Los reportes de resultados se utilizan para realizar nuevos requerimientos  y mejoras que requiere el producto en su nueva versión.
          .tarjeta.color-primario.p-4(x="78.5%" y="17%" tooltip="Abrir" numero="" )
            h4 Ejecución de pruebas
            p La ejecución de pruebas es el proceso que permite al probador de #[em software] ejecutar los métodos de prueba para verificar y validar el correcto funcionamiento del #[em software.] 
          .tarjeta.color-primario.p-4(x="10%" y="51%" tooltip="Abrir" numero="" )
            h4 Entorno de pruebas
            p El entorno de pruebas es el escenario donde se realizan las pruebas. 
              br
              |Debido a la diversidad de los tipos de aplicaciones pueden existir entornos web,  de escritorio, móviles, entre otros.
          .tarjeta.color-primario.p-4(x="90.5%" y="51%" tooltip="Abrir" numero="" )
            h4 Requerimientos
            p Los requerimientos de #[em software] son una descripción detallada del comportamiento del #[em software], es decir, lo que el usuario espera que haga. Son reglas que siguen los desarrolladores para crear el producto final  y satisfacer las necesidades de los usuarios.
          .tarjeta.color-primario.p-4(x="21.6%" y="84%" tooltip="Abrir" numero="" )
            h4 Diseño de pruebas
            p El diseño de pruebas consiste en el análisis de los requerimientos existente y el planteamiento de los puntos críticos donde el sistema puede fallar, así mismo la hoja de ruta que deben seguir los  probadores del #[em software] para garantizar el mínimo de errores en el producto final.
          .tarjeta.color-primario.p-4(x="78.8%" y="84%" tooltip="Abrir" numero="" )
            h4 Creación de pruebas
            p A partir del diseño y planificación de las pruebas se crean los casos de pruebas que permiten determinar si el #[em software] es o no aceptable por los usuarios del sistema.
    
    h2.mb-5 Principios de las pruebas
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/18.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Los principios de las pruebas sumados con métodos, estándares y herramientas, maximizan el <i>performance</i> en la labor del <i>testing</i>, debido a que permiten el diseño de casos de pruebas, la ejecución de pruebas exploratorias y automáticas, entre otras utilidades. A continuación, se describe una serie de principios que fortalecen la actividad de pruebas de <i>software</i>:
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/19.png', alt='')
      .col-lg-8 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-acc")
          div(titulo='Ejecutar pruebas expone las fallas del <i>software</i>')
            p Las pruebas permiten exponer la presencia de fallas en un #[em software], pero no la falta de ellas. Después del reporte de una falla y su sucesiva subsanación, es posible minimizar la probabilidad de que las fallas que no han sido encontradas permanezcan en el #[em software], sin embargo, no se podrá confirmar que un producto está libre de errores. 
          div(titulo='Realizar pruebas exhaustivas no es viable')
            p Con excepción de casos particulares, donde el riesgo de la materialización de una falla tiene un impacto vital, la realización de todas las posibilidades de los datos y funciones de un <i>software</i>, comúnmente no es práctico, debido a los altos costos en recursos y tiempo. 
            br
            br
            p En razón a lo <i>software</i>, es conveniente en la etapa de diseño y estructuración de las pruebas de <i>software</i>, tener en cuenta la relación de costo/beneficio, sin dejar de enfocarse en verificar las funcionalidades más importantes y de gran impacto para el proyecto.  
          div(titulo='Probar en etapas tempranas')
            p El proceso de <i>testing</i> debe ser paralelo a las fases del desarrollo del <i>software</i>, por lo tanto, realizar pruebas tempranas, preferiblemente en la etapa de análisis y diseño, resulta muy ventajoso porque permite la detección de errores cuando los costos y recursos para su rectificación, son bajos en comparación, de si se detectan en fases finales, como en la fase de despliegue.
          div(titulo='Agrupación de fallas')
            p Con frecuencia, existen módulos o funcionalidades que tienden a presentar más fallas o <i>bugs</i> que otros. Estos módulos por lo general se agrupan, de acuerdo con la regla 80/20, donde se establece que el 80 % de los <i>bugs</i>, están relacionados con el 20 % de las mismas causas; es decir, los módulos de un <i>software</i> están caracterizados por un nivel de relevancia, que permite aplicar estrategias de pruebas para un determinado grupo y priorizar los módulos etiquetados con altas probabilidades de presentar <i>bugs.</i> 
          div(titulo='Paradoja del pesticida')
            p La ejecución de pruebas repetidas en una misma ubicación o módulo del sistema, impide la detección de nuevos <i>bugs;</i> por lo tanto, para aumentar la probabilidad de encontrar nuevos errores, se recomienda que el <i>tester</i> realice la exploración en distintas ubicaciones y actualice constantemente las estrategias y métodos de las pruebas.    
          div(titulo='Las pruebas dependen del escenario')
            p Las estrategias y tipos de pruebas son elegidas dependiendo del sistema y el escenario que se desea verificar. Es decir, una aplicación de tipo comercial no será testeada con los mismos métodos que una aplicación del sector salud. 
          div(titulo='Falacia de ausencia de fallas')
            p Después de corregir las fallas encontradas en un proceso de<i> testing</i> y de realizar un nuevo recorrido de pruebas, sin encontrar <i>bugs</i>, no es posible determinar que el producto sea 100 % útil, por cuanto este es medido a través de los parámetros de satisfacción y expectativas de los usuarios.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #d2f3f8")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/tema1/20.svg', alt='')
            .col-lg-10
              p La identificación y aplicación de los principios de las pruebas son útiles para crear y organizar estrategias innovadoras que proporcionan visiones distintas a las implementadas por los desarrolladores al momento de crear las funcionalidades del producto.
    
    h2.mb-5 Metodología de desarrollo de #[em software] ágil
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/21.svg', alt='')
      .col-lg-8
        p La metodología de desarrollo de <i>software</i> ágil emerge por el alto volumen de trabajo que tienen las áreas encargadas de codificar y el escaso tiempo para entregar a producción las aplicaciones. Teniendo en cuenta estos factores, la metodología ágil responde de mejor manera a las necesidades del mercado y supera a los métodos tradicionales como la metodología en cascada, donde las entregas son lentas debido a que se sigue un flujo de fase a fase para finalmente llevar un producto a producción. (Ramos, <i>et al.</i>, 2022)
          br
          br
          |La implementación de metodologías ágiles, además de satisfacer al cliente con entregas tempranas, tiene las siguientes ventajas:   
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Aumentar la velocidad y eficiencia en las entregas del producto")
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/22.svg', alt='')
          .col-md-5
            p Con la implementación de metodologías ágiles las organizaciones pueden elevar la velocidad y la eficiencia de los grupos de desarrollo. Considerando que, al dedicarse a entregas parciales en plazos cortos, son menores los tiempos que cuando se tienen entregas totales de un producto. Además, permite mejoras en el versionado del #[em software].
      .py-4.py-md-5(titulo="Incrementar la calidad del <i>software</i>")
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/23.svg', alt='' style="width: 362px").m-auto
          .col-md-5
            p Cuando los desarrolladores interactúan constantemente con el cliente se generan retroalimentaciones que son fundamentales en la calidad del #[em software], de hecho, uno de los objetivos de esta metodología es ofrecer espacios de permanente intercambio.
      .py-4.py-md-5(titulo="Encontrar <em>bugs</em> <br>y evitar fallas")
        .row.align-items-center.justify-content-center
          .col-md-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/24.svg', alt='')
          .col-md-5
            p Con la aplicación de metodologías ágiles, los <i>testers</i> tienen la posibilidad de generar alertas sobre los <i>bugs</i> casi en tiempo real, y con esto se evitan fallas mayores cuando el producto esté más completo.
      .py-4.py-md-5(titulo="Aumentar la <br> satisfacción del cliente")
        .row.align-items-center.justify-content-center
          .col-md-8.mb-4.mb-md-0: img(src='@/assets/curso/temas/tema1/25.svg', alt='')
          .col-md-4
            p La comunicación permanente entre los desarrolladores y el cliente es percibida como un factor de compromiso con la finalización del proyecto de <i>software</i>. En efecto, cuando se brinda la opción para que el cliente realice retroalimentación constante, en pro de las mejoras, el <i>software</i> estará respondiendo a sus necesidades.
    p.mb-5(data-aos='fade-right') Existen metodologías ágiles cada una con un enfoque particular, sin embargo, todas comparten las ventajas antes mencionadas. A continuación, se exponen algunas de las metodologías más populares y usadas por las organizaciones que se dedican al desarrollo de <i>software</i>. 
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta ")
      div(titulo='<i>Extreme Programming</i> o programación extrema')
        p Metodología también conocida como XP, consiste en la agrupación de reglas que generan agilidad y resiliencia a las organizaciones en la ejecución de los proyectos de <i>software</i>, en contextos que son muy variables. Por lo tanto, cuando se aplica una metodología ágil XP, se establece como prioridad la entrega del <i>software</i> final, de conformidad con los requerimientos exactos del cliente.
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
        p Es una de las metodologías más sencillas y fáciles de implementar en las organizaciones. El método consiste en tener una pizarra visual para clasificar las actividades que se encuentran en estado de pendiente, en curso, o finalizadas.    
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
      div(titulo='<i>Scrum</i>')
        p Es la metodología ágil más popular y empleada en el desarrollo de <i>software</i>. Está construida por procesos iterativos que se separan en fases regulares que se van incrementando de forma periódica.
          br
          br
          |El propósito principal de la metodología <i>Scrum</i> es la satisfacción de las necesidades de los clientes, basándose en los principios de transparencia, avances permanentes y responsabilidad de equipo. A diferencia de otras metodologías ágiles tiene varios roles para lograr entregas y resultados inmediatos.  
      div(titulo='Roles del equipo <i>Scrum</i>')
        ul.lista-ul--color
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 #[b Dueño del producto o cliente:] este rol es el responsable de entregar los requisitos del sistema; además, tiene la función de priorizar los pendientes durante el desarrollo del producto y presentar comentarios, para mejorar la calidad del <i>software</i>.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 <b> <i>Scrum Master:</i></b>  su rol se encarga de entrenar y ayudar al equipo de desarrollo, a permanecer centrado en las metas del proyecto. También elimina los impedimentos que surgen en el proceso para garantizar que los objetivos establecidos se lleven a cabo.

          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 #[b Equipo de desarrollo:] es el grupo de especialistas que cuenta con las habilidades necesarias para ejecutar el proyecto y alcanzar las metas propuestas en cada uno de los <i>sprints</i>.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-derecha
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/26.svg')})`}"
            )
            .bloque-texto-g__texto.p-4.w-75
              p.mb-0 Los roles descritos dentro de la metodología <i>Scrum</i> se pueden entender de mejor forma con una analogía de la vida cotidiana, donde se tiene un auto de carreras que es el equipo de desarrollo. El cliente es el conductor que acelera y determina la orientación y destino, y el <i>Scrum Master</i> es el mecánico que realiza los mantenimientos y ajustes para que funcione correctamente.
            
      
    .row.justify-content-center.align-items-center.mb-5
      h3 Fases de la metodología <i>Scrum</i>
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/27.png', alt='')
      .col-lg-8(data-aos="fade-left")
        SlyderF.slyder-100(columnas="col-lg-6 col-xl-6")
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
            h5.text-center <i>Sprint</i>
            p.text-center Son lapsos de tiempo, por lo general de dos a cuatro semanas, que se imponen para cumplir con las metas propuestas. 
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/29.svg' alt='AvatarTop')
            h5.text-center Planificación del <i>Sprint</i>
            p.text-center Son sesiones donde se establecen los flujos de trabajo y metas que se asignarán a los equipos de desarrollo.  

          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/30.svg' alt='AvatarTop')
            h5.text-center Reuniones diarias
            p.text-center Sesiones cortas de aproximadamente 20 minutos que se realizan para hacer seguimiento a los avances del <i>Sprint</i> y programar nuevas metas para el siguiente día.
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/31.svg' alt='AvatarTop')
            h5.text-center Revisión del <i>Sprint</i>
            p.text-center Son sesiones que se realizan al final de cada <i>Sprint</i> para constatar si las metas propuestas se cumplieron o no. 
          .tarjeta.box-shadow.p-4.mb-5.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema1/32.svg' alt='AvatarTop')
            h5.text-center Retrospectiva del <i>Sprint</i>
            p.text-center Sesiones que realiza el equipo de desarrollo cuando termina un <i>Sprint</i> para analizar los errores cometidos y mejorar en el próximo <i>Sprint</i>.
    p.mb-5(data-aos='fade-right') La constante evolución del desarrollo de <i>software</i> requiere metodologías que se ajusten a los altos estándares de rendimiento y competitividad del mercado. La metodología <i>Scrum</i> es una excelente alternativa para resolver situaciones donde son prioritarias las entregas en corto plazo.  
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        img(src='@/assets/curso/temas/tema1/33-.svg' alt='AvatarTop').mb-4

    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/34.svg', alt='')
      .col-lg-10
        p <i>Sprint</i> es el nombre de cada ciclo o iteración que haremos en un proyecto <i>Scrum</i>. Nos permitirá planificar el ritmo de trabajo, la duración habitual de un #[em sprint] es de unas 4 semanas, aunque la metodología dice que debe ser entre dos semanas y dos meses. En cada #[em Sprint] o cada ciclo de trabajo, queremos lograr lo que se llama un incremento de producto o entregable que agrega valor al cliente.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/35-.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="28.6%" y="21.3%" numero="")
              .contenido.p-4
                h4 Revisión
                p Sesiones que se realizan al final de cada <i>sprint</i> para constatar que las metas propuestas se cumplieron o no.
              .contenedor-color(style="background-color: #091743 ; width: 150px ")
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="72%" y="21.3%" numero="")
              .contenedor-color(style="background-color: #4dd0e1 ; width: 150px ")
              .contenido.p-4
                h4 Pruebas
                p Ejecución de casos de pruebas que garanticen los requisitos.
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="14.1%" y="66.3%" numero="")
              .contenedor-color(style="background-color: #0f2771 ; width: 150px ")
              .contenido.p-4
                h4 Diseño
                p Creación de los flujos de trabajo y metas que se asignan a los equipos de desarrollo.
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="86.4%" y="66.3%" numero="")
              .contenido.p-4
                h4 Construcción
                p Codificación de la aplicación de acuerdo a los requisitos del usuario.
              .contenedor-color(style="background-color: #3da6b4 ; width: 150px ")
          .tarjeta.bg-white.d-flex.overflow-hidden.justify-content-between(x="50.5%" y="91.7%" numero="")
              .contenido.p-4
                h4 Planificación 
                p Sesiones de trabajo donde se establecen los flujos de trabajo y metas que se asignan a los equipos de desarrollo.
              .contenedor-color(style="background-color: #6f969c ; width: 150px ")
   



    h2.mb-5 Prueba ágil
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/37.svg', alt='')
      .col-lg-10 
        p Una prueba ágil es una práctica del <i>testing</i> de <i>software</i> donde se siguen los fundamentos del desarrollo ágil y se busca que las pruebas se adapten a la organización. En este enfoque se integran los roles del equipo de trabajo y se adiciona el rol de <i>tester</i>, el cual tiene como propósito la ejecución de las pruebas de <i>software</i> para la verificación de los requisitos que solicita el cliente.
          br
          br
          |Las pruebas ágiles se basan en los siguientes principios:
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.box-shadow.p-4.mb-5.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/38.svg' alt='AvatarTop')
        h5.text-center #[em Testing] continuo
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
