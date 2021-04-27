import React, { useRef } from "react";
import { Container, Button } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import HomeFooter from "../footer/HomeFooter";
import SectionCard from "./SectionCard";
import { scrollIntoSection } from "./scrollIntoSection";
import Partners from "./Partners";

const MainInitialAbout = () => {
  const initialContainer = useRef<null | HTMLDivElement>(null);
  const homeSection = useRef<null | HTMLDivElement>(null);
  const ilNostroTargetSection = useRef<null | HTMLDivElement>(null);
  const ilNostroServizioSection = useRef<null | HTMLDivElement>(null);
  const ilProblemaSection = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Container
        ref={initialContainer}
        justifyContent="center"
        align="center"
        mt="-10%"
      >
        <Button
          colorScheme="green"
          variant="outline"
          onClick={() => scrollIntoSection(homeSection)}
        >
          Scopri di più <AiOutlineArrowDown />
        </Button>
      </Container>
      {/**Chi Siamo */}
      <SectionCard
        bgColor="green.200"
        heading="Chi siamo 👥"
        imageURL="../res/foto-di-gruppo.jpeg"
        paragraph={`Let's Fit JA è una startup che si costituisce nell’ottobre 2020 a Milazzo presso l’ITT E. Majorana, frutto dell’adesione all’iniziativa Skills for the Future organizzata da EIT Food e Junior Achievement Europa con l’obiettivo di sviluppare un servizio che possa contribuire ad una nutrizione salutare.`}
        scrollRef={homeSection}
      />
      {/**Il Nostro Target */}
      <SectionCard
        bgColor="orange.200"
        heading="Il Nostro Target 🎯"
        imageURL="../res/il-nostro-target.jpg"
        paragraph={`L’idea di business dell’azienda nasce dalla necessità di aiutare tutti coloro che vogliono consumare un pasto sano ed equilibrato durante la pausa lavoro, ma che purtroppo, a causa dei frenetici ritmi lavorativi sostenuti, hanno poco tempo a disposizione per prepararlo.`}
        scrollRef={ilNostroTargetSection}
      />
      {/**Il Problema */}
      <SectionCard
        bgColor="red.300"
        heading="Il Problema: La cattiva alimentazione & Lo Spreco Alimentare 🔴"
        imageURL="../../res/food-waste.png"
        paragraph={`Il problema della cattiva alimentazione è più grave di quanto
        immaginiamo: dall’analisi dell’osservatorio sui consumi fuori casa
        2019, si evidenzia che il 66,7% degli italiani trascorre la pausa
        pranzo consumando un pasto squilibrato ipercalorico e poco salutare
        in un bar o in una trattoria. Inoltre chi vuole mantenere un regime
        alimentare equilibrato spesso non ha la voglia o il tempo di
        preparare il proprio pasto.`}
        scrollRef={ilProblemaSection}
      />
      {/**Il Nostro Servizio */}
      <SectionCard
        bgColor="cyan.300"
        heading="La Soluzione: Il Nostro Servizio 🙌"
        imageURL="../res/app-screenshot.png"
        paragraph={`Abbiamo creato Eat & Fit, un’App di Food Delivery grazie alla
        quale si potrà ordinare il proprio pasto ovunque ci si trovi,
        componendolo a proprio piacimento e personalizzandolo con gli
        ingredienti offerti dai migliori ristoranti della zona, che
        provvederanno in maniera autonoma alla consegna dell’ordine.`}
        scrollRef={ilNostroServizioSection}
      />
      <Partners />
      <HomeFooter initialRef={initialContainer} />
    </>
  );
};

export default MainInitialAbout;
