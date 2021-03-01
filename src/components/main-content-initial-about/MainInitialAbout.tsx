import React, { useRef } from "react";
import { Container, Button } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./main-inital-about.css";

const MainInitialAbout = () => {
  const scrollToNextSection = () =>
    nextSection.current?.scrollIntoView({ behavior: "smooth" });

  const nextSection = useRef<null | HTMLDivElement>(null);

  return (
    <Container flex={1} justifyContent="center" align="center">
      <Button
        className="see-more-button"
        colorScheme="green"
        variant="outline"
        onClick={scrollToNextSection}
      >
        Scopri di più <AiOutlineArrowDown />
      </Button>

      <section className="presentation" ref={nextSection}>
        <div className="introduction">
          <div className="intro-text">
            <h1>Chi siamo</h1>
          </div>
        </div>
        <div className="cover">
          <p>
            Let's Fit JA è una startup che si costituisce nell’ottobre 2020 a
            Milazzo presso l’ITT E. Majorana, frutto dell’adesione
            all’iniziativa Skills for the Future organizzata da EIT Food e
            Junior Achievemnt Europa con l’obiettivo di sviluppare un servizio
            che possa contribuire ad una nutrizione salutare.
          </p>
        </div>
      </section>
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1>Il Nostro Target</h1>
          </div>
        </div>
        <div className="cover">
          <p>
            L’idea di business dell’azienda nasce dalla necessità di aiutare
            tutti coloro che vogliono consumare un pasto sano ed equilibrato
            volto al fitness, durante la pausa lavoro, ma che purtroppo, a causa
            dei frenetici ritmi lavorativi sostenuti, hanno poco tempo a
            disposizione per prepararlo.
          </p>
        </div>
      </section>
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1>Il Nostro Prodotto</h1>
          </div>
        </div>
        <div className="cover">
          <p>
            Quindi, per ovviare a questo problema, abbiamo creato Eat & Fit,
            un’App di Food Delivery grazie alla quale si potrà ordinare il
            proprio pasto ovunque ci si trovi, componendolo a proprio piacimento
            e personalizzandolo con gli ingredienti dei migliori ristoranti
            della zona, che provvederanno in maniera autonoma alla consegna
            dell’ordine.
          </p>
        </div>
      </section>
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1>La cattiva alimentazione</h1>
          </div>
        </div>
        <div className="cover">
          <p>
            Il problema della cattiva alimentazione è più grave di quanto
            immaginiamo: dall’analisi dell’osservatorio sui consumi fuori casa
            2019, si evidenzia che il 66,7% degli italiani trascorre la pausa
            pranzo fuori casa
          </p>
        </div>
      </section>
      <section className="presentation">
        <div className="introduction">
          <div className="intro-text">
            <h1>Analisi</h1>
          </div>
        </div>
        <div className="cover">
          <p>
            Esistono fondamentalmente 4 categorie di persone: - chi si reca al
            bar più vicino per consumare il classico panino o tramezzino, il
            trancio di pizza, la porzione di lasagna o l’insalata pronta; - chi
            porta da casa i cibi preparati la sera precedente; - chi salta la
            pausa e sostituisce ad un pasto completo uno snack perché non ha né
            voglia di preparare il pranzo il giorno prima né voglia di andare al
            bar; - chi ha la possibilità di recarsi a casa per preparare un
            pasto da consumare in fretta, per poi correre nuovamente sul posto
            di lavoro. Il comune denominatore tra queste categorie è: mangiare
            male.
          </p>
        </div>
      </section>

      {/* <Container ref={nextSection} mt="190">

<Text fontSize="p">
Eat&Fit rende la pausa lavorativa semplice, sana ed equilibrata!

        </Text>
      </Container> */}
    </Container>
  );
};

export default MainInitialAbout;
