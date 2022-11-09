export default {
  global: {
    componenteFormativo: 'Pruebas y calidad de <em>software</em>',
    descripcionCurso:
      'Las pruebas de calidad de <em>software</em> o <em>Testing</em> en inglés son los procesos que proporcionan herramientas para constatar la calidad de una aplicación y con ello evitar que se presenten fallas en la implementación. Las pruebas hacen parte de las fases del desarrollo del <em>software</em> y son fundamentales para descubrir los errores o bugs antes que los usuarios finales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a pruebas de <em> software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em> Testing</em> y calidad de <em> software</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios de las pruebas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Metodología de desarrollo de <em> software</em> ágil',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Prueba ágil',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Pruebas según conocimiento del software',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pruebas según su finalidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Pruebas según nivel',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Pruebas según funcionalidad',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estrategias de pruebas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseñar pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Particiones de equivalencia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Valores límites y análisis de robustez',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Diagrama de transición de estados',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tablas de decisión',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Automatización de pruebas',
      referencia:
        'Verona, S., Delgado, M., Güemes, A. & Castillo, M. (2022). Good practices for software test automation. Case study in an electronic store. Revista Cubana de Ciencias Informáticas, 16(2), 101–117.',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=158595501&lang=es&site=ehost-live  ',
    },
    {
      tema: 'Calidad ',
      referencia:
        'Piattini M., García, F., Pino, F. & García, I. (2020). Calidad de sistemas de información. Editorial Rama. ',
      tipo: 'Libro',
      link:
        'https://www.alphaeditorialcloud.com/library/publication/calidad-de-sistemas-de-informacion-5a-edicion-ampliada-y-actualizada  ',
    },
    {
      tema: 'Metodología ágil',
      referencia:
        'Subra, J. (2020). Scrum: un método ágil para sus proyectos (2ª ed.). Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_biblioteca_eniDPT3SCRU  ',
    },
    {
      tema: 'Pruebas de <em> software</em>',
      referencia:
        'Casanovas, I., Rozo, M. & Pollo, C. (2020). Ontología para transferir conocimiento en la etapa de pruebas de software. Revista de las Personas y Tecnología, 13(39),69-92..',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001444710  ',
    },
    {
      tema: 'Scrum',
      referencia:
        'Páez, J., Cortes, J., Simanca, F. & Blanco, F. (2021). Aplicación de UML y SCRUM al desarrollo del software sobre control de acceso. Información Tecnológica. 32(5), 57–66. ',
      tipo: 'Artículo',
      link:
        'https://doi-org.bdigital.sena.edu.co/10.4067/S0718-07642021000500057  ',
    },
  ],
  glosario: [
    {
      termino: '<em> Debugging</em>',
      significado:
        'Proceso que implanta puntos de interrupción o breakpoint para analizar el estado del <em>software</em> en una parte dada del código.',
    },
    {
      termino: 'Programación extrema',
      significado:
        'Agrupación de reglas que generan agilidad y resiliencia a las organizaciones en la ejecución de los proyectos de software en contextos que son muy variables.',
    },
    {
      termino: 'Pruebas funcionales',
      significado:
        'Verificación de los elementos críticos del negocio, se ajustan con las funcionalidades del <em> software </em> y operan de acuerdo con lo esperado sin presentar errores.',
    },
    {
      termino: 'Pruebas no funcionales',
      significado:
        'Atributos de la calidad que se encargan de verificar requisitos cuando el <em> software </em> está en operación y no sus funcionalidades',
    },
    {
      termino: '<em> Sprint </em>',
      significado:
        'Lapsos de tiempo, por lo general de dos a cuatro semanas, que se imponen para cumplir con las metas propuestas.',
    },
    {
      termino: 'Tabla de decisión',
      significado:
        'Combinación de condiciones, reglas y acciones que se pueden representar en una matriz para mayor comprensión.',
    },
    {
      termino: '<em> Testing </em>',
      significado:
        'Mecanismo para la verificación y validación de las funcionalidades de los programas o aplicaciones de <em> software </em> con el fin de ofrecer un producto sin defectos o errores.',
    },
    {
      termino: 'Testing de humo',
      significado:
        'Pruebas rápidas que se realizan en la etapa inicial del plan de pruebas para verificar con prontitud que la aplicación sea pertinente en sus salidas y asegurar que los requerimientos prioritarios se cumplan.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso que compara el <em> software </em> que está en construcción con los modelos definidos en los requerimientos a través de sus casos de usos o historias de usuario.',
    },
    {
      termino: 'Verificación',
      significado:
        'Proceso para controlar que el producto en desarrollo haga lo que tiene que hacer.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfaro, A. y Carrizo, D. (2021). Método de aseguramiento de la calidad en una metodología de desarrollo de software: un enfoque práctico. Universidad de Tarapacá',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/descarga/metodo-de-aseguramiento-de-la-calidad-en-una-metodologia-de-desarrollo-de-software-un-enfoque-practico ',
    },
    {
      referencia:
        'IBM. (2022). ¿Qué es la prueba de software? Recuperado el 12 de octubre de 2022. ',
      link: 'https://www.ibm.com/es-es/topics/software-testing ',
    },
    {
      referencia:
        'Ramos, A., Pérez, H., Nava, S. & Martínez, F. (1 de enero de 2022). Mic-agile: metodología ágil para micro-equipos de desarrollo de software. Revista Ingenio, 19(1), 1-8.',
      link: 'https://doi.org/10.22463/2011642X.2779 ',
    },
    {
      referencia:
        'Solarte, G., Castro, Y. & Muñoz, L. (30 de diciembre de 2019). Planificación, gestión y control de la calidad del software. Scientia Et Technica, 24(4), 611-617. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001364569',
    },
    {
      referencia:
        'Pérez, Y., Gallegos, J., Zapata, S., Ccama, D. & Choque. R. (30 de septiembre de 2020). Design Thinking en la planificación de pruebas de software. Revista Innovación y Software, 1(2), 40-51.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_49cd1beda5b84284be236b081b7bd5cf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
