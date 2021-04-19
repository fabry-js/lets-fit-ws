// classico restaurants, mo dobbiamo rinominare la collection? oppure la teniamo? facciamo in
// base alla category.

import { IngredientModel } from "../models/IngredientModel";

/**
 * Dobbiamo definire i modelli
 * Abbiamo quindi: RestaurantModel
 */

export interface RestaurantModel {
  name: string;
  address: string;
  forwardID: number;
  hourtime: string;
  imageName: string;
  plates: IngredientModel[];
  [key: string]: any;
}

/**
 * IngredientModel è il seguente:
 * export interface IngredientModel {
    macronut: MacronutModel;
    name: string;
    phase: string;
    price: number;
    vegan: boolean;
    vegetarian: boolean;
  };
  * Poi abbiamo il MacronutModel:

  interface MacronutModel {
    calorie: number;
    carboidrati: number;
    grassi: number;
    proteine: number;
  }
*/

/**
 * Procediamo ora a creare l'object per il ristorante:
 */

const laPuttega: RestaurantModel = {
  name: "La Puttega",
  address: "Via Tre Monti 6 98057 Milazzo",
  forwardID: 1,
  hourtime: "19:00 - 23:59",
  imageName: "puttega.jpg",
  plates: [
    // per Carboidrati
    {
      name: "Ceci",
      phase: "carboidrati",
      price: 2.5,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 364,
        carboidrati: 60.65,
        grassi: 6.04,
        proteine: 19.3,
      },
    },
    {
      name: "Cous Cous",
      phase: "carboidrati",
      price: 5.5,
      vegan: false,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 376,
        carboidrati: 77.43,
        grassi: 0.64,
        proteine: 12.7,
      },
    },
    {
      name: "Orzo perlato",
      phase: "carboidrati",
      price: 5,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 319,
        carboidrati: 264.8,
        grassi: 12.6,
        proteine: 41.6,
      },
    },
    {
      name: "Patate Al Forno",
      phase: "carboidrati",
      price: 3,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 93,
        carboidrati: 21.15,
        grassi: 0.13,
        proteine: 2.5,
      },
    },
    {
      name: "Pasta di semola",
      phase: "carboidrati",
      price: 4.5,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 296.8,
        carboidrati: 60.65,
        grassi: 12.6,
        proteine: 43.6,
      },
    },
    {
      name: "Pasta di Semola Integrale",
      phase: "carboidrati",
      price: 4.8,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 323.5,
        carboidrati: 66.2,
        grassi: 2.4,
        proteine: 13.4,
      },
    },
    {
      name: "Riso Basmati",
      phase: "carboidrati",
      price: 7,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 314,
        carboidrati: 25.52,
        grassi: 0,
        proteine: 3.54,
      },
    },
    {
      name: "Riso Venere",
      phase: "carboidrati",
      price: 7.7,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 377,
        carboidrati: 62.28,
        grassi: 2,
        proteine: 7.7,
      },
    },
    {
      name: "Riso integrale",
      phase: "carboidrati",
      price: 6,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 337,
        carboidrati: 289.9,
        grassi: 17.1,
        proteine: 30,
      },
    },
    // per Proteine
    {
      name: "Albume d'uovo",
      phase: "proteine",
      price: 2,
      vegan: false,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 43,
        carboidrati: 0.2,
        grassi: 0,
        proteine: 42.8,
      },
    },
    {
      name: "Filetto di vitello*",
      phase: "proteine",
      price: 7,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 43,
        carboidrati: 0.2,
        grassi: 0,
        proteine: 42.8,
      },
    },
    {
      name: "Gamberi di paranza",
      phase: "proteine",
      price: 10,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 71,
        carboidrati: 11.2,
        grassi: 5.4,
        proteine: 54.4,
      },
    },
    {
      name: "Lenticchie",
      phase: "proteine",
      price: 3.3,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 291,
        carboidrati: 191.2,
        grassi: 9,
        proteine: 90.8,
      },
    },
    {
      name: "Lonza di maiale*",
      phase: "proteine",
      price: 11,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 136,
        carboidrati: 0,
        grassi: 5.41,
        proteine: 20.54,
      },
    },
    {
      name: "Merluzzo*",
      phase: "proteine",
      price: 13,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 91,
        carboidrati: 0,
        grassi: 0.3,
        proteine: 17,
      },
    },
    {
      name: "Pesce spada*",
      phase: "proteine",
      price: 13.28,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 144,
        carboidrati: 0,
        grassi: 6.65,
        proteine: 19.66,
      },
    },
    {
      name: "Petto di Pollo*",
      phase: "proteine",
      price: 9,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 100,
        carboidrati: 0,
        grassi: 7.2,
        proteine: 93.2,
      },
    },
    {
      name: "Salmone*",
      phase: "proteine",
      price: 18,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 185,
        carboidrati: 3.4,
        grassi: 108,
        proteine: 73.6,
      },
    },
    {
      name: "Petto di Tacchino*",
      phase: "proteine",
      price: 7.33,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 107,
        carboidrati: 0,
        grassi: 1.2,
        proteine: 24,
      },
    },
    {
      name: "Tonno fresco*",
      phase: "proteine",
      price: 10,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 159,
        carboidrati: 0.1,
        grassi: 8.1,
        proteine: 21.5,
      },
    },
    {
      name: "Uova Sode o alla Coque",
      phase: "proteine",
      price: 4,
      vegan: false,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 128,
        carboidrati: 0.1,
        grassi: 78.3,
        proteine: 49.6,
      },
    },
    // per Grassi
    {
      name: "Avocado",
      phase: "grassi",
      price: 15,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 670,
        carboidrati: 9,
        grassi: 14.66,
        proteine: 2,
      },
    },

    {
      name: "Mandorle",
      phase: "grassi",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 575,
        carboidrati: 15.3,
        grassi: 71.9,
        proteine: 12.8,
      },
    },

    {
      name: "Nocciole",
      phase: "grassi",
      price: 2.4,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 628,
        carboidrati: 6.1,
        grassi: 64,
        proteine: 13.8,
      },
    },

    {
      name: "Noci",
      phase: "grassi",
      price: 2.7,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 654,
        carboidrati: 5.1,
        grassi: 68.1,
        proteine: 15.23,
      },
    },

    {
      name: "Pistacchi",
      phase: "grassi",
      price: 2.5,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 562,
        carboidrati: 27.51,
        grassi: 45.39,
        proteine: 20.27,
      },
    },

    {
      name: "Olio Evo",
      phase: "grassi",
      price: 8,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 884,
        carboidrati: 0,
        grassi: 100,
        proteine: 0,
      },
    },
    // per Menu
    {
      name: "Parmigiana di melanzane grigliate light",
      phase: "menu",
      plateDescription:
        "melanzane- provola- pomodorini Pachino- passata di pomodoro- basilico- formaggio grana grattugiato- olio Evo- sale- pepe",
      price: 7.5,
      vegan: false,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 78,
        carboidrati: 4.5,
        grassi: 4.5,
        proteine: 5.2,
      },
    },
    {
      name: "Pasta alla norma con melanzane grigliate",
      phase: "menu",
      plateDescription:
        "Pennette Rigate Integrali- melanzane- formaggio primo sale grattugiato- pomodorini Pachino- basilico- aglio- olio Evo- sale",
      price: 6.7,
      vegan: false,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 493,
        carboidrati: 68,
        grassi: 15.1,
        proteine: 21.2,
      },
    },
  ],
};

const mas: RestaurantModel = {
  name: "MAS Panineria",
  menuName: "I tradizionali",
  address: "Via Marina Garibaldi, 149, 98057 Milazzo",
  forwardID: 2,
  hourtime: "08:30-15:30 / 17:30-20:30",
  imageName: "masmilazzo.jpg",
  plates: [
    // per Carboidrati
    {
      name: "Pane integrale",
      phase: "carboidrati",
      price: 0.5,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 224,
        carboidrati: 182.3,
        grassi: 11.7,
        proteine: 30,
      },
    },
    {
      name: "Pane ai 5 cereali",
      phase: "carboidrati",
      price: 0.6,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 279,
        carboidrati: 45.5,
        grassi: 4.9,
        proteine: 10.8,
      },
    },
    {
      name: "Pane di segale",
      phase: "carboidrati",
      price: 0.62,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 259,
        carboidrati: 48.3,
        grassi: 3.3,
        proteine: 8.5,
      },
    },
    {
      name: "Ciambella di pane ai semi di papavero",
      phase: "carboidrati",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 276,
        carboidrati: 52.47,
        grassi: 2.58,
        proteine: 10.69,
      },
    },
    // per Proteine
    {
      name: "Bresaola",
      phase: "proteine",
      price: 29.8,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 151,
        carboidrati: 1.1,
        grassi: 11.8,
        proteine: 87.1,
      },
    },

    {
      name: "Carpaccio di manzo",
      phase: "proteine",
      price: 55.13,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 119,
        carboidrati: 0,
        grassi: 2.62,
        proteine: 22.31,
      },
    },

    {
      name: "Fesa di tacchino",
      phase: "proteine",
      price: 39.8,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 111,
        carboidrati: 0,
        grassi: 0.65,
        proteine: 24.6,
      },
    },

    {
      name: "Fiocchi di Latte",
      phase: "proteine",
      price: 15.1,
      vegan: false,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 98,
        carboidrati: 3.4,
        grassi: 4.3,
        proteine: 11,
      },
    },

    {
      name: "Petto di pollo Arrosto",
      phase: "proteine",
      price: 2.25,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 165,
        carboidrati: 0,
        grassi: 19.6,
        proteine: 80.4,
      },
    },

    {
      name: "Quark",
      phase: "proteine",
      price: 4.8,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 90,
        carboidrati: 4.5,
        grassi: 0.1,
        proteine: 13,
      },
    },

    {
      name: "Tonno",
      phase: "proteine",
      price: 26.8,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 159,
        carboidrati: 0,
        grassi: 10.2,
        proteine: 25.2,
      },
    },

    {
      name: "Salmone affumicato",
      phase: "proteine",
      price: 23,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 147,
        carboidrati: 1,
        grassi: 12,
        proteine: 18.4,
      },
    },

    {
      name: "Tonno affumicato",
      phase: "proteine",
      price: 14.5,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 117,
        carboidrati: 0,
        grassi: 1,
        proteine: 29,
      },
    },

    {
      name: "Tacchino Arrosto",
      phase: "proteine",
      price: 2.23,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 96,
        carboidrati: 3.55,
        grassi: 0.33,
        proteine: 19.9,
      },
    },

    {
      name: "Prosciutto cotto",
      phase: "proteine",
      price: 15.9,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 215,
        carboidrati: 0.9,
        grassi: 14.7,
        proteine: 19.8,
      },
    },

    {
      name: "Prosciutto crudo magro",
      phase: "proteine",
      price: 22.3,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 147,
        carboidrati: 0.05,
        grassi: 5.71,
        proteine: 22.32,
      },
    },
    // per Grassi
    {
      name: "Olio EVO",
      phase: "grassi",
      price: 2,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 884,
        carboidrati: 0,
        grassi: 100,
        proteine: 0,
      },
    },
    {
      name: "Avocado",
      phase: "grassi",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 322,
        carboidrati: 17.15,
        grassi: 29.47,
        proteine: 4.02,
      },
    },
    {
      name: "Mandorle",
      phase: "grassi",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 578,
        carboidrati: 19.74,
        grassi: 50.64,
        proteine: 21.26,
      },
    },
    {
      name: "Pistacchi",
      phase: "grassi",
      price: 3,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 557,
        carboidrati: 27.97,
        grassi: 44.44,
        proteine: 20.61,
      },
    },
    {
      name: "Noci",
      phase: "grassi",
      price: 4,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 654,
        carboidrati: 13.71,
        grassi: 65.21,
        proteine: 15.23,
      },
    },
    {
      name: "Nocciole",
      phase: "grassi",
      price: 3,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 628,
        carboidrati: 16.7,
        grassi: 60.75,
        proteine: 15,
      },
    },
    {
      name: "Olive nere denocciolate",
      phase: "grassi",
      price: 2,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 147,
        carboidrati: 0.05,
        grassi: 5.71,
        proteine: 22.32,
      },
    },
    {
      name: "Olive verdi denocciolate",
      phase: "grassi",
      price: 2,
      vegan: true,
      vegetarian: true,
      imageURI: "",
      macronut: {
        calorie: 105,
        carboidrati: 6.04,
        grassi: 9.54,
        proteine: 0.88,
      },
    },
    // per Menu
    {
      name: "Cous cous ai frutti di mare",
      phase: "menu",
      plateDescription:
        "cous cous- vongole-gamberi-cozze-calamari- vino bianco secco- peperoncino fresco- pomodorini Pachino-aglio- olio Evo-sale fino-menta",
      price: 7.5,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 442,
        carboidrati: 28.9,
        grassi: 18.6,
        proteine: 38.1,
      },
    },
    {
      name: "Caponata leggera",
      phase: "menu",
      plateDescription:
        "basilico- sedano- sale- pomodorini Pachino- pinoli- pepe- olive nere- olio Evo- melanzane- capperi",
      price: 8,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 52,
        carboidrati: 4.6,
        grassi: 3.9,
        proteine: 1.2,
      },
    },
    {
      name: "Pesce spada alla siciliana",
      phase: "menu",
      plateDescription:
        "Pesce spada- pomodorini Pachino- olive verdi denocciolate- olio Evo- aglio- pinoli- origano- sale- peperoncino fresco",
      price: 10,
      vegan: false,
      vegetarian: false,
      imageURI: "",
      macronut: {
        calorie: 381,
        carboidrati: 6.4,
        grassi: 27.4,
        proteine: 27.2,
      },
    },
  ],
};

export const restaurants = [laPuttega, mas];

export const restaurantsWrapper = { restaurants };
