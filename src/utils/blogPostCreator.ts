import { BlogPost } from "../models/BlogPost";

export const examplePost: BlogPost = {
  postId: 1,
  additional: {
    likes: 4,
  },
  featured: true,
  mainContent: {
    postHeader: `
      Sport e alimentazione per gli atleti vanno di pari passo, basta pensare che fare sport e mangiare sano siano fondamentali per far sì che una persona mantenga uno stile di vita sano e appropriato.
      L’attività fisica e l’alimentazione bisogna sempre considerarli come due argomenti molto uniti, spesso si fa l’errore di considerarli in maniera distaccata.
      Mangiare sano inoltre ha un ruolo molto importante per la prestazione fisica di un atleta, che seguita da allenamenti può portare molte soddisfazioni.`,
    postBody: `Mentre chi segue dei principi di alimentazione scorretta e fa poca attività fisica, può portare ad uno stile di vita sbagliato. Tutto ciò può accadere sin da piccoli anche grazie a vari avvenimenti, come per esempio: passare troppe ore al computer o alla televisione, utilizzare sempre la macchina o i mezzi di trasporto (anche per tragitti brevi) o molto semplicemente prendere sempre l’ascensore. E tra i maggiori casi senza considerare lo sport ovviamente, ecco alcuni dei motivi che portano all’obesità: `,
    postEventualPointedList: [
      "Aumento dell’uso di trasporto motorizzato (ad esempio per andare a scuola);",
      "Diminuzione dell’attività fisica durante il tempo libero e conseguente aumento della sedentarietà;",
      "Aumento del tempo trascorso davanti alla tv e/o strumenti digitali;",
      "Aumento della quantità e varietà degli alimenti grassi ed energetici e relativo aumento della loro pubblicità;",
      "Aumento dell’uso di ristoranti e fast food per pranzare e cenare, i quali offrono grandi porzioni a poco prezzo;",
      "Aumento del numero dei pasti durante la giornata;",
      "Aumento dell’uso di bibite analcoliche, dolci e gasate come sostituzione all’acqua;",
    ],
    postTopFooter: `L’alimentazione per chi fa palestra deve essere equilibrata e corretta, per poter influire sulla qualità delle prestazioni, inoltre non bisogna esagerare con le quantità perché può appesantire e di conseguenza comporterà a stanchezza.
    Per chi deve cominciare conviene sempre affidarsi sempre ai professionisti e non basarsi su chi non esperto. Ciò che magari può aver funzionato per lui non è detto sia la cosa migliore anche per te. Inoltre esistono diversi miti che ovviamente sono falsi, come: mangiare entro un’ora dall’allenamento per evitare la chiusura della finestra anabolica. Un altro mito è allenarsi a digiuno aiuta a bruciare più grassi, allenarsi a digiuno si riferisce all’esercizio fisico eseguito a stomaco vuoto nella finestra temporale che va dalla cena alla prima colazione e chi ne promuove l’efficacia, sostiene che l’allenamento a digiuno aiuti l’organismo a ossidare i grassi in maniera più efficiente rispetto a quanto accade a stomaco pieno. `,
    postFooter: `Un ultimo mito è per chi crede che si possa far uso degli integratori però, gli integratori non devono sostituire un’alimentazione sana e bilanciata, ma completarla, tenendo a mente che nella piramide dei fattori che influenzano il cambiamento fisico, l’integrazione occupa l’ultimo posto.
    Un consiglio è quello di evitare di fare allenamento a digiuno, se ti alleni la mattina, sarebbe meglio mangiare un pasto a base di carboidrati semplici che durante la notte diminuiscono. Avere l’energia giusta ti permetterà di dare il massimo durante l’allenamento, senza cali di prestazione.`,
  },
  postTitle: "Sport e alimentazione",
  postShortDesc:
    "Sport e alimentazione per gli atleti vanno di pari passo, basta pensare che fare sport e mangiare sano siano fondamentali per far sì che una persona mantenga uno stile di vita...",
  comments: [],
  postAuthor: "Desirèe Carbone"
};
