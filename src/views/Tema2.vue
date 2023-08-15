<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de pruebas
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-derecha
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/1.svg')})`}"
              )
              .bloque-texto-g__texto.p-4.w-75
                p.mb-0 Las pruebas de <i>software</i> son elementos que permiten medir indicadores como la funcionalidad, el <i>performance</i> y la experiencia del usuario sobre un producto. Estas se realizan de forma manual o automatizada en el ciclo de vida del desarrollo del<i> software</i>. Si bien existe una gran variedad de pruebas, a continuación se describen algunos de los tipos más utilizados en el <i>testing</i> de <i>software</i>:    
    
    h2.mb-5 Pruebas según conocimiento del #[em software]
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/2.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Criterio de clasificación que se basa en el conocimiento interno que tiene el #[em tester] sobre la aplicación, por lo tanto, es necesario que tenga habilidades de programación y conozca a detalle la estructura del diseño del #[em software]. Este tipo de pruebas se dividen en: de caja negra, de caja blanca y de caja gris.
    TabsB.color-acento-contenido.mb-5
      .p-4.py-md-5(titulo="Pruebas de <br> caja negra" :icono="require('@/assets/curso/temas/tema2/6.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Las pruebas de caja negra implican desconocimiento de la estructura interna, la tecnología y arquitectura del <i>software</i> y, sin embargo, se conoce cuál es el comportamiento dadas las entradas y salidas de este. Las pruebas que se diseñen bajo este criterio, no necesitan información sobre lo que sucede dentro del sistema para que funcione, sino que se desarrollan con base en los modelos funcionales, los casos de usos, los requerimientos o historias de usuario.
          .col-md-4: img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .p-4.py-md-5(titulo="Pruebas de <br> caja blanca" :icono="require('@/assets/curso/temas/tema2/7.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Se diseñan a partir de la estructura del programa y por ende el #[em tester] debe tener total conocimiento del código fuente, los componentes, los flujos de control, la base de datos, entre otros elementos de la aplicación.    
          .col-md-4: img(src='@/assets/curso/temas/tema2/4.png', alt='')
      .p-4.py-md-5(titulo="Pruebas de <br> caja gris" :icono="require('@/assets/curso/temas/tema2/8.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Son las que se ejecutan con información parcial de la estructura del programa, ya que habrá ocasiones donde no se cuenta con acceso al código fuente, pero sí a la base de datos y viceversa.  
          .col-md-4: img(src='@/assets/curso/temas/tema2/5.png', alt='')
    
    h2.mb-5 Pruebas según su finalidad
    p.mb-5(data-aos='fade-right') Esta clasificación del <i>testing</i> se centra fundamentalmente en el propósito de las pruebas, las cuales pueden ser de progresión, regresión, exploratorias, humo o sanidad.
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/9.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-acc")
          div(titulo='Pruebas de regresión')
            p Se ejecutan de forma periódica dependiendo de algunas condiciones, como el lanzamiento de una nueva versión del #[em software], donde tienen como objetivo verificar que las funcionalidades que estaban operando correctamente lo sigan haciendo en la nueva versión y, con ello, evitar el #[em “downgrade”] o devolución del #[em software] a una antigua versión. Este tipo de pruebas son candidatas para la automatización de los casos de pruebas, por ser periódicos y, por lo general, son los mismos que se han probado en el pasado.
          div(titulo='Pruebas de progresión')
            p Las pruebas de progresión son las que buscan probar nuevas funcionalidades, es decir, se centran en lo que no tenía el <i>software</i> en las versiones anteriores y garantizan la calidad del desarrollo del <i>software</i> que se está construyendo o también llamado <i>release.</i> 
          div(titulo='<em> Testing</em> exploratorio')
            p Ofrece mayor flexibilidad al #[em tester], debido a que permite libertad de probar y explorar nuevos escenarios que surgen de su innovación. Este estilo o enfoque promueve el aprendizaje para la optimización continua de las pruebas. Por lo general, se generan nuevas pruebas a medida que se va probando el #[em software.]
          div(titulo='<em>Testing</em> de humo')
            p El <i>testing</i> de humo o sanidad, son pruebas rápidas que se realizan en la etapa inicial del plan de pruebas para verificar, con prontitud, que la aplicación sea pertinente en sus salidas y asegurar que los requerimientos prioritarios se cumplan.
    
    h2.mb-5 Pruebas según nivel
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/10.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Las pruebas según el nivel están clasificadas de acuerdo con las etapas del diseño del desarrollo del #[em software ], es decir, desde el análisis hasta el despliegue. En este tipo de pruebas las etapas están asociadas y colaboran entre sí para garantizar el éxito de estas. 
          br
          br
          |Dentro de las pruebas por nivel se encuentran: componente, integración y sistema. A continuación, se detallan cada una de ellas. 
    .tarjeta.p-5.mb-5(style="background-color: #fffcf2 ")
      LineaTiempoC.color-acento-botones
        .row.justify-content-center(titulo="Pruebas por <br> componente")
          .col-md-6.mb-4.mb-md-0
            p También llamadas pruebas unitarias, son las que aseguran el correcto funcionamiento por separado de un módulo, una función, un método o una clase del sistema. Este tipo de pruebas son ejecutadas por el desarrollador que termina de construir esa parte pequeña de la aplicación y se caracterizan por la rapidez en la corrección de los errores, porque siendo el mismo desarrollador quien las ejecuta, se corrigen en los tiempos de este proceso.  
          .col-md-3: img(src='@/assets/curso/temas/tema2/11.svg', alt='')
        .row.justify-content-center(titulo="<em>Testing </em> de <br> integración")
          .col-md-6.mb-4.mb-md-0
            p Comprueba que las interfaces entre los módulos se comuniquen correctamente. Este tipo de pruebas las realizan tanto desarrolladores como los <i>testers</i> y son de gran importancia para lograr un sistema funcional y completo.
          .col-md-3: img(src='@/assets/curso/temas/tema2/12.svg', alt='')
        .row.justify-content-center(titulo="Pruebas de <br> sistema")
          .col-md-6.mb-4.mb-md-0
            p Son las más generales porque se centran en verificar que la aplicación funcione en su totalidad y cumpla con los requisitos establecidos por el cliente. Este tipo de pruebas son realizadas mayormente por el <i>tester</i> y en menor medida por el usuario final. Se pueden incluir dentro del <i>testing</i> de caja negra.
          .col-md-3: img(src='@/assets/curso/temas/tema2/13.svg', alt='')
    
    h2.mb-5 Pruebas según funcionalidad
    p.mb-5(data-aos='fade-right') Las pruebas según su funcionalidad se pueden clasificar en las categorías de funcionales y no funcionales.
    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/14.jpg", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Pruebas funcionales
            p.mb-0 Se realizan cuando se requiere verificar que los elementos críticos del negocio se ajustan con las funcionalidades del #[em software] y operan de acuerdo con lo esperado, sin presentar errores. Por lo tanto, las pruebas funcionales se definen a partir de lo que el sistema debe hacer, por ejemplo, el #[em software ] debe imprimir una factura al final de la venta. 
              br
              br
              |Con este tipo de pruebas se pueden revisar los elementos con los que el usuario tiene algún tipo de interacción. Dentro de las pruebas funcionales se encuentran: las unitarias, las de integración, las de regresión, las de sistema, las de sanidad, entre otras.
      .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/15.jpg", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Pruebas no funcionales 
            p.mb-0 Son atributos de la calidad que se encargan de verificar requisitos cuando el #[em software ] está en operación y no sus funcionalidades. Con estas pruebas se mide cuáles son los límites o capacidad que soporta la aplicación, el rendimiento que tiene con altas cargas de trabajo, su escalabilidad y portabilidad entre otras.


    p.mb-5(data-aos='fade-right') A continuación, se describen las clases de pruebas no funcionales más utilizadas en el <i>testing</i> de <i>software.</i>
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/16.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-acc")
          div(titulo='Pruebas de portabilidad')
            p Se encargan de verificar cómo se comporta la aplicación en diferentes plataformas con distintas configuraciones de #[em hardware] y #[em software]. Por ejemplo, las pruebas para aplicaciones de escritorio y móviles se realizan en arquitecturas diferentes de sistemas operativos. El objetivo de estas es garantizar que el #[em software] pueda funcionar en todas las plataformas.
          div(titulo='Pruebas de seguridad')
            p Con esta clase de pruebas se localizan las vulnerabilidades que al ser explotadas permiten el acceso con altos privilegios a funcionalidades no autorizadas de la aplicación. También se conocen como Pentesting o Ethical Hacking. Su objetivo es el de garantizar la confidencialidad, disponibilidad e integridad del <i>software</i>.
          div(titulo='Pruebas de rendimiento')
            p Simulan diferentes niveles de carga para evaluar el <i>performance</i> del sistema y su comportamiento cuando se presentan picos y cuellos de botella en sus flujos de información. Los niveles de carga son simulados con base en la cantidad de usuarios que posiblemente hagan uso de la aplicación, es decir, se puede realizar una prueba con un total de 5 usuarios y otra con 1000 usuarios concurrentes. Cabe resaltar que esto depende de los requisitos del producto.
          div(titulo='Localización')
            p Estas pruebas garantizan que la aplicación funcione para una región en particular, por lo tanto, es importante que pueda adaptarse a distintas zonas geográficas y verificar variables como el tipo de moneda, fechas, traducción de lenguaje, entre otras.
          div(titulo='Usabilidad')
            p Se centran en la facilidad de la aplicación para su aprendizaje y uso. Estas clases de pruebas son muy complejas debido a la subjetividad, ya que dependen de la percepción de cada usuario del sistema y, por lo tanto, no hay criterio unificado en los resultados.
          div(titulo='Accesibilidad')
            p Estas pruebas pretenden que el sistema sea usado por todos los usuarios independientemente de sus habilidades técnicas, físicas o cognitivas. Por ejemplo, en el diseño #[em software ] se debe tener especial cuidado y pensar en los posibles usuarios daltónicos para que las interfaces no incluyan colores que sean confusos para ellos.  
    p.mb-5(data-aos='fade-right') Para reforzar el aprendizaje de este tema, se recomienda ver el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/st3zBdmhREE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h2.mb-5 Estrategias de pruebas
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .bloque-derecha
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/17.svg')})`}"
            )
            .bloque-texto-g__texto.p-4.w-75
              p.mb-0 Una estrategia de pruebas de <i>software</i>, agrupa los métodos de elaboración de los casos de pruebas en una sucesión de pasos bien definidos, para construir una aplicación correctamente. Los procesos de verificación y validación del producto, tienen como hoja de ruta, las estrategias de pruebas. (Solarte, 2019)
    p.mb-5(data-aos='fade-right') En las estrategias de pruebas se tiene en cuenta que:
    .row.justify-content-center.mb-5
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/18.png', alt='')
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul--color
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Las pruebas inician desde el interior hacia afuera, comenzando con la verificación de los módulos o métodos y finalizando con la validación de los requisitos y funcionalidades del #[em software].
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Es pertinente que en los puntos críticos del #[em software ] se realicen distintos casos de pruebas que permitan garantizar la calidad de este. 
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 El #[em testing ] se debe realizar por los especialistas que construyen el #[em software ] o por los equipos de #[em tester] que integran el proyecto.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 El <i>testing</i> y la depuración son procesos para encontrar <i>bugs</i> y corregirlos; sin embargo, la depuración se ejecuta por el desarrollador en tiempo de codificación del <i>software</i> y el <i>testing</i> y, además de contener estas pruebas, abarca todas las verificaciones y validaciones del producto.
          li
            i.fas.fa-angle-right(style='color: #0f2771')
            p.mb-0 Están formadas por pruebas de bajo nivel y alto nivel, donde las de bajo nivel se relacionan con el código fuente y las de alto nivel con las funcionalidades del #[em software]. 




</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
