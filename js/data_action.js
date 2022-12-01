data_action = [
    {
        title: "Ataque",
        icon: "crossed-swords",
        subtitle: "Ataque Cuerpo a Cuerpo o a Distancia",
        description: "Realiza un Ataque Cuerpo a Cuerpo o a Distancia con tu arma",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Ciertos atributos, como el <i>Ataque Adicional</i> del Guerrero, te permiten realizar más de un ataque con esta Acción. Cada uno de estos ataques es una tirada independiente y puede tener como objetivo diferentes criaturas. Puedes moverte entre estos ataques.",
            "Cuando atacas con un arma cuerpo a cuerpo ligera, puedes utilizar una Acción Adicional para atacar con tu otra mano (ver la Acción Adicional <i>Ataque con la otra Mano</i>).",
            "Puedes remplazar uno de tus ataques cuerpo a cuerpo por un <i>Agarre</i> o un <i>Empuje</i>.",
            "Algunos Estados dan Ventaja en el ataque: ataques contra objetivos Apresados, Aturdidos, Cegados, Inconscientes, Paralizados o Petrificados; ataques cuerpo a cuerpo contra objetivos Derribados; ataques de atacantes Invisibles u Ocultos.",
            "Algunos Estados dan Desventaja en el ataque: los ataques contra objetivos Invisibles u Ocultos; los ataques a distancia contra objetivos Derribados; los ataques de atacantes Apresados, Asustados, Cegados o Envenenados."
        ]
    },
    {
        title: "Agarre",
        icon: "grab",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Intenta agarrar a una criatura o forcejear con ella",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Puedes utilizar la Acción de <i>Ataque</i> para realizar un ataque especial cuerpo a cuerpo, un Agarre. Si puedes hacer varios ataques con la Acción de Ataque, este ataque sustituye a uno de ellos.",
            "El objetivo de tu agarre no debe ser más de un Tamaño mayor que el tuyo y debe estar a tu alcance.",
            "Utilizando al menos una mano libre, intentas agarrar al objetivo haciendo una Prueba de Agarre, una Prueba de Fuerza (Atletismo) enfrentada a una Prueba de Fuerza (Atletismo) o Destreza (Acrobacias) del objetivo (el objetivo elige la Característica a utilizar).",
            "Si tienes éxito, sometes al objetivo al Estado Agarrado (su velocidad se reduce a 0)."
        ]
    },
    {
        title: "Agitar",
        icon: "sword-spin",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Agitas tu arma para obtener un ataque adicional",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Realizas un ataque con arma adicional.",
            "Tienes Desventaja en todas tus tiradas de ataque hasta el inicio de tu siguiente turno."
        ]
    },
    {
        title: "Desarmar",
        icon: "sword-break",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Atacas directamente a un arma",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Si el ataque tiene éxito, no infliges daño y comparas tu Tirada de Ataque con la Prueba de Fuerza (Atletismo), Destreza (Juego de Manos) o Sabiduría (Perspicacia) del objetivo.",
            " Si el atacante gana el enfrentamiento, el defensor deja caer el objeto. La criatura que tiene un arma más pesada y / o sujeta con las dos manos, obtiene ventaja en su prueba, las Armas Desarmadoras pueden evitarlo."
        ]
    },
    {
        title: "Empuje",
        icon: "hand",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Empujar a una criatura, ya sea para Derribarla o alejarla de ti",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Usando la Acción <i>Ataque</i>, puedes hacer un ataque especial cuerpo a cuerpo para empujar a una criatura. Si puedes realizar varios ataques con la acción de Ataque, este ataque sustituye a uno de ellos.",
            "El objetivo de tu Empuje no debe ser más de un Tamaño mayor que el tuyo, y debe estar a tu alcance.",
            "Haces una Prueba de Fuerza (Atletismo) enfrentada a una Prueba de Fuerza (Atletismo) o Destreza (Acrobacias) del objetivo (el objetivo elige la Característica a utilizar).",
            "Si ganas el enfrentamiento, tiras al objetivo al suelo (Estado Derribado) o lo alejas 5 pies de ti."
        ]
    },
    {
        title: "Golpe de Escudo",
        icon: "slashed-shield",
        subtitle: "Ataque cuerpo a cuerpo especial",
        description: "Realizas un ataque cuerpo a cuerpo con tu escudo, usándolo como un arma de mano secundaria.",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Si usas tu escudo como arma, pierdes su bonificador de CA hasta tu próxima acción (generalmente hasta el siguiente asalto) y no añades tu modificador por característica al daño del ataque adicional, a menos que ese modificador sea negativo."
        ]
    },
    {
        title: "Apuntar",
        icon: "bowman",
        subtitle: "Ventaja a un ataque a distancia",
        description: "Concede ventaja en la próxima tirada de ataque a distancia que realizas",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Si estás blandiendo un arma a distancia y no estás involucrado en un combate cuerpo a cuerpo, podrás gastar tu Acción para apuntar a un objetivo con una Prueba de Sabiduría (Percepción) enfrentada a la Prueba de Destreza (Acrobacias) o de Carisma (Engaño) del objetivo. Si lo consigues, obtienes Ventaja en tu primera Tirada de Ataque a Distancia.",
            "Si realizas otro ataque antes de tu siguiente turno o si disparas a otro objetivo, perderás la Ventaja obtenida en esta Acción.",
        ]
    },
    {
        title: "Ayudar",
        icon: "telepathy",
        subtitle: "Concede Ventaja a un aliado",
        description: "Concede Ventaja a un aliado en una Prueba de Característica o Ataque",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "El objetivo gana Ventaja en la siguiente Prueba de Característica que realice para llevar a cabo la tarea en la que estás ayudando.",
            "Alternativamente, el objetivo gana Ventaja en la siguiente tirada de ataque contra una criatura a 5 pies de ti.",
            "La Ventaja dura hasta el comienzo de tu siguiente turno."
        ]
    },
    {
        title: "Buscar",
        icon: "magnifying-glass",
        subtitle: "Buscas algo",
        description: "Dedicas tu atención a encontrar algo",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Dependiendo de la naturaleza de tu búsqueda, el DM puede hacerte hacer una Prueba de Sabiduría (Percepción) o una Prueba de Inteligencia (Investigación)."
        ]
    },
    {
        title: "Correr",
        icon: "sprint",
        subtitle: "Dobla la velocidad de movimiento",
        description: "Gana movimiento adicional para el turno actual",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "El aumento es igual a tu Velocidad, después de aplicar cualquier modificador."
        ]
    },
    {
        title: "Destrabarse",
        icon: "journey",
        subtitle: "Evita Ataques de Oportunidad",
        description: "Tu movimiento no provoca Ataques de Oportunidad durante el resto del turno",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapar de un Agarre",
        description: "Escapar de un Agarre",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Para escapar de un Agarre, debes tener éxito en una Prueba de Fuerza (Atletismo) o Destreza (Acrobacias) enfrentada a una Prueba de Fuerza (Atletismo) del agarrador.",
            "Escapar de otras condiciones que te Apresan (como los grilletes) puede requerir una Prueba de Destreza o Fuerza, según especifique la condición."
        ]
    },
    {
        title: "Esconderse",
        icon: "hood",
        subtitle: "Intentas esconderte",
        description: "Intentas esconderte",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "No puedes esconderte de una criatura que pueda verte. Debes tener una Cobertura Total, estar en una zona Muy Oscura, ser Invisible o bloquear de otro modo la visión del enemigo.",
            "Si haces ruido (como gritar una advertencia o derribar un jarrón), delatas tu posición.",
            "Cuando intentes esconderte, haz una Prueba de Destreza (Sigilo) y anota el resultado. Hasta que te descubran o dejes de esconderte, el total de esa Prueba se enfrenta a la Prueba de Sabiduría (Percepción) de cualquier criatura que busque activamente señales de tu presencia.",
            "Una criatura se da cuenta de ti aunque no esté buscando, a menos que tu Prueba de Sigilo sea mayor que su Percepción Pasiva.",
            "Fuera del combate, también puedes utilizar una Prueba de Destreza (Sigilo) para realizar actos como ocultarte de los enemigos, escabullirte de los guardias, escabullirte sin que te noten o acercarte sigilosamente a alguien sin que te vean ni te oigan."
        ]
    },
    {
        title: "Esquivar",
        icon: "dodging",
        subtitle: "Aumenta las defensas",
        description: "Te centras por completo en evitar los ataques",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Hasta el comienzo de tu siguiente turno, cualquier Tirada de Ataque realizada contra ti tiene Desventaja si puedes ver al atacante, y haces Tiradas de Salvación de Destreza con Ventaja.",
            "Pierdes este beneficio si estás <i>Incapacitado</i> o si tu velocidad se reduce a 0."
        ]
    },
    {
        title: "Estabilizar una Criatura",
        icon: "first-aid",
        subtitle: "Primeros auxilios a una criatura",
        description: "Evita que una criatura moribunda tenga que hacer Tiradas de Salvación contra Muerte",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Haz una Prueba de Sabiduría (Medicina) con CD 10",
            "Con un éxito, la criatura se estabiliza y ya no necesita hacer Tiradas de Salvación contra Muerte",
            "Una criatura estable recupera 1 Punto de Golpe después de 1d4 horas"
        ]
    },
    {
        title: "Finta",
        icon: "flying-dagger",
        subtitle: "Ventaja a un ataque cuerpo a cuerpo",
        description: "Te dedicas a engañar al objetivo para que no vea venir el próximo ataque, concediéndote ventaja",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Haz una prueba de Carisma (Engaño) enfrentada a una prueba de Destreza (Acrobacias) o Sabiduría (Perspicacia) de tu objetivo. Si tu resultado de la prueba excede el resultado de la prueba de tu objetivo, en tu próximo turno, obtienes Ventaja en tu primera tirada de ataque cuerpo a cuerpo contra él.",
            "Si intentas fintar a un no-humanoide, tienes Desventaja en tu Prueba enfrentada"
        ]
    },
    {
        title: "Lanzar un Conjuro",
        icon: "magic-swirl",
        subtitle: "Tiempo de lanzamiento 1 Acción",
        description: "Lanza un Conjuro con un tiempo de lanzamiento de 1 Acción",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "No puedes lanzar un Conjuro con tu Acción y otro diferente con tu Acción Adicional en el mismo turno, excepto si la Acción se utiliza para lanzar un Truco.",
            "El objetivo de un Conjuro debe estar dentro del alcance del mismo. Para apuntar a algo, debes tener un camino despejado hacia él, por lo que no puede estar detrás de una Cobertura Total.",
            "Los Conjuros con componentes materiales no consumen el material a menos que se indique explícitamente. A menos que se indique el coste de un material, puedes asumir que el coste es insignificante y que el material está simplemente disponible en una Bolsa de Componentes.",
            "Algunos Conjuros requieren que mantengas la Concentración para mantener su magia activa. Si pierdes la Concentración, dicho Conjuro termina. Pierdes la Concentración en un Conjuro si lanzas otro que requiera Concentración o cuando estás Incapacitado. Cada vez que recibas daño, debes hacer una Tirada de Salvación de Constitución para mantener tu concentración. La CD es igual a 10 o la mitad del daño que recibes, lo que sea mayor."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Elige el desencadenante y la Acción",
        description: "Eliges un desencadenante y una Reacción de respuesta",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Primero, decides qué circunstancia perceptible desencadenará tu Reacción",
            "Luego, eliges la Acción que realizarás en respuesta a ese desencadenante, o eliges avanzar a tu Velocidad en respuesta a él.",
            "Cuando se produce el desencadenante, puedes tomar tu Reacción justo después de que termine el desencadenante o ignorar el desencadenante.",
            "Cuando preparas un Conjuro, lo lanzas de forma normal pero mantienes su energía, que liberas con tu Reacción cuando se produce el desencadenante. Para ser preparado, un Conjuro debe tener un tiempo de lanzamiento de 1 acción, y mantener la magia del Conjuro requiere Concentración"
        ]
    },
    {
        title: "Sobrepasar",
        icon: "guarded-tower",
        subtitle: "Pasar a través de criatura hostil",
        description: "Intenta moverte a través del espacio de una criatura hostil forzando tu paso",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Haz una prueba de Fuerza (Atletismo) enfrentada por la Fuerza (Atletismo) de la criatura hostil.",
            "La criatura con el Tamaño más grande tiene Ventaja para la prueba de Sobrepasar.",
            "Si el que se mueve gana el enfrentamiento, puede moverse a través del espacio de la criatura hostil una vez este turno."
        ]
    },
    {
        title: "Usar Atributo de Clase",
        icon: "embrassed-energy",
        subtitle: "Algunos atributos usan acciones",
        description: "Usar un atributo racial o de clase que utiliza una acción",
        reference: "Consulte la página de la clase para obtener más información.",
        bullets: [

        ]
    },
    {
        title: "Usar Escudo",
        icon: "round-shield",
        subtitle: "Equipa o desequipa un escudo",
        description: "Equipa o desequipa un escudo",
        reference: "Manual del Jugador, Capítulo 5: Equipo",
        bullets: [
            "Un escudo siempre requiere una Acción para equiparse o desequiparse.",
            "La armadura tarda varios minutos en equiparse o desequiparse."
        ]
    },
    {
        title: "Usar Objeto",
        icon: "snatch",
        subtitle: "Interactua, usa habilidades especiales",
        description: "Interactuar con un segundo objeto o utilizar las habilidades especiales del objeto",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Puedes interactuar con un objeto de forma gratuita durante tu turno (como sacar un arma o abrir una puerta). Si quieres interactuar con un segundo objeto, utiliza esta Acción.",
            "Cuando un objeto requiere tu Acción para su uso, también realizas esta Acción."
        ]
    },
    {
        title: "Voltereta",
        icon: "spinning-sword",
        subtitle: "Pasar a través de criatura hostil",
        description: "Intenta moverte a través del espacio de una criatura hostil eludiendo al oponente girando sobre él",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Haz una prueba de Destreza (Acrobacias) enfrentada a una prueba de Destreza (Acrobacias) de la criatura hostil",
            "La criatura con el tamaño más grande tiene Desventaja para la Prueba de Voltereta (tanto si es la criatura en movimiento como la que se resiste).",
            "Si el que se mueve gana el enfrentamiento, puede moverse a través del espacio de la criatura hostil una vez este turno."
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Cualquier acción que no esté en esta lista",
        description: "Realiza cualquier acción que puedas imaginar",
        reference: "Manual del Jugador, Capítulo 8: Combate",
        bullets: [
            "Cuando describas una Acción no detallada en otra parte de las reglas, el DM te dirá si esa Acción es posible y qué tipo de tirada tienes que hacer, si es que hay alguna, para determinar el éxito o el fracaso."
        ]
    }
]
