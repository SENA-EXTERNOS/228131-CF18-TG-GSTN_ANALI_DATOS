<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseñar pruebas
    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')
      .col-lg-7 
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 Teniendo en cuenta que las pruebas de <i>software</i> no pueden probar todo y que las pruebas exhaustivas no son posibles, es pertinente que las pruebas aplicadas se acerquen a los estándares de calidad y sean eficientes, de modo que las técnicas que se ejecuten en el <i>testing</i> de <i>software</i>, maximicen la posibilidad de encontrar <i>bugs</i> y minimicen la cantidad de pruebas aplicadas. Algunas de las técnicas más usadas son: particiones de equivalencia, valores límites y análisis de robustez, diagrama de transición de estados y tablas de decisión. 
 

    h2.mb-5 Particiones de equivalencia
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/2.svg', alt='')
      .col-lg-10(data-aos="fade-left")
          p.mb-0 Esta técnica parte del concepto matemático de conjuntos, donde los conjuntos contienen varios subconjuntos que cumplen con dos condiciones: la primera, que la intercesión de dos subconjuntos sea nula, es decir, los criterios de uno no se repiten en el otro y, la segunda, que la sumatoria de todos los subconjuntos o particiones den como resultado el conjunto total. 
            br
            br
            |Las ventajas que supone esta técnica de pruebas son las siguientes: 
    .row.justify-content-center.mb-5
      .col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/3.png', alt='')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Disminución de casos de pruebas") Como las pruebas están agrupadas en particiones, permiten minimizar los casos de pruebas, ya que basta con testear un elemento o representante de la partición para obtener resultados que identifican a todos los elementos.
          p.text-small(numero="2" titulo="Detección de inconsistencia ") Cuando se clasifican las pruebas en los subconjuntos, se pueden identificar pruebas que no encajan en ninguna de las particiones, por tanto, ayuda a detectar errores en las especificaciones o requisitos.
          p.text-small(numero="3" titulo="Funcionales en el plan de pruebas ") Son útiles para identificar la terminación de una prueba, es decir, dentro del plan de pruebas se puede implementar un criterio de finalización cuando se ejecute al menos un elemento de la partición de equivalencia. 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
          p.mb-0 La desventaja principal de esta técnica es que no permite combinar particiones entre sí, lo que genera limitantes a la hora de cruzar elementos que guardan relación con otros, pero se encuentran en distintas particiones.
    
    h2.mb-5 Valores límites y análisis de robustez
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/4.svg', alt='')
      .col-lg-7 
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 La técnica de valores límites y análisis de robustez, centra su enfoque en los límites de las particiones e implica testear las clases de equivalencia en los bordes de las particiones, porque, estadísticamente, en estos bordes es donde se presenta la más alta la probabilidad de encontrar la mayoría de los <i>bugs</i>.
    TabsB.color-acento-contenido.mb-5
      .p-4.py-md-5(titulo="Errores en la definición <br> de valores límites" :icono="require('@/assets/curso/temas/tema3/8.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Los desarrolladores tienden a pasar por alto errores en la definición de valores límites al establecer condiciones como mayor que, menor que, mayor o igual que y menor o igual que.
          .col-md-4: img(src='@/assets/curso/temas/tema3/5.png', alt='')
      .p-4.py-md-5(titulo="Ejemplo <br> de aplicación" :icono="require('@/assets/curso/temas/tema3/9.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Un ejemplo de la aplicación de esta técnica puede ser en el testing de un módulo donde se verifica que la edad de una persona está entre el rango de 18 a 25 años, para asignar una promoción y con ello un descuento. Si el requerimiento especifica que el rango de edad es entre 18 y 25 años, el código fuente de la aplicación, deberá contener las operaciones de mayor o igual que, y menor o igual que. En caso de no contener dichas restricciones, se generarán <i>bugs</i> que tendrán que ser corregidos.   
          .col-md-4: img(src='@/assets/curso/temas/tema3/6.png', alt='')
      .p-4.py-md-5(titulo="Análisis <br> de robustez" :icono="require('@/assets/curso/temas/tema3/10.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p Se fija en los extremos de las clases de equivalencias, pero llevando las pruebas al extremo. Esto es de gran utilidad para aquellos módulos donde es importante el análisis de valores numéricos con decimales, ya sean valores muy grandes o pequeños. En el ejemplo de la edad visto anteriormente, se puede aplicar un análisis de robustez si en las especificaciones se establece que las promociones se darán si el usuario está muy cerca a cumplir el rango de edad establecido, por ejemplo, si tiene más de 17 años, 9 meses y hasta 25 años, 1 mes. 
          .col-md-4: img(src='@/assets/curso/temas/tema3/7.png', alt='')

    h2.mb-5 Diagrama de transición de estados
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/11.svg', alt='')
      .col-lg-10
        p Esta técnica representa los diferentes estados por los que un objeto cambia en una aplicación, bien sea por un proceso o por un producto. Los diagramas que se crean bajo esta técnica, están formados por estados, eventos y transiciones. Por ejemplo, en un sistema que hace seguimiento a los pedidos de los clientes, se aplica un diseño de pruebas con la técnica de transición de estados, debido a que el pedido pasará por varias condiciones a lo largo del proceso, como: ingresado, en preparación, despachado y entregado.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          p.mb-0
            em Ejemplo de transición de estados
        img(src='@/assets/curso/temas/tema3/12.svg', alt='').mb-5
    .row.justify-content-center
      .col-lg-10 
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
          p.mb-0 Los diagramas de transición de estados son fundamentales en el <i>testing</i> de <i>software</i> porque permiten entender cuáles son las transiciones válidas e inválidas en el sistema. Por ejemplo, si una aplicación que gestiona pedidos pasa de un estado “ingresado” a “despachado”, se identifica un <i>bug</i>, porque previamente deberá pasar por el estado “en preparación”. 
    
    h2.mb-5 Tablas de decisión 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-derecha
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/13.svg')})`}"
              )
              .bloque-texto-g__texto.p-4.w-75
                p.mb-0 La técnica de tablas de decisión resuelve el inconveniente que tienen las técnicas de particiones de equivalencia y análisis de robustez, donde no se permite el <i>testing</i> entre las interacciones de los subconjuntos del sistema. En términos generales, una tabla de decisión es una combinación de condiciones, reglas y acciones, las cuales se pueden representar en una matriz, para su mayor compresión.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1 
      p.mb-0
        em Tabla de decisión
    table.mb-5

      thead(style="background-color: #4dd0e1")
        tr.text-center
          th Condiciones
          th Regla 1
          th Regla 2
          th Regla 3
          th Regla 4
      tbody
        tr
          td Condición 1
          td.text-center Valor 1.1 
          td.text-center Valor 2.1
          td.text-center Valor 3.1
          td.text-center Valor 4.1
        tr
          td Condición 1
          td.text-center Valor 1.1 
          td.text-center Valor 2.1
          td.text-center Valor 3.1
          td.text-center Valor 4.1
        tr
          td Condición 1
          td.text-center Valor 1.1 
          td.text-center Valor 2.1
          td.text-center Valor 3.1
          td.text-center Valor 4.1
        tr
          td(colspan="5" style="border-bottom: 3px solid #fecb2e; border-top: 3px solid #fecb2e ")
            h4.mb-0 Acciones 
        tr
          td Acción 1
          td.text-center.fw-bold X
          td.text-center.fw-bold X
          td.text-center.fw-bold 
          td.text-center.fw-bold X
        tr
          td Acción 2
          td.text-center.fw-bold X
          td.text-center.fw-bold X
          td.text-center.fw-bold X
          td.text-center.fw-bold X
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta(style=" border: 3px solid #f6f6f6 ").p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5: img(src='@/assets/curso/temas/tema3/14.svg', alt='')
            .col-lg-10
              p Para mayor comprensión sobre la implementación de la técnica de tablas de decisión, se expone el siguiente ejemplo: una empresa donde todos los empleados reciben algún tipo de incentivo; sin embargo, aquellos que tienen más de 5 años de antigüedad acceden a la devolución de los gastos de viáticos que tengan durante el mes, por realizar su labor. Además, los empleados que poseen un cargo directivo, accederán también al pago del estacionamiento durante la jornada de trabajo, aún si tienen o no, los 5 años de antigüedad. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2 
      p.mb-0
        em Ejemplo de una tabla de decisión caso práctico
    table.mb-5

      thead(style="background-color: #4dd0e1")
        tr.text-center
          th Condiciones del empleado
          th Regla 1
          th Regla 2
          th Regla 3
          th Regla 4
      tbody
        tr
          td Antigüedad > 5 años
          td.text-center Sí
          td.text-center No
          td.text-center No
          td.text-center Sí
        tr
          td Cargo directivo
          td.text-center No 
          td.text-center No 
          td.text-center Sí
          td.text-center Sí
        tr
          td(colspan="5" style="border-bottom: 3px solid #fecb2e; border-top: 3px solid #fecb2e ")
            h4.mb-0 Acciones de la empresa 
        tr
          td Devolución de viáticos
          td.text-center.fw-bold X
          td.text-center.fw-bold 
          td.text-center.fw-bold
          td.text-center.fw-bold X
        tr
          td Estacionamiento gratis
          td.text-center.fw-bold 
          td.text-center.fw-bold 
          td.text-center.fw-bold X
          td.text-center.fw-bold X
    p.mb-5(data-aos='fade-right') Como se evidencia, la complejidad estaba en el enunciado, pero luego de sistematizarlo como una tabla de decisión, las cuatro reglas se convierten en casos de prueba del sistema, que garantizarán la validación de los requisitos expuestos en el problema. 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
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
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title, .linea-tiempo-d__item__content__slot
  background-color: #d2f3f7
</style>
