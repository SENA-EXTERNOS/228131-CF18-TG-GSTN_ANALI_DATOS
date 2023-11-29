(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"21da":function(e,t,a){e.exports=a.p+"img/9.c66ea7db.svg"},"242f":function(e,t,a){e.exports=a.p+"img/4.2f67885d.svg"},"296e":function(e,t,a){e.exports=a.p+"img/7.1d7bc8cb.png"},3204:function(e,t,a){e.exports=a.p+"img/10.d0e16e05.svg"},3927:function(e,t,a){e.exports=a.p+"img/6.f1827966.png"},3988:function(e,t,a){e.exports=a.p+"img/13.ce83a302.svg"},"57cd":function(e,t,a){e.exports=a.p+"img/2.1885e3d1.svg"},"5c2c":function(e,t,a){e.exports=a.p+"img/12.912a052d.svg"},b3ca:function(e,t,a){e.exports=a.p+"img/3.2099a887.png"},b420:function(e,t,a){},b8c0:function(e,t,a){e.exports=a.p+"img/1.285e12eb.svg"},c1aa:function(e,t,a){e.exports=a.p+"img/5.cc0cd28b.png"},d11f:function(e,t,a){e.exports=a.p+"img/11.8f1a96e6.svg"},e60d:function(e,t,a){e.exports=a.p+"img/14.a0c3c907.svg"},eb46:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),e._m(1),s("h2",{staticClass:"mb-5"},[e._v("Particiones de equivalencia")]),e._m(2),s("div",{staticClass:"row justify-content-center mb-5"},[e._m(3),s("div",{staticClass:"col-lg-6",attrs:{"data-aos":"fade-left"}},[s("LineaTiempoD",{staticClass:"color-acento-contenido"},[s("p",{staticClass:"text-small",attrs:{numero:"1",titulo:"Disminución de casos de pruebas"}},[e._v("Como las pruebas están agrupadas en particiones, permiten minimizar los casos de pruebas, ya que basta con testear un elemento o representante de la partición para obtener resultados que identifican a todos los elementos.")]),s("p",{staticClass:"text-small",attrs:{numero:"2",titulo:"Detección de inconsistencia "}},[e._v("Cuando se clasifican las pruebas en los subconjuntos, se pueden identificar pruebas que no encajan en ninguna de las particiones, por tanto, ayuda a detectar errores en las especificaciones o requisitos.")]),s("p",{staticClass:"text-small",attrs:{numero:"3",titulo:"Funcionales en el plan de pruebas "}},[e._v("Son útiles para identificar la terminación de una prueba, es decir, dentro del plan de pruebas se puede implementar un criterio de finalización cuando se ejecute al menos un elemento de la partición de equivalencia. ")])])],1)]),e._m(4),s("h2",{staticClass:"mb-5"},[e._v("Valores límites y análisis de robustez")]),e._m(5),s("TabsB",{staticClass:"color-acento-contenido mb-5"},[s("div",{staticClass:"p-4 py-md-5",attrs:{titulo:"Errores en la definición <br> de valores límites",icono:a("fc50")}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 mb-4 mb-md-0"},[s("p",[e._v("Los desarrolladores tienden a pasar por alto errores en la definición de valores límites al establecer condiciones como mayor que, menor que, mayor o igual que y menor o igual que.")])]),s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:a("c1aa"),alt:""}})])])]),s("div",{staticClass:"p-4 py-md-5",attrs:{titulo:"Ejemplo <br> de aplicación",icono:a("21da")}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 mb-4 mb-md-0"},[s("p",[e._v("Un ejemplo de la aplicación de esta técnica puede ser en el "),s("i",[e._v("testing")]),e._v(" de un módulo donde se verifica que la edad de una persona está entre el rango de 18 a 25 años, para asignar una promoción y con ello un descuento. Si el requerimiento especifica que el rango de edad es entre 18 y 25 años, el código fuente de la aplicación, deberá contener las operaciones de mayor o igual que, y menor o igual que. En caso de no contener dichas restricciones, se generarán "),s("i",[e._v("bugs")]),e._v(" que tendrán que ser corregidos. ")])]),s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:a("3927"),alt:""}})])])]),s("div",{staticClass:"p-4 py-md-5",attrs:{titulo:"Análisis <br> de robustez",icono:a("3204")}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 mb-4 mb-md-0"},[s("p",[e._v("Se fija en los extremos de las clases de equivalencias, pero llevando las pruebas al extremo. Esto es de gran utilidad para aquellos módulos donde es importante el análisis de valores numéricos con decimales, ya sean valores muy grandes o pequeños. En el ejemplo de la edad visto anteriormente, se puede aplicar un análisis de robustez si en las especificaciones se establece que las promociones se darán si el usuario está muy cerca a cumplir el rango de edad establecido, por ejemplo, si tiene más de 17 años, 9 meses y hasta 25 años, 1 mes. ")])]),s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:a("296e"),alt:""}})])])])]),s("h2",{staticClass:"mb-5"},[e._v("Diagrama de transición de estados")]),e._m(6),e._m(7),e._m(8),s("h2",{staticClass:"mb-5"},[e._v("Tablas de decisión ")]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-10",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"bloque-derecha"},[s("div",{staticClass:"bloque-texto-g color-primario p-3 p-sm-4 p-md-5"},[s("div",{staticClass:"bloque-texto-g__img",style:{"background-image":"url("+a("3988")+")"}}),e._m(9)])])])]),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),s("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-right"}},[e._v("Como se evidencia, la complejidad estaba en el enunciado, pero luego de sistematizarlo como una tabla de decisión, las cuatro reglas se convierten en casos de prueba del sistema, que garantizarán la validación de los requisitos expuestos en el problema. ")]),e._m(15)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-principal color-acento-contenido"},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[e._v("3")])]),a("h1",[e._v("Diseñar pruebas")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-3 col-6",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:a("b8c0"),alt:""}})]),s("div",{staticClass:"col-lg-7"},[s("div",{staticClass:"cajon-b color-primario p-3 mb-5 abajo-derecha"},[s("p",{staticClass:"mb-0"},[e._v("Teniendo en cuenta que las pruebas de "),s("i",[e._v("software")]),e._v(" no pueden probar todo y que las pruebas exhaustivas no son posibles, es pertinente que las pruebas aplicadas se acerquen a los estándares de calidad y sean eficientes, de modo que las técnicas que se ejecuten en el "),s("i",[e._v("testing")]),e._v(" de "),s("i",[e._v("software")]),e._v(", maximicen la posibilidad de encontrar "),s("i",[e._v("bugs")]),e._v(" y minimicen la cantidad de pruebas aplicadas. Algunas de las técnicas más usadas son: particiones de equivalencia, valores límites y análisis de robustez, diagrama de transición de estados y tablas de decisión. ")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-2 col-6",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:a("57cd"),alt:""}})]),s("div",{staticClass:"col-lg-10",attrs:{"data-aos":"fade-left"}},[s("p",{staticClass:"mb-0"},[e._v("Esta técnica parte del concepto matemático de conjuntos, donde los conjuntos contienen varios subconjuntos que cumplen con dos condiciones: la primera, que la intercesión de dos subconjuntos sea nula, es decir, los criterios de uno no se repiten en el otro y, la segunda, que la sumatoria de todos los subconjuntos o particiones den como resultado el conjunto total. "),s("br"),s("br"),e._v("Las ventajas que supone esta técnica de pruebas son las siguientes: ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-6",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:a("b3ca"),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[a("div",{staticClass:"cajon color-acento-botones p-4 mb-4",staticStyle:{"background-color":"#fff2ca"}},[a("p",{staticClass:"mb-0"},[e._v("La desventaja principal de esta técnica es que no permite combinar particiones entre sí, lo que genera limitantes a la hora de cruzar elementos que guardan relación con otros, pero se encuentran en distintas particiones.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center align-items-center mb-5"},[s("div",{staticClass:"col-lg-3 col-6",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:a("242f"),alt:""}})]),s("div",{staticClass:"col-lg-7"},[s("div",{staticClass:"cajon-b color-primario p-3 mb-5 abajo-derecha"},[s("p",{staticClass:"mb-0"},[e._v("La técnica de valores límites y análisis de robustez, centra su enfoque en los límites de las particiones e implica testear las clases de equivalencia en los bordes de las particiones, porque, estadísticamente, en estos bordes es donde se presenta la más alta la probabilidad de encontrar la mayoría de los "),s("i",[e._v("bugs")]),e._v(".")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-2 col-6",attrs:{"data-aos":"fade-right"}},[s("img",{attrs:{src:a("d11f"),alt:""}})]),s("div",{staticClass:"col-lg-10"},[s("p",[e._v("Esta técnica representa los diferentes estados por los que un objeto cambia en una aplicación, bien sea por un proceso o por un producto. Los diagramas que se crean bajo esta técnica, están formados por estados, eventos y transiciones. Por ejemplo, en un sistema que hace seguimiento a los pedidos de los clientes, se aplica un diseño de pruebas con la técnica de transición de estados, debido a que el pedido pasará por varias condiciones a lo largo del proceso, como: ingresado, en preparación, despachado y entregado.")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-10"},[s("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[s("h5",[e._v("Figura 1")]),s("p",{staticClass:"mb-0"},[s("em",[e._v("Ejemplo de transición de estados")])])]),s("img",{staticClass:"mb-5",attrs:{src:a("5c2c"),alt:""}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"cajon color-acento-botones p-4 mb-4",staticStyle:{"background-color":"#fff2ca"}},[a("p",{staticClass:"mb-0"},[e._v("Los diagramas de transición de estados son fundamentales en el "),a("i",[e._v("testing")]),e._v(" de "),a("i",[e._v("software")]),e._v(" porque permiten entender cuáles son las transiciones válidas e inválidas en el sistema. Por ejemplo, si una aplicación que gestiona pedidos pasa de un estado “ingresado” a “despachado”, se identifica un "),a("i",[e._v("bug")]),e._v(", porque previamente deberá pasar por el estado “en preparación”. ")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bloque-texto-g__texto p-4 w-75"},[a("p",{staticClass:"mb-0"},[e._v("La técnica de tablas de decisión resuelve el inconveniente que tienen las técnicas de particiones de equivalencia y análisis de robustez, donde no se permite el "),a("i",[e._v("testing")]),e._v(" entre las interacciones de los subconjuntos del sistema. En términos generales, una tabla de decisión es una combinación de condiciones, reglas y acciones, las cuales se pueden representar en una matriz, para su mayor compresión.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[a("h5",[e._v("Tabla 1 ")]),a("p",{staticClass:"mb-0"},[a("em",[e._v("Tabla de decisión")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"mb-5"},[a("thead",{staticStyle:{"background-color":"#4dd0e1"}},[a("tr",{staticClass:"text-center"},[a("th",[e._v("Condiciones")]),a("th",[e._v("Regla 1")]),a("th",[e._v("Regla 2")]),a("th",[e._v("Regla 3")]),a("th",[e._v("Regla 4")])])]),a("tbody",[a("tr",[a("td",[e._v("Condición 1")]),a("td",{staticClass:"text-center"},[e._v("Valor 1.1 ")]),a("td",{staticClass:"text-center"},[e._v("Valor 2.1")]),a("td",{staticClass:"text-center"},[e._v("Valor 3.1")]),a("td",{staticClass:"text-center"},[e._v("Valor 4.1")])]),a("tr",[a("td",[e._v("Condición 1")]),a("td",{staticClass:"text-center"},[e._v("Valor 1.1 ")]),a("td",{staticClass:"text-center"},[e._v("Valor 2.1")]),a("td",{staticClass:"text-center"},[e._v("Valor 3.1")]),a("td",{staticClass:"text-center"},[e._v("Valor 4.1")])]),a("tr",[a("td",[e._v("Condición 1")]),a("td",{staticClass:"text-center"},[e._v("Valor 1.1 ")]),a("td",{staticClass:"text-center"},[e._v("Valor 2.1")]),a("td",{staticClass:"text-center"},[e._v("Valor 3.1")]),a("td",{staticClass:"text-center"},[e._v("Valor 4.1")])]),a("tr",[a("td",{staticStyle:{"border-bottom":"3px solid #fecb2e","border-top":"3px solid #fecb2e"},attrs:{colspan:"5"}},[a("h4",{staticClass:"mb-0"},[e._v("Acciones ")])])]),a("tr",[a("td",[e._v("Acción 1")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"}),a("td",{staticClass:"text-center fw-bold"},[e._v("X")])]),a("tr",[a("td",[e._v("Acción 2")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-10",attrs:{"data-aos":"zoom-in"}},[s("div",{staticClass:"tarjeta p-5",staticStyle:{border:"3px solid #f6f6f6"}},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-lg-2 col-5"},[s("img",{attrs:{src:a("e60d"),alt:""}})]),s("div",{staticClass:"col-lg-10"},[s("p",[e._v("Para mayor comprensión sobre la implementación de la técnica de tablas de decisión, se expone el siguiente ejemplo: una empresa donde todos los empleados reciben algún tipo de incentivo; sin embargo, aquellos que tienen más de 5 años de antigüedad acceden a la devolución de los gastos de viáticos que tengan durante el mes, por realizar su labor. Además, los empleados que poseen un cargo directivo, accederán también al pago del estacionamiento durante la jornada de trabajo, aún si tienen o no, los 5 años de antigüedad. ")])])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-sexto color-acento-contenido",attrs:{"data-aos":"fade-right"}},[a("h5",[e._v("Tabla 2 ")]),a("p",{staticClass:"mb-0"},[a("em",[e._v("Ejemplo de una tabla de decisión caso práctico")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"mb-5"},[a("thead",{staticStyle:{"background-color":"#4dd0e1"}},[a("tr",{staticClass:"text-center"},[a("th",[e._v("Condiciones del empleado")]),a("th",[e._v("Regla 1")]),a("th",[e._v("Regla 2")]),a("th",[e._v("Regla 3")]),a("th",[e._v("Regla 4")])])]),a("tbody",[a("tr",[a("td",[e._v("Antigüedad > 5 años")]),a("td",{staticClass:"text-center"},[e._v("Sí")]),a("td",{staticClass:"text-center"},[e._v("No")]),a("td",{staticClass:"text-center"},[e._v("No")]),a("td",{staticClass:"text-center"},[e._v("Sí")])]),a("tr",[a("td",[e._v("Cargo directivo")]),a("td",{staticClass:"text-center"},[e._v("No ")]),a("td",{staticClass:"text-center"},[e._v("No ")]),a("td",{staticClass:"text-center"},[e._v("Sí")]),a("td",{staticClass:"text-center"},[e._v("Sí")])]),a("tr",[a("td",{staticStyle:{"border-bottom":"3px solid #fecb2e","border-top":"3px solid #fecb2e"},attrs:{colspan:"5"}},[a("h4",{staticClass:"mb-0"},[e._v("Acciones de la empresa ")])])]),a("tr",[a("td",[e._v("Devolución de viáticos")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"}),a("td",{staticClass:"text-center fw-bold"}),a("td",{staticClass:"text-center fw-bold"},[e._v("X")])]),a("tr",[a("td",[e._v("Estacionamiento gratis")]),a("td",{staticClass:"text-center fw-bold"}),a("td",{staticClass:"text-center fw-bold"}),a("td",{staticClass:"text-center fw-bold"},[e._v("X")]),a("td",{staticClass:"text-center fw-bold"},[e._v("X")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-8",attrs:{"data-aos":"zoom-in"}},[a("div",{staticClass:"cajon color-acento-botones p-4 mb-4",staticStyle:{"background-color":"#fff2ca"}},[a("p",{staticClass:"mb-0"},[e._v("Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.")])])])])}],n={name:"Tema3",data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},o=n,c=(a("fe2b"),a("2877")),r=Object(c["a"])(o,s,i,!1,null,null,null);t["default"]=r.exports},fc50:function(e,t,a){e.exports=a.p+"img/8.1bff92cd.svg"},fe2b:function(e,t,a){"use strict";a("b420")}}]);
//# sourceMappingURL=tema3.c4894296.js.map