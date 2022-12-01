data_environment_obscurance = [
    {
        title: "Ligeramente oscura",
        icon: "bleeding-eye",
        subtitle: "Desventaja en Percepción",
        description: "Luz tenue, niebla irregular, follaje moderado",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Las criaturas tienen <b>Desventaja en las Pruebas de Sabiduría (Percepción)</b> que dependen de la vista."
        ]
    },
    {
        title: "Muy oscura",
        icon: "lightning-tear",
        subtitle: "Efectivamente cegado",
        description: "Oscuridad, niebla opaca, follaje denso",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Una criatura en un área Muy Oscura sufre efectivamente el Estado de <b>Cegado</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Luz brillante",
        icon: "star-pupil",
        subtitle: "Visión normal",
        description: "La luz brillante permite a la mayoría de las criaturas ver con normalidad",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Los días sombríos siguen proporcionando una luz brillante, al igual que las antorchas, los faroles, las hogueras y otras fuentes de iluminación dentro de un radio determinado."
        ]
    },
    {
        title: "Luz tenue",
        icon: "semi-closed-eye",
        subtitle: "Ligeramente oscura",
        description: "La luz tenue, también llamada sombra",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Crea una zona <b>Ligeramente Oscura</b>.",
            "Una zona de luz tenue suele ser un límite entre una fuente de luz brillante, como una linterna, y la oscuridad circundante.",
            "La luz suave del crepúsculo y del amanecer también cuenta como luz tenue. Una luna llena especialmente brillante puede bañar la tierra con una luz tenue."
        ]
    },
    {
        title: "Oscuridad",
        icon: "worried-eyes",
        subtitle: "Muy oscura",
        description: "La oscuridad crea una zona muy oscura",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Crea una zona <b>Muy Oscura</b>.",
            "Los personajes se enfrentan a la oscuridad en el exterior durante la noche (incluso en la mayoría de las noches de luna), dentro de los confines de una mazmorra sin luz o de una bóveda subterránea, o en una zona de oscuridad mágica."
        ]
    }
]

data_environment_vision = [
    {
        title: "Visión Ciega",
        icon: "one-eyed",
        subtitle: "Percibe sin ver",
        description: "Percibir el entorno sin depender de la vista, dentro de un radio determinado",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Las criaturas sin ojos, como los cienos, y las criaturas con ecolocalización o sentidos agudizados, como los murciélagos y los verdaderos dragones, tienen este sentido."
        ]
    },
    {
        title: "Visión en la Oscuridad",
        icon: "semi-closed-eye",
        subtitle: "Visión limitada en la oscuridad",
        description: "Una criatura con Visión en la Oscuridad puede ver mejor en la oscuridad o en condiciones de poca luz, dentro de un radio determinado",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Dentro de un rango especificado, una criatura con visión en la oscuridad puede <b>ver en la oscuridad como si la oscuridad fuera una luz tenue</b>, por lo que las áreas de oscuridad sólo están ligeramente oscuras en lo que respecta a esa criatura.",
            "Sin embargo, la criatura no puede discernir el color en la oscuridad, sólo tonos de gris.",
            "Muchas criaturas en los mundos de D&D, especialmente las que habitan bajo tierra, tienen visión en la oscuridad."
        ]
    },
    {
        title: "Visión verdadera",
        icon: "eye-shield",
        subtitle: "Vee en la oscuridad",
        description: "Una criatura con visión verdadera puede ver todo en su verdadera forma, independientemente del entorno",
        reference: "Manual del Jugador, Capítulo 7: Aventuras",
        bullets: [
            "Una criatura con visión verdadera puede, dentro de un rango específico, ver en la oscuridad normal y mágica, ver criaturas y objetos Invisibles, detectar automáticamente las ilusiones visuales y tener éxito en las Tiradas de Salvación contra ellas, y percibir la forma original de un cambiaformas o de una criatura transformada por la magia.",
            "Además, la criatura puede ver en el Plano Etéreo."
        ]
    }
]

data_environment_cover = [
    {
        title: "Cobertura media",
        icon: "broken-shield",
        subtitle: "Muro bajo, muebles, criaturas",
        description: "Un objetivo tiene cobertura media si un obstáculo bloquea al menos la mitad de su cuerpo",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "El obstáculo puede ser un muro bajo, un mueble grande, un tronco de árbol estrecho o una criatura, ya sea un enemigo o un amigo.",
            "Un objetivo con cobertura media tiene un <b>bonificador 2 a la CA y a las Tiradas de Salvación de Destreza</b>.",
            "Si un objetivo está detrás de varias fuentes de cobertura, sólo se aplica el grado de cobertura más protector"
        ]
    },
    {
        title: "Cobertura tres cuartos",
        icon: "cracked-shield",
        subtitle: "Rastrillo, flechero",
        description: "Un objetivo tiene cobertura tres cuartos si aproximadamente tres cuartas partes están cubiertas por un obstáculo",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "El obstáculo puede ser un rastrillo, un flechero o un grueso tronco de árbol.",
            "Un objetivo con cobertura tres cuartos tiene un <b>bonificador 5 a la CA y a las Tiradas de Salvación de Destreza</b>.",
            "Si un objetivo está detrás de varias fuentes de cobertura, sólo se aplica el grado de cobertura más protector"
        ]
    },
    {
        title: "Cobertura total",
        icon: "shield",
        subtitle: "Completamente oculto",
        description: "Un objetivo tiene cobertura total si está completamente oculto por un obstáculo",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Un objetivo con cobertura total <b>no puede ser apuntado directamente</b> por un Ataque o un Conjuro, aunque algunos Conjuros pueden alcanzar dicho objetivo incluyéndolo en un área de efecto.",
            "Si un objetivo está detrás de varias fuentes de cobertura, sólo se aplica el grado de cobertura más protector"
        ]
    }
]
