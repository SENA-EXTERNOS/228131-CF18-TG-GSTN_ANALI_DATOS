<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/intro.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 Estimado aprendiz, bienvenido a este aprendizaje, orientado a las pruebas y calidad de <i>software</i>. Durante su desarrollo se abordarán los ejes temáticos de forma progresiva y secuencial, de la siguiente manera: pruebas de <i>software</i>,<i> testing</i> y calidad de <i>software</i>, tipos de pruebas, diseño y clasificación de las mismas. Al finalizar el desarrollo temático, estará en capacidad de determinar un plan de prueba, definir casos de prueba, validar el funcionamiento y tratar los errores encontrados. 
            br
            br
            p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TLs-a1Cok-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
