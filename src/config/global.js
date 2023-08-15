export default {
  global: {
    componenteFormativo: 'Pruebas y calidad de <em>software</em>',
    descripcionCurso:
      'Las pruebas de calidad de <i>software</i> o <i>testing</i>, son los procesos que proporcionan herramientas para constatar la calidad de una aplicación y con esto evitar que se presenten fallas en la implementación. Las pruebas hacen parte de las fases del desarrollo del <i>software</i>, y son fundamentales para descubrir los errores o <i>bugs</i>, antes que los usuarios finales.',
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
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseñar pruebas',
        desarrolloContenidos: true,
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
      tema: 'Introducción a las pruebas de software',
      referencia:
        'Verona, S., Delgado, M., Güemes, A. & Castillo, M. (2022). Good practices for software test automation. Case study in an electronic store.<i> Revista Cubana de Ciencias Informáticas,</i> 16(2), p. 101–117.',
      tipo: 'Artículo',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=fap&AN=158595501&lang=es&site=ehost-live  ',
    },
    {
      tema: 'Introducción a las pruebas de software ',
      referencia:
        'Piattini M., García, F., Pino, F. & García, I. (2020).<i> Calidad de sistemas de información.</i> Editorial Rama. ',
      tipo: 'Libro',
      link: 'http://190.57.147.202:90/xmlui/handle/123456789/2773',
    },
    {
      tema: 'Introducción a las pruebas de software',
      referencia:
        'Subra, J. (2020). Scrum:<i> un método ágil para sus proyectos</i> (2ª ed.). Ediciones ENI.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_biblioteca_eniDPT3SCRU  ',
    },
    {
      tema: 'Introducción a las pruebas de software',
      referencia:
        'Casanovas, I., Rozo, M. & Pollo, C. (2020). Ontología para transferir conocimiento en la etapa de pruebas de software.<i> Revista de las Personas y Tecnología</i>, 13(39), p. 69-92.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001444710  ',
    },
    {
      tema: 'Tipos de pruebas',
      referencia:
        'Páez, J., Cortes, J., Simanca, F. & Blanco, F. (2021). Aplicación de UML y SCRUM al desarrollo del software sobre control de acceso.<i> Información Tecnológica</i>, 32(5), p. 57–66. ',
      tipo: 'Artículo',
      link:
        'https://doi-org.bdigital.sena.edu.co/10.4067/S0718-07642021000500057  ',
    },
  ],
  glosario: [
    {
      termino: '<em>Debugging</em>',
      significado:
        'proceso que implanta puntos de interrupción o <i>breakpoint</i>, para analizar el estado del <i>software</i> en una parte dada del código.',
    },
    {
      termino: 'Programación extrema',
      significado:
        'agrupación de reglas que generan agilidad y resiliencia a las organizaciones en la ejecución de los proyectos de <em>software</em> en contextos que son muy variables.',
    },
    {
      termino: 'Pruebas funcionales',
      significado:
        'verificación de los elementos críticos del negocio, se ajustan con las funcionalidades del <em> software </em> y operan de acuerdo con lo esperado sin presentar errores.',
    },
    {
      termino: 'Pruebas no funcionales',
      significado:
        'atributos de la calidad que se encargan de verificar requisitos cuando el <em> software </em> está en operación y no sus funcionalidades',
    },
    {
      termino: 'Sprint',
      significado:
        'lapsos de tiempo, por lo general de dos a cuatro semanas, que se imponen para cumplir con las metas propuestas.',
    },
    {
      termino: 'Tabla de decisión',
      significado:
        'combinación de condiciones, reglas y acciones que se pueden representar en una matriz para mayor comprensión.',
    },
    {
      termino: '<em>Testing</em>',
      significado:
        'mecanismo para la verificación y validación de las funcionalidades de los programas o aplicaciones de <em> software </em> con el fin de ofrecer un producto sin defectos o errores.',
    },
    {
      termino: '<i>Testing</i> de humo',
      significado:
        'pruebas rápidas que se realizan en la etapa inicial del plan de pruebas para verificar con prontitud que la aplicación sea pertinente en sus salidas y asegurar que los requerimientos prioritarios se cumplan.',
    },
    {
      termino: 'Validación',
      significado:
        'proceso que compara el <em> software </em> que está en construcción con los modelos definidos en los requerimientos a través de sus casos de usos o historias de usuario.',
    },
    {
      termino: 'Verificación',
      significado:
        'proceso para controlar que el producto en desarrollo haga lo que tiene que hacer.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfaro, A. y Carrizo, D. (2021).<i> Método de aseguramiento de la calidad en una metodología de desarrollo de software: un enfoque práctico.</i> Universidad de Tarapacá. ',
      link:
        'https://www-virtualpro-co.bdigital.sena.edu.co/descarga/metodo-de-aseguramiento-de-la-calidad-en-una-metodologia-de-desarrollo-de-software-un-enfoque-practico ',
    },
    {
      referencia: 'IBM. (2022). <i>¿Qué es la prueba de software?</i>',
      link: 'https://www.ibm.com/es-es/topics/software-testing ',
    },
    {
      referencia:
        'Ramos, A., Pérez, H., Nava, S. & Martínez, F. (2022). Mic-agile: metodología ágil para micro-equipos de desarrollo de software.<i> Revista Ingenio</i>, 19(1), p. 1-8.',
      link: 'https://doi.org/10.22463/2011642X.2779 ',
    },
    {
      referencia:
        'Solarte, G., Castro, Y. & Muñoz, L. (2019). Planificación, gestión y control de la calidad del software. <i>Scientia Et Technica,</i> 24(4), p. 611-617.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001364569',
    },
    {
      referencia:
        'Pérez, Y., Gallegos, J., Zapata, S., Ccama, D. & Choque. R. (2020). Design Thinking en la planificación de pruebas de software.<i> Revista Innovación y Software,</i> 1(2), p. 40-51.',
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
