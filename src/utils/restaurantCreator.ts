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
 * Procediamo ora a creare l'object per il ristorante:
 */

const laPuttega: RestaurantModel = {
  name: "La Puttega",
  address: "Via Tre Monti 6 98057 Milazzo",
  forwardID: 1,
  hourtime: "19:00 - 23:59",
  imageName: "",
  imageURI:
    "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/restaurants-images%2Fputtega.jpg?alt=media&token=f8b09233-2be9-4ca7-b0f0-d8862aaaa838",
  plates: [
    // per Carboidrati
    {
      name: "Ceci",
      phase: "carboidrati",
      price: 2.5,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/ceci.jpg?alt=media&token=0c697199-5d25-4bbb-8595-b7223fe5baba",
      frequencyAlert:
        "è una buona abitudine consumare i legumi 2-3 volte alla settimana. Il consiglio è di abbinarli a una fonte di cereali e alle verdure per un piatto unico completo!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/cous_cous.jpg?alt=media&token=56c21d7a-3a6b-4ba1-9b68-a199b30040c7",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/orzo_perlato.jpg?alt=media&token=ab9bd2f5-38a8-4581-9d18-ea826e3261ae",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/patate.jpg?alt=media&token=117dfaef-3499-473e-b855-13a99709fafa",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pasta_di_semola.jpg?alt=media&token=0857e223-fc2d-48f8-83ca-7c7f768b238a",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pasta_integrale.jpg?alt=media&token=45243134-d8d3-4dcd-bda5-635ce79c8412",
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
      glutenFree: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/riso-basmati.jpg?alt=media&token=0737fb39-4dc0-4f43-bc65-42db8669cb00",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/riso%20venere.jpg?alt=media&token=d8cbc4ee-b3a8-40fb-a2f9-517fd71d2a7e",
      glutenFree: true,
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/riso%20integrale.jpg?alt=media&token=140206cf-081a-4623-8f05-e5356107a08d",
      glutenFree: true,
      macronut: {
        calorie: 337,
        carboidrati: 289.9,
        grassi: 17.1,
        proteine: 30,
      },
    },
    {
      name: "Broccoli",
      phase: "contorni",
      price: 0.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/broccoli.jpg?alt=media&token=0c8a2e64-43ba-4aa8-9c38-b47b1fbf6718",
      glutenFree: true,
      macronut: {
        calorie: 20,
        carboidrati: 2,
        grassi: 0.3,
        proteine: 2.9,
      },
    },
    {
      name: "Carciofi",
      phase: "contorni",
      price: 0.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/carciofi.jpg?alt=media&token=2e630acc-5f81-43a9-b99e-e67ebb3e9e7c",
      glutenFree: true,
      macronut: {
        calorie: 22,
        carboidrati: 9.4,
        grassi: 1.8,
        proteine: 10.8,
      },
    },
    {
      name: "Cavolfiore",
      phase: "contorni",
      price: 0.8,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/cavolfiore.jpg?alt=media&token=47cbac46-ece5-494c-87b1-185b2e394da2",
      glutenFree: true,
      macronut: {
        calorie: 25,
        carboidrati: 10.4,
        grassi: 1.8,
        proteine: 12.8,
      },
    },
    {
      name: "Cetrioli",
      phase: "contorni",
      price: 0.9,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/cetrioli.jpg?alt=media&token=a109b345-b281-487a-8c74-1fb721f364b5",
      glutenFree: true,
      macronut: {
        calorie: 14,
        carboidrati: 6.7,
        grassi: 4.5,
        proteine: 2.8,
      },
    },
    {
      name: "Zucchina",
      phase: "contorni",
      price: 0.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/zucchine.jpg?alt=media&token=1bfd951e-aade-4897-a4a3-3c9f6ff4139a",
      glutenFree: true,
      macronut: {
        calorie: 11,
        carboidrati: 4.9,
        grassi: 0.9,
        proteine: 5.2,
      },
    },
    {
      name: "Finocchio",
      phase: "contorni",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/finocchio.jpg?alt=media&token=e9116dbc-2238-4705-9911-68ba5503e551",
      glutenFree: true,
      macronut: {
        calorie: 9,
        carboidrati: 4.2,
        grassi: 0,
        proteine: 4.8,
      },
    },
    {
      name: "Lattuga Iceberg",
      phase: "contorni",
      price: 0.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lattuga-iceberg.jpg?alt=media&token=2be9f4fc-6100-47c9-82c6-c658a6107e22",
      glutenFree: true,
      macronut: {
        calorie: 14,
        carboidrati: 2.97,
        grassi: 0.14,
        proteine: 0.9,
      },
    },
    // per Proteine
    {
      name: "Albume d'uovo",
      phase: "proteine",
      price: 2,
      vegan: false,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/albume.jpg?alt=media&token=5f9ed9a3-7513-43ab-a05b-917c824ac0ed",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/filetto.jpg?alt=media&token=d99346aa-312c-4840-b9cb-f825808ab6d8",
      frequencyAlert:
        "Attenzione! Ricorda che il CONSUMO SETTIMANALE RACCOMANDATO per le carni rosse (bovina, equina, suina e ovina) è di massimo 1 volta a settimana. In un programma alimentare equilibrato e volto alla salute, un elemento chiave è la varietà di alimenti consumati!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/gamberoni-arrosto.jpg?alt=media&token=6b0a5c8b-6541-46f6-a7fd-a254c157052f",
      frequencyAlert:
        "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lenticchie.jpg?alt=media&token=f1edebca-c11b-49e5-9934-c925f78a0db0",
      frequencyAlert:
        "è una buona abitudine consumare i legumi 2-3 volte alla settimana. Il consiglio è di abbinarli a una fonte di cereali e alle verdure per un piatto unico completo!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lonza_di_maiale.jpg?alt=media&token=b96b6706-e949-41d3-b5ca-34eeda15fcc7",
      frequencyAlert:
        "Attenzione! Ricorda che il CONSUMO SETTIMANALE RACCOMANDATO per le carni rosse (bovina, equina, suina e ovina) è di massimo 1 volta a settimana. In un programma alimentare equilibrato e volto alla salute, un elemento chiave è la varietà di alimenti consumati!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/merluzzo.jpg?alt=media&token=876d5c00-e38b-4f71-8a18-002decf2131b",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pesce_spada.jpg?alt=media&token=d9f1042a-6d46-497d-b789-415e66aacfc8",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/petto_di_pollo.jpg?alt=media&token=1bbdbb21-f87a-49a1-9c8f-3ee762651bb1",
      frequencyAlert:
        "Occhio alla salute! Ricorda che per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO per le carni bianche (pollo, tacchino, coniglio) è di 2-3 volte a settimana.",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/salmone.jpg?alt=media&token=238dea98-02a0-4571-b436-6e3820561b2b",
      frequencyAlert:
        "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/tacchino.jpg?alt=media&token=39c7224c-8d8b-41ee-a214-c16286c3f36e",
      frequencyAlert:
        "Occhio alla salute! Ricorda che per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO per le carni bianche (pollo, tacchino, coniglio) è di 2-3 volte a settimana.",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/tonno.jpg?alt=media&token=42931044-849e-48a5-b642-588f58d43177",
      frequencyAlert:
        "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/uova.jpg?alt=media&token=ba532b5f-39b5-4652-98fc-aa765e9e3173",
      frequencyAlert:
        "è consigliato di consumare da 1 a un massimo di 4 porzioni alla settimana.",
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
      price: 7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/avocado.jpg?alt=media&token=998f5a49-6d79-49f1-a9f1-54907964ee46",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mandorle.jpg?alt=media&token=091af73a-2411-4c5b-b7d5-a063cc806f6c",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/nocciole.jpg?alt=media&token=7e14f802-3058-4f6b-8bd7-62e1145bc8a4",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/noci.jpg?alt=media&token=53ef588c-f6c5-4b51-a214-752b4414fae5",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pistacchi-sfusi.jpg?alt=media&token=9a98905b-d8b7-4e2d-90c9-798ad70e8a04",
      macronut: {
        calorie: 562,
        carboidrati: 27.51,
        grassi: 45.39,
        proteine: 20.27,
      },
    },

    {
      name: "Acqua Naturale Fontalba 0.5L",
      phase: "bibite",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/fontalba.png?alt=media&token=2c06ae43-2ed2-47b9-ab54-a584f51662df",
      macronut: {
        calorie: 0,
        carboidrati: 0,
        grassi: 0,
        proteine: 0,
      },
    },
    {
      name: "Coca Cola Zero 0.5L",
      phase: "bibite",
      price: 2,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/coca-zero.jpg?alt=media&token=a1650588-c2bd-4e93-9b44-46c7f2ff104f",
      macronut: {
        calorie: 0,
        carboidrati: 0,
        grassi: 0,
        proteine: 0,
      },
    },
    {
      name: "Fuze Tea Limone 0.5L",
      phase: "bibite",
      price: 1.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/fuze-limone.jpg?alt=media&token=f65a9ef5-81bd-41da-a358-fe5afc4accc1",
      macronut: {
        calorie: 0,
        carboidrati: 10,
        grassi: 0,
        proteine: 0,
      },
    },
    {
      name: "Olio Evo",
      phase: "grassi",
      price: 8,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/olio.jpg?alt=media&token=35ac5011-22e5-4c7f-8918-a225602b33e3",
      macronut: {
        calorie: 884,
        carboidrati: 0,
        grassi: 100,
        proteine: 0,
      },
    },
    // per Menu
    {
      name: "Insalata di quinoa con ceci e zucchine",
      phase: "menu",
      price: 9.5,
      vegan: true,
      vegetarian: true,
      glutenFree: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/insalata-quinoa.jpg?alt=media&token=48a5f163-1755-4fce-b2db-7ac367286d5b",
      macronut: {
        calorie: 655,
        carboidrati: 77,
        grassi: 28,
        proteine: 24,
      },
      plateDescription: `80 g di quinoa - 50 g di ceci secchi (circa 150 g di ceci lessati) - 150 g di zucchine`,
    },
    {
      name: "Spiedini di pollo e zucchine grigliate con pane tostato",
      phase: "menu",
      price: 11,
      vegan: false,
      vegetarian: false,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/spiedini-di-pollo.jpg?alt=media&token=41b7aa31-13ac-47ea-957d-3561f58abd48",
      macronut: {
        calorie: 500,
        carboidrati: 42,
        grassi: 22,
        proteine: 32,
      },
      plateDescription: `80 g di pane integrale - 100 g di pollo - 200 g di zucchine`,
    },
    {
      name: "Insalata di polpo e patate con olive e lattuga",
      phase: "menu",
      price: 8,
      vegan: false,
      vegetarian: false,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/insalata-polpo.jpg?alt=media&token=df26acd1-ec91-4688-8e9a-70ff27d08386",
      macronut: {
        calorie: 526,
        carboidrati: 41,
        grassi: 29,
        proteine: 27,
      },
      plateDescription: `200 g di polpo - 200 g di patate - 80 g di lattuga - 30 g di olive`,
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
  imageURI:
    "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/restaurants-images%2Fmas.jpg?alt=media&token=23bb6243-cbbc-4f16-94c6-b32a407349d3",
  plates: [
    // per Carboidrati
    {
      name: "Pane integrale",
      phase: "carboidrati",
      price: 0.5,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fpane-integrale.jpg?alt=media&token=4de58da8-940d-4725-9399-081343ce2bcc",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fpane-5-cereali.jpg?alt=media&token=88103a56-d4e4-4b17-8646-fef09bd2cbc4",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fsegale.jpg?alt=media&token=141d58d4-872a-47b7-a13d-b82f9dd4fc57",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fpapavero.jpg?alt=media&token=d18b80f1-1573-401c-99a9-a563b7f67a28",
      macronut: {
        calorie: 276,
        carboidrati: 52.47,
        grassi: 2.58,
        proteine: 10.69,
      },
    },
    {
      name: "Lattuga Romana",
      phase: "contorni",
      price: 0.6,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lattuga-romana.jpg?alt=media&token=17d82468-ac68-4291-850b-e9f0f47ad033",
      glutenFree: true,
      macronut: {
        calorie: 17,
        carboidrati: 3.29,
        grassi: 0.3,
        proteine: 1.23,
      },
    },
    {
      name: "Melanzana",
      phase: "contorni",
      price: 0.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/melanzana.jpg?alt=media&token=c94b196b-bcad-4c6c-9e1d-17f2db2440a4",
      glutenFree: true,
      macronut: {
        calorie: 18,
        carboidrati: 10,
        grassi: 3.6,
        proteine: 4.4,
      },
    },
    {
      name: "Peperoni",
      phase: "contorni",
      price: 0.9,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/peperoni.jpg?alt=media&token=650c732d-70f9-447e-96f2-d11de72da282",
      glutenFree: true,
      macronut: {
        calorie: 22,
        carboidrati: 15.7,
        grassi: 2.7,
        proteine: 3.6,
      },
    },
    {
      name: "Rucola",
      phase: "contorni",
      price: 0.55,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/rucola.jpg?alt=media&token=086cead4-b73b-4955-8d02-88dbb7ebbc52",
      glutenFree: true,
      macronut: {
        calorie: 28,
        carboidrati: 14.9,
        grassi: 2.7,
        proteine: 10.4,
      },
    },
    {
      name: "Scarola",
      phase: "contorni",
      price: 0.9,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/scarola.jpg?alt=media&token=4077c21f-071d-4953-99d5-b8b0a0093ca2",
      glutenFree: true,
      macronut: {
        calorie: 16,
        carboidrati: 2.7,
        grassi: 0.3,
        proteine: 0.9,
      },
    },
    {
      name: "Sedano",
      phase: "contorni",
      price: 1.1,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/sedano.jpg?alt=media&token=e022b7f3-d9b6-4218-bbdb-e8d277310e0e",
      glutenFree: true,
      macronut: {
        calorie: 20,
        carboidrati: 9,
        grassi: 1.8,
        proteine: 9.2,
      },
    },
    {
      name: "Zucchine",
      phase: "contorni",
      price: 0.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/zucchine.jpg?alt=media&token=7621173c-234e-43e5-afdf-961b9a628916",
      glutenFree: true,
      macronut: {
        calorie: 11,
        carboidrati: 4.9,
        grassi: 0.9,
        proteine: 5.2,
      },
    },
    // per Proteine
    {
      name: "Bresaola",
      phase: "proteine",
      price: 29.8,
      vegan: false,
      vegetarian: false,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fbresaola.jpg?alt=media&token=c4adec9f-0ddb-4656-bcdc-2447f285e8aa",
      frequencyAlert:
        "Attenzione! Secondo le linee guida per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO è di circa 1-2 volte alla settimana. ",
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
      price: 5.13,
      vegan: false,
      vegetarian: false,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fcarpaccio.jpg?alt=media&token=b9c4d02a-bd0a-428c-9342-12635a0e80aa",
      frequencyAlert:
        "Attenzione! Secondo le linee guida per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO è di circa 1-2 volte alla settimana. ",
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
      price: 3.98,
      vegan: false,
      vegetarian: false,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Ffesa-tacchino.jpg?alt=media&token=56a11dc3-2c96-4f5e-a937-59608ff705d9",
      frequencyAlert:
        "Attenzione! Secondo le linee guida per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO è di circa 1-2 volte alla settimana. ",
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
      price: 7,
      vegan: false,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Ffiocchi-latte.jpg?alt=media&token=ddd65f96-b4a0-4d01-a47b-38ab5a6ff278",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pollo-arrosto.jpg?alt=media&token=6ade17b3-4378-4659-89ca-55f04198c05d",
      frequencyAlert:
        "Occhio alla salute! Ricorda che per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO per le carni bianche (pollo, tacchino, coniglio) è di 2-3 volte a settimana.",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fquark.jpg?alt=media&token=5f1fb907-49f5-41bb-944f-1f9848ecd8cf",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/tonno.jpg?alt=media&token=42931044-849e-48a5-b642-588f58d43177",
      frequencyAlert:
        "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Ftonno-affumicato.jpg?alt=media&token=330efddc-102c-49bc-bf81-507291ce6725",
      frequencyAlert:
        "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Ftonno-affumicato.jpg?alt=media&token=330efddc-102c-49bc-bf81-507291ce6725",
      frequencyAlert:
        "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Ftacchino-arrosto.jpg?alt=media&token=8e8d9a50-65d4-4697-aff2-7d61a651e99e",
      frequencyAlert:
        "Occhio alla salute! Ricorda che per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO per le carni bianche (pollo, tacchino, coniglio) è di 2-3 volte a settimana.",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fcotto.jpg?alt=media&token=74e5e08c-daeb-4731-a0d5-06d2fef56fca",
      frequencyAlert:
        "Attenzione! Secondo le linee guida per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO è di circa 1-2 volte alla settimana. ",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fcrudo-magro.jpg?alt=media&token=975f07fb-539e-4086-8913-497a9b16f5af",
      frequencyAlert:
        "Attenzione! Secondo le linee guida per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO è di circa 1-2 volte alla settimana. ",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/olio.jpg?alt=media&token=35ac5011-22e5-4c7f-8918-a225602b33e3",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/avocado.jpg?alt=media&token=998f5a49-6d79-49f1-a9f1-54907964ee46",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mandorle.jpg?alt=media&token=091af73a-2411-4c5b-b7d5-a063cc806f6c",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pistacchi-sfusi.jpg?alt=media&token=9a98905b-d8b7-4e2d-90c9-798ad70e8a04",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/noci.jpg?alt=media&token=53ef588c-f6c5-4b51-a214-752b4414fae5",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Fnocciole.jpg?alt=media&token=97b8a1d9-75a8-45f8-b97f-c9a7aaf54c44",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Folive-nere.jpg?alt=media&token=d0150838-a8af-461d-9004-e73920d409b0",
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
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mas%2Folive-verde.jpg?alt=media&token=2bbaad73-88e3-4e63-b6b8-8ff3cb3bdea3",
      macronut: {
        calorie: 105,
        carboidrati: 6.04,
        grassi: 9.54,
        proteine: 0.88,
      },
    },
    {
      name: "Acqua Naturale Fontalba 0.5L",
      phase: "bibite",
      price: 1,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/fontalba.png?alt=media&token=2c06ae43-2ed2-47b9-ab54-a584f51662df",
      macronut: {
        calorie: 0,
        carboidrati: 0,
        grassi: 0,
        proteine: 0,
      },
    },
    {
      name: "Coca Cola Zero 0.5L",
      phase: "bibite",
      price: 2,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/coca-zero.jpg?alt=media&token=a1650588-c2bd-4e93-9b44-46c7f2ff104f",
      macronut: {
        calorie: 0,
        carboidrati: 0,
        grassi: 0,
        proteine: 0,
      },
    },
    {
      name: "Fuze Tea Limone 0.5L",
      phase: "bibite",
      price: 1.7,
      vegan: true,
      vegetarian: true,
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/fuze-limone.jpg?alt=media&token=f65a9ef5-81bd-41da-a358-fe5afc4accc1",
      macronut: {
        calorie: 0,
        carboidrati: 10,
        grassi: 0,
        proteine: 0,
      },
    },
    // per Menu
    {
      name: "Busiate con cubetti di pesce spada e melanzane ",
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/busiate.png?alt=media&token=472b1e27-5e5c-4726-994d-58b49c2206b0",
      macronut: {
        calorie: 680,
        carboidrati: 69,
        grassi: 29,
        proteine: 34,
      },
      phase: "menu",
      price: 8.3,
      vegan: false,
      vegetarian: false,
      plateDescription: `Pasta 80g
       Pesce Spada 120g
       1 melanzana (circa 150g)
       Pomodorini 60g`,
    },
    {
      name: "Pennette con cubetti di tofu e melanzane",
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pennette-tofu.png?alt=media&token=1f4c965f-c958-4250-b84f-70b4f643bd74",
      macronut: {
        calorie: 604,
        carboidrati: 71,
        grassi: 27,
        proteine: 20,
      },
      phase: "menu",
      price: 9,
      vegan: true,
      vegetarian: true,
      plateDescription: `Pasta 80g
       Tofu 100 g
       Melanzana 200 g
       Pomodorini 60g`,
    },
    {
      name: "Caserecce al ragù bianco con asparagi",
      imageURI:
        "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/casarecce-ragu.png?alt=media&token=cf87dd5f-c2ad-49bf-8027-2c504067f60a",
      macronut: {
        calorie: 650,
        carboidrati: 68,
        grassi: 28,
        proteine: 32,
      },
      phase: "menu",
      price: 10,
      vegan: true,
      vegetarian: true,
      plateDescription: `Pasta 80 g
       Macinato di vitello 50g
       Parmigiano 20g
       Asparagi 150 g`,
    },
  ],
};

export const restaurants = [laPuttega, mas];

export const restaurantsWrapper = { restaurants };

export const exampleIngredients = [
  // per Carboidrati
  {
    name: "Ceci",
    phase: "carboidrati",
    price: 2.5,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/ceci.jpg?alt=media&token=0c697199-5d25-4bbb-8595-b7223fe5baba",
    frequencyAlert:
      "è una buona abitudine consumare i legumi 2-3 volte alla settimana. Il consiglio è di abbinarli a una fonte di cereali e alle verdure per un piatto unico completo!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/cous_cous.jpg?alt=media&token=56c21d7a-3a6b-4ba1-9b68-a199b30040c7",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/orzo_perlato.jpg?alt=media&token=ab9bd2f5-38a8-4581-9d18-ea826e3261ae",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/patate.jpg?alt=media&token=117dfaef-3499-473e-b855-13a99709fafa",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pasta_di_semola.jpg?alt=media&token=0857e223-fc2d-48f8-83ca-7c7f768b238a",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pasta_integrale.jpg?alt=media&token=45243134-d8d3-4dcd-bda5-635ce79c8412",
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
    glutenFree: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/riso-basmati.jpg?alt=media&token=0737fb39-4dc0-4f43-bc65-42db8669cb00",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/riso%20venere.jpg?alt=media&token=d8cbc4ee-b3a8-40fb-a2f9-517fd71d2a7e",
    glutenFree: true,
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/riso%20integrale.jpg?alt=media&token=140206cf-081a-4623-8f05-e5356107a08d",
    glutenFree: true,
    macronut: {
      calorie: 337,
      carboidrati: 289.9,
      grassi: 17.1,
      proteine: 30,
    },
  },
  {
    name: "Broccoli",
    phase: "contorni",
    price: 0.7,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/broccoli.jpg?alt=media&token=0c8a2e64-43ba-4aa8-9c38-b47b1fbf6718",
    glutenFree: true,
    macronut: {
      calorie: 20,
      carboidrati: 2,
      grassi: 0.3,
      proteine: 2.9,
    },
  },
  {
    name: "Carciofi",
    phase: "contorni",
    price: 0.7,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/carciofi.jpg?alt=media&token=2e630acc-5f81-43a9-b99e-e67ebb3e9e7c",
    glutenFree: true,
    macronut: {
      calorie: 22,
      carboidrati: 9.4,
      grassi: 1.8,
      proteine: 10.8,
    },
  },
  {
    name: "Cavolfiore",
    phase: "contorni",
    price: 0.8,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/cavolfiore.jpg?alt=media&token=47cbac46-ece5-494c-87b1-185b2e394da2",
    glutenFree: true,
    macronut: {
      calorie: 25,
      carboidrati: 10.4,
      grassi: 1.8,
      proteine: 12.8,
    },
  },
  {
    name: "Cetrioli",
    phase: "contorni",
    price: 0.9,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/cetrioli.jpg?alt=media&token=a109b345-b281-487a-8c74-1fb721f364b5",
    glutenFree: true,
    macronut: {
      calorie: 14,
      carboidrati: 6.7,
      grassi: 4.5,
      proteine: 2.8,
    },
  },
  {
    name: "Zucchina",
    phase: "contorni",
    price: 0.7,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/zucchine.jpg?alt=media&token=7621173c-234e-43e5-afdf-961b9a628916",
    glutenFree: true,
    macronut: {
      calorie: 11,
      carboidrati: 4.9,
      grassi: 0.9,
      proteine: 5.2,
    },
  },
  {
    name: "Finocchio",
    phase: "contorni",
    price: 1,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/finocchio.jpg?alt=media&token=e9116dbc-2238-4705-9911-68ba5503e551",
    glutenFree: true,
    macronut: {
      calorie: 9,
      carboidrati: 4.2,
      grassi: 0,
      proteine: 4.8,
    },
  },
  {
    name: "Lattuga Iceberg",
    phase: "contorni",
    price: 0.7,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lattuga-iceberg.jpg?alt=media&token=2be9f4fc-6100-47c9-82c6-c658a6107e22",
    glutenFree: true,
    macronut: {
      calorie: 14,
      carboidrati: 2.97,
      grassi: 0.14,
      proteine: 0.9,
    },
  },
  // per Proteine
  {
    name: "Albume d'uovo",
    phase: "proteine",
    price: 2,
    vegan: false,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/albume.jpg?alt=media&token=5f9ed9a3-7513-43ab-a05b-917c824ac0ed",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/filetto.jpg?alt=media&token=d99346aa-312c-4840-b9cb-f825808ab6d8",
    frequencyAlert:
      "Attenzione! Ricorda che il CONSUMO SETTIMANALE RACCOMANDATO per le carni rosse (bovina, equina, suina e ovina) è di massimo 1 volta a settimana. In un programma alimentare equilibrato e volto alla salute, un elemento chiave è la varietà di alimenti consumati!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/gamberoni-arrosto.jpg?alt=media&token=6b0a5c8b-6541-46f6-a7fd-a254c157052f",
    frequencyAlert:
      "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lenticchie.jpg?alt=media&token=f1edebca-c11b-49e5-9934-c925f78a0db0",
    frequencyAlert:
      "è una buona abitudine consumare i legumi 2-3 volte alla settimana. Il consiglio è di abbinarli a una fonte di cereali e alle verdure per un piatto unico completo!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/lonza_di_maiale.jpg?alt=media&token=b96b6706-e949-41d3-b5ca-34eeda15fcc7",
    frequencyAlert:
      "Attenzione! Ricorda che il CONSUMO SETTIMANALE RACCOMANDATO per le carni rosse (bovina, equina, suina e ovina) è di massimo 1 volta a settimana. In un programma alimentare equilibrato e volto alla salute, un elemento chiave è la varietà di alimenti consumati!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/merluzzo.jpg?alt=media&token=876d5c00-e38b-4f71-8a18-002decf2131b",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pesce_spada.jpg?alt=media&token=d9f1042a-6d46-497d-b789-415e66aacfc8",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/petto_di_pollo.jpg?alt=media&token=1bbdbb21-f87a-49a1-9c8f-3ee762651bb1",
    frequencyAlert:
      "Occhio alla salute! Ricorda che per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO per le carni bianche (pollo, tacchino, coniglio) è di 2-3 volte a settimana.",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/salmone.jpg?alt=media&token=238dea98-02a0-4571-b436-6e3820561b2b",
    frequencyAlert:
      "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/tacchino.jpg?alt=media&token=39c7224c-8d8b-41ee-a214-c16286c3f36e",
    frequencyAlert:
      "Occhio alla salute! Ricorda che per una sana alimentazione il CONSUMO SETTIMANALE RACCOMANDATO per le carni bianche (pollo, tacchino, coniglio) è di 2-3 volte a settimana.",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/tonno.jpg?alt=media&token=42931044-849e-48a5-b642-588f58d43177",
    frequencyAlert:
      "Il consumo di pesce, molluschi e crostacei raccomandato durante la settimana è di almeno 2-3 volte alla settimana. Il consiglio è di privilegiare pesce azzurro (merluzzo, acciughe, sardine, palamita, sgombro ecc.) e di piccola taglia!",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/uova.jpg?alt=media&token=ba532b5f-39b5-4652-98fc-aa765e9e3173",
    frequencyAlert:
      "è consigliato di consumare da 1 a un massimo di 4 porzioni alla settimana.",
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
    price: 7,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/avocado.jpg?alt=media&token=998f5a49-6d79-49f1-a9f1-54907964ee46",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/mandorle.jpg?alt=media&token=091af73a-2411-4c5b-b7d5-a063cc806f6c",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/nocciole.jpg?alt=media&token=7e14f802-3058-4f6b-8bd7-62e1145bc8a4",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/noci.jpg?alt=media&token=53ef588c-f6c5-4b51-a214-752b4414fae5",
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
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/pistacchi-sfusi.jpg?alt=media&token=9a98905b-d8b7-4e2d-90c9-798ad70e8a04",
    macronut: {
      calorie: 562,
      carboidrati: 27.51,
      grassi: 45.39,
      proteine: 20.27,
    },
  },

  {
    name: "Acqua Naturale Fontalba 0.5L",
    phase: "bibite",
    price: 1,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/fontalba.png?alt=media&token=2c06ae43-2ed2-47b9-ab54-a584f51662df",
    macronut: {
      calorie: 0,
      carboidrati: 0,
      grassi: 0,
      proteine: 0,
    },
  },
  {
    name: "Coca Cola Zero 0.5L",
    phase: "bibite",
    price: 2,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/coca-zero.jpg?alt=media&token=a1650588-c2bd-4e93-9b44-46c7f2ff104f",
    macronut: {
      calorie: 0,
      carboidrati: 0,
      grassi: 0,
      proteine: 0,
    },
  },
  {
    name: "Fuze Tea Limone 0.5L",
    phase: "bibite",
    price: 1.7,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/fuze-limone.jpg?alt=media&token=f65a9ef5-81bd-41da-a358-fe5afc4accc1",
    macronut: {
      calorie: 0,
      carboidrati: 10,
      grassi: 0,
      proteine: 0,
    },
  },
  {
    name: "Olio Evo",
    phase: "grassi",
    price: 8,
    vegan: true,
    vegetarian: true,
    imageURI:
      "https://firebasestorage.googleapis.com/v0/b/letsfitja-eatfit.appspot.com/o/olio.jpg?alt=media&token=35ac5011-22e5-4c7f-8918-a225602b33e3",
    macronut: {
      calorie: 884,
      carboidrati: 0,
      grassi: 100,
      proteine: 0,
    },
  },
];
