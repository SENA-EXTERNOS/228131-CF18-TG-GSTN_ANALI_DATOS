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
          p.mb-0 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje orientado a las pruebas y calidad de #[em software.] Durante su desarrollo se abordarán los ejes temáticos de forma progresiva y secuencial de la siguiente manera: pruebas de #[em software], #[em testing] y calidad de #[em software], tipos de pruebas, diseño y clasificación de las mismas. Al finalizar el desarrollo temático, se estará en capacidad de determinar un plan de prueba, definir casos de prueba, validar el funcionamiento y tratar los errores encontrados. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de los contenidos a ser abordados.
            br
            br
            |#[b ¡Muchos éxitos en este proceso de aprendizaje!]
    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h3(data-aos="fade-right") Desarrollo de contenidos
    p.mb-5(data-aos='fade-right') Estimado aprendiz, a continuación, se desarrolla todo el contenido de este componente formativo que incluye la realización de actividades de aprendizaje. Al finalizar, habrá alcanzado las competencias en pruebas y calidad de software y estará en capacidad de verificar su funcionamiento, según la metodología y el modelo implementado.
    
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
