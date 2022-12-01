data_condition = [
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Estás agarrado",
        description: "Estás agarrado",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Tu velocidad se reduce a 0, y no puedes beneficiarte de ninguna bonificación a tu velocidad.",
            "El Estado finaliza si tu agarrador está Incapacitado.",
            "El Estado también finaliza si eres eliminado del alcance de tu agarrador."
        ]
    },
    {
        title: "Apresado",
        icon: "imprisoned",
        subtitle: "Estás apresado",
        description: "Estás apresado",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Tu velocidad pasa a ser 0, y no puedes beneficiarte de ninguna bonificación a tu velocidad.",
            "Tienes Desventaja en las Tiradas de Ataque.",
            "Las Tiradas de Ataque contra ti tienen Ventaja.",
            "Tienes Desventaja en las Tiradas de Salvación de Destreza."
        ]
    },
    {
        title: "Asustado",
        icon: "sharp-smile",
        subtitle: "Estás asustado",
        description: "Estás asustado",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Tienes desventaja en las Pruebas de Característica y en las Tiradas de Ataque mientras la fuente de tu miedo esté dentro de la línea de visión.",
            "No puedes acercarte voluntariamente a la fuente de tu miedo."
        ]
    },
    {
        title: "Aturdido",
        icon: "internal-injury",
        subtitle: "Estás aturdido",
        description: "Estás aturdido",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Estás Incapacitado, no puedes moverte y sólo puedes hablar entrecortadamente.",
            "Las Tiradas de Ataque contra ti tienen Ventaja.",
            "Fallas automáticamente las Tiradas de Salvación de Fuerza y Destreza."
        ]
    },
    {
        title: "Cansancio",
        icon: "crawl",
        subtitle: "Estás cansado",
        description: "El cansacio se mide en seis niveles",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "<table><tr><th>Nivel</th><th></th><th></th><th style='text-align:left'>Efecto</th></tr><tr><td>1</td><td></td><td></td><td>Desventaja en las Pruebas de Característica</td></tr><tr><td>2</td><td></td><td></td><td>Velocidad a la mitad</td></tr><tr><td>3</td><td></td><td></td><td>Desventaja en las Tiradas de Ataque y de Salvación</td></tr><tr><td>4</td><td></td><td></td><td>Puntos de Golpe Máximos a la mitad</td></tr><tr><td>5</td><td></td><td></td><td>Velocidad reducida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Muerte</td></tr></table>",
            "Sufres el efecto de tu nivel actual de Cansancio, así como todos los niveles inferiores.",
            "Terminar un Descanso Largo reduce tu nivel de Cansancio en 1, siempre que también hayas comido y bebido",
            "Además, resucitar de entre los muertos reduce el nivel de Cansancio de la criatura en 1."
        ]
    },
    {
        title: "Cegado",
        icon: "one-eyed",
        subtitle: "No puedes ver",
        description: "No puedes ver",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Fallas automáticamente cualquier Prueba de Característica que requiera la vista.",
            "Tienes Desventaja en las Tiradas de Ataque.",
            "Las Tiradas de Ataque contra ti tienen Ventaja."
        ]
    },
    {
        title: "Derribado",
        icon: "crawl",
        subtitle: "Estás derribado",
        description: "Estás derribado",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Tu única opción de movimiento es Arrastrarte, a menos que te levantes.",
            "Tienes Desventaja en las Tiradas de Ataque.",
            "Las Tiradas de Ataque contra ti tienen Ventaja si el atacante está a menos de 5 pies de ti, de lo contrario la Tirada de Ataque tiene Desventaja."
        ]
    },
    {
        title: "Ensordecido",
        icon: "elf-ear",
        subtitle: "No puedes escuchar",
        description: "No puedes escuchar",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Fallas automáticamente cualquier Prueba de Característica que requiera el oído."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Estás envenenado",
        description: "Estás envenenado",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Tienes Desventaja en las Tiradas de Ataque y en las Pruebas de Característica."
        ]
    },
    {
        title: "Hechizado",
        icon: "smitten",
        subtitle: "Estás hechizado",
        description: "Estás hechizado por otra criatura",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "No puedes atacar a tu hechizador ni apuntarle con habilidades dañinas o efectos mágicos.",
            "Tu hechizador tiene Ventaja en las Pruebas de Característica para interactuar socialmente contigo."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "No puedes realizar Acciones o Reacciones",
        description: "No puedes realizar Acciones o Reacciones",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
        ]
    },
    {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Estás inconsciente",
        description: "Estás inconsciente",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Estás Incapacitado, no puedes moverte ni hablar, y no eres consciente de tu entorno.",
            "Sueltas lo que tienes en la mano y caes Derribado.",
            "Las Tiradas de Ataque contra ti tienen Ventaja.",
            "Cualquier ataque que te impacte es un Golpe Crítico si el atacante está a menos de 5 pies de ti.",
            "Fallas automáticamente las Tiradas de Salvación de Fuerza y Destreza.",
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "No puedes ser visto",
        description: "No puedes ser visto sin la ayuda de la magia o un sentido especial",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Con el fin de Esconderte, estás Muy Oscurecido.",
            "Todavía puedes ser detectado por cualquier ruido que haga o por las huellas que deje.",
            "Tienes Ventaja en las Tiradas de Ataque.",
            "Las Tiradas de Ataque contra ti tienen Desventaja."
        ]
    },
    {
        title: "Paralizado",
        icon: "internal-injury",
        subtitle: "Estás paralizado",
        description: "No puedes hacer nada",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Estás Incapacitado y no puedes moverte ni hablar.",
            "Las Tiradas de Ataque contra ti tienen Ventaja.",
            "Cualquier ataque que te impacte es un Golpe Crítico si el atacante está a menos de 5 pies de ti.",
            "Fallas automáticamente las Tiradas de Salvación de Fuerza y Destreza."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Te transformas en piedra",
        description: "Te transformas, junto con los objetos no mágicos que lleves puestos o que lleves contigo, en una sustancia sólida inanimada (normalmente piedra)",
        reference: "Manual del Jugador, Apéndice A: Estados",
        bullets: [
            "Tu peso se multiplica por diez y dejas de envejecer.",
            "Está Incapacitado, no puede moverse ni hablar, y no es consciente de su entorno.",
            "Las Tiradas de Ataque contra ti tienen Ventaja.",
            "Fallas automáticamente las Tiradas de Salvación de Fuerza y Destreza.",
            "Tienes Resistencia a todo el daño.",
            "Eres Inmune al Veneno y a la enfermedad, aunque un veneno o enfermedad que ya esté en tu sistema sólo se suspende, no se neutraliza."
        ]
    },
    {
        title: "Moribundo",
        icon: "dead-head",
        subtitle: "Estás moribundo",
        description: "Has sido reducido a 0 Puntos de Golpe y estás muriendo",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Si te ves reducido a 0 Puntos de Golpe por un daño que no te mata, caes Inconsciente y estás Moribundo.",
            "Si recibes alguna curación, inmediatamente vuelves a recuperar la conciencia y ya no estás Moribundo.",
            "Al estar Moribundo, al comienzo de cada uno de tus turnos haces una Tirada de Salvación contra Muerte. Tira un d20 y no añadas ningún modificador.",
            "Un 10 o más es un éxito, un 9 o menos es un fallo.",
            "Al tercer éxito, te estabilizas.",
            "En tu tercer fallo, mueres.",
            "Sacar un 1 cuenta como dos fallos.",
            "Al sacar un 20, recuperas inmediatamente 1 Punto de Golpe.",
            "También puedes ser estabilizado por un aliado que realice la Acción Estabilizar y tenga éxito en una Prueba de Sabiduría (Medicina) CD 10.",
            "Una vez estable, recuperas 1 Punto de Golpe después de 1d4 horas."
        ]
    }
]
