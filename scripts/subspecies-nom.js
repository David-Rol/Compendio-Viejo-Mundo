Hooks.on("setup", () => {
    let config = {
        subspecies : {
            human  :{},
			halfling:{}
        }
        
    }

    config.subspecies["human"]["tileano"] = {
        name : "Tileano",
        skills : [
            "Carisma",
            "Frialdad",
            "Tasar",
            "Cotilleo",
			"Regatear",
            "Hablar idioma (Arabe)",
            "Hablar idioma (Reikspiel)",
            "Hablar idioma (Estaliano)",
            "Sabiduría académica (Tilea)",
            "Cuerpo a cuerpo (Básica)",
            "A distancia (Ballesta)",
            "Navegar"
        ],
        talents : [
            "Discutidor, Pescador",
            "Sangre fría, Cortés",
            3
        ]
    },
	config.subspecies["halfling"]["ashfield"] = {
        name : "Ashfield",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Frialdad",
			"Intuición",
			"Hablar idioma (Asambleario)",
			"A distancia ()"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Sentidos desarrollados (Vista), Etiqueta (Soldados)", 
            1
        ]
    },
	config.subspecies["halfling"]["brambledown"] = {
        name : "Brambledown",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Orientación",
			"Supervivencia",
			"Hablar idioma (Asambleario)",
			"Nadar"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Gregario, Viajero curtido", 
            1
        ]
    },
	config.subspecies["halfling"]["brandysnap"] = {
        name : "Brandysnap",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Criar Animales",
			"Jugar",
			"Hablar idioma (Asambleario)",
			"Sabiduría académica (Hierbas)"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Artesano (Granjero), Fornido", 
            1
        ]
    },
	config.subspecies["halfling"]["hayfoot"] = {
        name : "Hayfoot",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Regatear",
			"Jugar",
			"Hablar idioma (Asambleario)",
			"Tasar"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Negociador, Etiqueta (Gremial)", 
            1
        ]
    },
	config.subspecies["halfling"]["hollyfoot"] = {
        name : "Hollyfoot",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Regatear",
			"Tasar",
			"Hablar idioma (Asambleario)",
			"Oficio ()"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Artesano (), Dedos ágiles", 
            1
        ]
    },
	config.subspecies["halfling"]["hayfoothollyfoot"] = {
        name : "Hayfoot-Hollyfoot",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Sobornar",
			"Regatear",
			"Hablar idioma (Asambleario)",
			"Cotilleo"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Discutidor, Numismático", 
            1
        ]
    },
	config.subspecies["halfling"]["lostpockets"] = {
        name : "Lostpockets",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Aguante",
			"Jugar",
			"Intuición",
			"Cotilleo"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Recio, Ayunador", 
            1
        ]
    },
	config.subspecies["halfling"]["lowhaven"] = {
        name : "Lowhaven",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Sobornar",
			"Regatear",
			"Hablar idioma (Asambleario)",
			"Intimidar"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Delincuente, Etiqueta (Criminales o Gremial)", 
            1
        ]
    },
	config.subspecies["halfling"]["rumster"] = {
        name : "Rumster",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Aguante",
			"Cotilleo",
			"Hablar idioma (Asambleario)",
			"Regatear"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Oficio (Cocinero), Negociador", 
            1
        ]
    },
	config.subspecies["halfling"]["skelfsider"] = {
        name : "Skelfsider",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Aguante",
			"Cotilleo",
			"Hablar idioma (Asambleario)",
			"Jugar"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Sin importancia, Etiqueta (Sirvientes)", 
            1
        ]
    },
	config.subspecies["halfling"]["thorncobble"] = {
        name : "Thorncobble",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Mando",
			"Cotilleo",
			"Hablar idioma (Asambleario)",
			"Sabiduría académica (Heráldica)"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Etiqueta (Nobles o Eruditos), Leer y escribir", 
            1
        ]
    },
	config.subspecies["halfling"]["tumbleberry"] = {
        name : "Tumbleberry",
        skills : [
            "Carisma",
            "Consumir Alcohol",
            "Sabiduría académica (Reikland)",
            "Percepción",
			"Prestidigitación",
            "Movimiento silencioso ()",
            "Oficio (Cocinero)",
			"Regatear",
			"Cotilleo",
			"Hablar idioma (Asambleario)",
			"Sabiduría académica ()"
        ],
        talents : [
            "Sentidos desarrollados (Gusto)", 
			"Visión nocturna",
            "Resistencia (Caos)", 
			"Pequeño",
            "Etiqueta (Burgueses o Gremial), Leer y escribir", 
            1
        ]
    }
	

mergeObject(game.wfrp4e.config, config)
})