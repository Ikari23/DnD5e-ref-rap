data_movement = [
    {
        title: "Mover",
        icon: "run",
        subtitle: "Coste: 5 pies cada 5 pies",
        description: "Coste del movimiento: 5 pies cada 5 pies movidos",
        reference: "Manual del Jugador, pg. 186, capítulo 8: Combate",
        bullets: [
            "Si posees más de una velocidad (como Velocidad Caminando y Velocidad Volando) puedes cambiar entre una y otra durante tu movimiento. Cada vez que lo hagas, resta la distancia que ya te has movido de la nueva velocidad. Lo que quede será lo que aún te puedes mover.",
            "Puedes moverte atravesando el espacio ocupado por otra criatura no hostil.",
            "Solo podrás moverte a través de una criatura hostil si su Tamaño es al menos dos categorías superior o inferior al tuyo.",
            "El espacio que ocupa otra criatura se considera Terreno Difícil",
            "Ya sea amiga o enemiga, en ningún caso puedes terminar tu movimiento en el espacio de otra criatura."
        ]
    },
    {
        title: "Trepar",
        icon: "crags",
        subtitle: "Coste: 10 pies cada 5 pies",
        description: "Coste del movimiento: 10 pies cada 5 pies trepados",
        reference: "Manual del Jugador, pg. 178, capítulo 7: Aventuras",
        bullets: [
            "Puede involucrar una Prueba de Fuerza (Atletismo) si trepar la superfície es dificil"
        ]
    },
    {
        title: "Nadar",
        icon: "at-sea",
        subtitle: "Coste: 10 pies cada 5 pies",
        description: "Coste del movimiento: 10 pies cada 5 pies nadados",
        reference: "Manual del Jugador, pg. 178, capítulo 7: Aventuras",
        bullets: [
            "Puede involucrar una Prueba de Fuerza (Atletismo) si nadar por el entorno es dificil"
        ]
    },
    {
        title: "Tirarte al Suelo",
        icon: "falling",
        subtitle: "Coste: 0 pies",
        description: "Coste del movimiento: 0 pies (gratis)",
        reference: "Manual del Jugador, pgs. 186-187,285, capítulo 8: Combate; Apéndice A: Estados",
        bullets: [
            "Puedes tirarte al suelo voluntariamente sin tener que gastar parte de tu velocidad.",
            "Para moverte estando <i>Derribado</i>, deberás arrastrarte o recurrir a efectos mágicos como la teletransportación.",
            "Tirarte al suelo añade el Estado <i>Derribado</i> (los ataques cuerpo a cuerpo contra ti tienen ventaja, los ataques a distancia contra ti tienen desventaja, tus propios ataques tienen desventaja)"
        ]
    },
    {
        title: "Arrastrarse",
        icon: "crawl",
        subtitle: "Coste: 10 pies cada 5 pies",
        description: "Coste del movimiento: 10 pies cada 5 pies arrastrados",
        reference: "Manual del Jugador, pg. 178, capítulo 7: Aventuras",
        bullets: [

        ]
    },
    {
        title: "Levantarse",
        icon: "strong",
        subtitle: "Coste: la mitad de la Velocidad",
        description: "Coste del Movimiento: la mitad de tu Velocidad",
        reference: "Manual del Jugador, pgs. 186-187, capítulo 8: Combate",
        bullets: [
            "No podrás levantarte si no tienes suficiente movimiento restante o si tu velocidad es 0."
        ]
    },
    {
        title: "Salto de Altura",
        icon: "wingfoot",
        subtitle: "Coste: 5 pies cada 5 pies",
        description: "Coste del movimiento: 5 pies cada 5 pies saltados",

        reference: "Manual del Jugador, pg. 178, capítulo 7: Aventuras",
        bullets: [
            "Cuando haces un salto de altura ascenderás tantos pies como tu Modificador de Fuerza +3 (como mínimo 0 pies) si te mueves al menos 10 pies antes de saltar.",
            "Si saltas sin haber cogido carrerilla solo alcanzarás la mitad de esa distancia",
            "Puedes estirar los brazos una distancia equivalente a la mitad de tu altura (no la de tu salto) por encima de ti.",
            "A veces el DM te permitirá hacer una Prueba de Fuerza (Atletismo) para saltar más alto de lo que normalmente podrías."
        ]
    },
    {
        title: "Salto de Longitud",
        icon: "wingfoot",
        subtitle: "Coste: 5 pies cada 5 pies",
        description: "Coste del movimiento: 5 pies cada 5 pies saltados",
        reference: "Manual del Jugador, pg. 178, capítulo 7: Aventuras",
        bullets: [
            "Cuando hagas un salto de longitud avanzarás tantos pies como tu <b>Puntuación de Fuerza</b> si te mueves al menos 10 pies antes de saltar",
            "Si saltas sin haber cogido carrerilla solo recorrerás la mitad de esa distancia",
            "Si el DM así lo juzga, tendrás que superar una Prueba de Fuerza (Atletismo) CD 10 para superar un obstáculo de una altura no superior a la cuarta parte de la distancia del salto, como puede ser un seto o un muro bajo. Si no lo logras, Chocarás contra el obstáculo.",
            "Si aterrizas en terreno difícil tendrás que superar una Prueba de Destreza (Acrobacias) CD 10 para caer de pie. De lo contrario, quedarás Derribado."
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Cualquier truco que no esté en esta lista",
        description: "Realiza cualquier movimiento o acrobacia que puedas imaginar",
        bullets: [
            "Cuando describas un tipo de movimiento no detallado en otra parte de las reglas, el DM te dirá si es posible y qué tipo de tirada tienes que hacer, si es que hay alguna, para determinar el éxito o el fracaso."
        ]
    },
    {
        title: "Terreno Dificil",
        icon: "stone-pile",
        subtitle: "Modificador: +5 pies cada 5 pies",
        reference: "Manual del Jugador, pg. 178, capítulo 7: Aventuras",
        description: "Moverse por Terreno Difícil cuesta 5 pies adicionales por cada 5 pies de movimiento",
        bullets: [
        ]
    },
    {
        title: "Mover una Criatura Agarrada",
        icon: "grab",
        subtitle: "Modificador: mitad de velocidad",
        description: "Arrastra o lleva a la criatura Agarrada contigo",
        reference: "Manual del Jugador, pg. 191, capítulo 8: Combate",
        bullets: [
            "Cuando te mueves puedes arrastrar o transportar a la criatura agarrada, pero tu velocidad se reducirá a la mitad salvo si dicha criatura está dos o más categorías de tamaño por debajo de la tuya.",
            "Consulta la Acción de Ataque para saber cómo agarrar a una criatura."
        ]
    }
]
