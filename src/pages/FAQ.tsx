import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import Question from "./Question";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  return (
    <Box>
      <Text fontStyle="italic">
        Hai qualche dubbio? Consulta le domande frequenti che ci vengono poste e
        in caso non trovassi risposta siamo sempre presenti in chat o al nostro
        servizio clienti email.
      </Text>
      <Question
        domanda="Come funziona il vostro servizio?"
        risposta="È molto semplice, puoi ordinare ovunque ti trovi i piatti che preferisci disponibili nello shop del ristorante che preferisci. Selezioni un prodotto, lo personalizzi nelle grammature, lo aggiungi al carrello e procedi con l’ordine."
      />
      <Question
        domanda="C’è un minimo che devo spendere per ordinare?"
        risposta="No, non c’è un minimo di spesa per ordine."
      />
      <Question
        domanda="Come funziona il piatto personalizzato?"
        risposta="Il piatto personalizzato è un prodotto che puoi personalizzare a tuo gradimento in termini di ingredienti e grammature. Andando a modificare ciascuna delle due componenti vedrai aggiornarsi la tabella delle informazioni nutrizionali ed il corrispondente prezzo. Una volta acquistato, lo avrai consegnato al tuo domicilio dal ristoratore."
      />
      <Question
        domanda="Collaborate con un professionista?"
        risposta="Si, abbiamo un accordo di collaborazione con la nutrizionista dott.ssa Samanta Cattafi."
      />
      <Question
        domanda="Se non so comporre il piatto fai-da-te come posso fare?"
        risposta="Per i clienti che hanno difficoltà nella creazione del pasto fai-da-te garantiamo menù stagionali composti da una selezione di piatti studiati ed elaborati dalla nostra nutrizionista, la dott.ssa Samanta Cattafi, con la quale abbiamo stipulato un accordo di collaborazione."
      />
      <Question
        domanda="Come sono formulati i piani alimentari?"
        risposta="I piani alimentari sono formulati focalizzandosi, oltre che sulle calorie da assumere, anche sulla qualità e sulla giusta ripartizione dei macronutrienti. La nostra nutrizionista tiene anche conto dell’indice di sazietà dei piatti per fare in modo che le porzioni risultino abbondanti e non venga mai avvertita la sensazione di fame."
      />
      <Question
        domanda="A cosa fanno riferimento le quantità dei pasti elaborati dalla nutrizionista?"
        risposta="Le quantità sono da considerarsi orientative e fanno riferimento alle porzioni standard indicate dai LARN (Livelli di Assunzione di Riferimento di Nutrienti ed energia) IV Revisione."
      />
      <Question
        domanda="Le informazioni nutrizionali che compaiono per ogni alimento da quale fonte provengono"
        risposta="Le informazioni relative ai macronutrienti sono contenute nella Banca dati di Composizione Alimenti INRAN, 2007.  "
      />
      <Question
        domanda="Gli avvisi che compaiono in corrispondenza degli alimenti da chi sono scritti?"
        risposta="Sono avvisi della nutrizionista che indicano le frequenze di consumo settimanale raccomandate accompagnate da consigli da seguire in un programma alimentare volto alla salute."
      />
      <Question
        domanda="Avete un’app?"
        risposta="No, purtroppo ancora non abbiamo un App ma il nostro sito è mobile responsive!"
      />
      <Question
        domanda="Come posso pagare?"
        risposta="È possibile pagare con carta di credito, carta di debito e alla consegna."
      />
      <Question
        domanda="Fate partnership con aziende?"
        risposta="Certamente, se sei interessato contattaci pure!"
      />
    </Box>
  );
};

export default FAQ;
