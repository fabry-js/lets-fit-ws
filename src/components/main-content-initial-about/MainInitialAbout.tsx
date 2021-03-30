import React, { useRef } from "react";
import {
  Container,
  Button,
  Box,
  Text,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import HomeFooter from "../footer/HomeFooter";
const MainInitialAbout = () => {
  const scrollIntoSection = (
    refElement: React.MutableRefObject<null | HTMLDivElement>
  ) => {
    refElement.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };
  const initialContainer = useRef<null | HTMLDivElement>(null);
  const homeSection = useRef<null | HTMLDivElement>(null);
  const ilNostroTargetSection = useRef<null | HTMLDivElement>(null);
  const ilNostroServizioSection = useRef<null | HTMLDivElement>(null);
  const ilProblemaSection = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Container ref={initialContainer} justifyContent="center" align="center">
        <Button
          colorScheme="green"
          variant="outline"
          onClick={() => scrollIntoSection(homeSection)}
        >
          Scopri di più <AiOutlineArrowDown />
        </Button>
      </Container>
      {/**Chi Siamo */}
      <Box p="5%" ref={homeSection}>
        <Flex bgColor="green.200" borderRadius="4%" m="5% 3% 2% 3%" p="6">
          <Box w="600px" p="6">
            <Text fontSize="5xl" fontWeight="bold">
              Chi Siamo 🎭
            </Text>
            <Text fontSize="20px" mt="7%">
              Let's Fit JA è una startup che si costituisce nell’ottobre 2020 a
              Milazzo presso l’ITT E. Majorana, frutto dell’adesione
              all’iniziativa Skills for the Future organizzata da EIT Food e
              Junior Achievement Europa con l’obiettivo di sviluppare un
              servizio che possa contribuire ad una nutrizione sana.
            </Text>
            <Button
              bgColor="green.100"
              variant="solid"
              mt="5%"
              onClick={() => scrollIntoSection(ilNostroTargetSection)}
            >
              Il Nostro Target <AiOutlineArrowDown />
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Image
              src="../res/foto-di-gruppo.jpeg"
              w="600px"
              opacity="0.4"
              borderRadius="4%"
            />
          </Box>
        </Flex>
      </Box>
      {/**Il Nostro Target */}
      <Box p="10%" ref={ilNostroTargetSection}>
        <Flex bgColor="orange.200" borderRadius="4%" m="10% 0% 2% '3'%" p="6">
          <Box w="600px" p="6">
            <Text fontSize="5xl" fontWeight="bold">
              Il Nostro Target 🎯
            </Text>
            <Text fontSize="20px" mt="7%">
              L’idea di business dell’azienda nasce dalla necessità di aiutare
              tutti coloro che vogliono consumare un pasto sano ed equilibrato
              durante la pausa lavoro, ma purtroppo, a causa dei frenetici ritmi
              lavorativi sostenuti, hanno poco tempo a disposizione per
              prepararlo.
            </Text>
            <Button
              bgColor="orange.100"
              variant="solid"
              mt="5%"
              onClick={() => scrollIntoSection(ilProblemaSection)}
            >
              Il Problema <AiOutlineArrowDown />
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Image
              src="../res/il-nostro-target.jpg"
              w="600px"
              opacity="0.4"
              borderRadius="4%"
            />
          </Box>
        </Flex>
      </Box>
      {/**Il Problema */}
      <Flex
        ref={ilProblemaSection}
        bgColor="red.300"
        borderRadius="4%"
        m="5% 3% 2% 3%"
        p="6"
      >
        <Box w="600px" p="6">
          <Text fontSize="5xl" fontWeight="bold">
            Il Problema: La cattiva alimentazione & Spreco Alimentare 🔴
          </Text>
          <Text fontSize="20px" mt="7%">
            Il problema della cattiva alimentazione è più grave di quanto
            immaginiamo: dall’analisi dell’osservatorio sui consumi fuori casa
            2019, si evidenzia che il 66,7% degli italiani trascorre la pausa
            pranzo consumando un pasto squilibrato ipercalorico e poco salutare
            in un bar o in una trattoria. Inoltre chi vuole mantenere un regime
            alimentare equilibrato spesso non ha la voglia o il tempo di
            preparare il proprio pasto.
          </Text>
          <Text fontStyle="italic" mt="2%" mb="-3%">
            <a href="https://www.ebnt.it/files/pubblicazioni/2019/2019-consumi-fuori-casa.pdf">
              Fonte
            </a>
          </Text>
          <Button
            bgColor="red.100"
            variant="solid"
            mt="10%"
            onClick={() => scrollIntoSection(ilNostroServizioSection)}
          >
            Il Nostro Servizio <AiOutlineArrowDown />
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Image
            src="../../res/food-waste.png"
            w="600px"
            opacity="0.4"
            borderRadius="4%"
          />
        </Box>
      </Flex>
      {/**Il Nostro Servizio */}
      <Box p="10%" ref={ilNostroServizioSection}>
        <Flex bgColor="cyan.300" borderRadius="4%" m="5% 0% 0% 0%" p="6">
          <Box w="600px" p="6">
            <Text fontSize="5xl" fontWeight="bold">
              La Soluzione: Il Nostro Servizio 🙌
            </Text>
            <Text fontSize="20px" mt="7%">
              Abbiamo creato Eat & Fit, un’App di Food Delivery grazie alla
              quale si potrà ordinare il proprio pasto ovunque ci si trovi,
              componendolo a proprio piacimento e personalizzandolo con gli
              ingredienti offerti dai migliori ristoranti della zona, che
              provvederanno in maniera autonoma alla consegna dell’ordine.
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Image
              src="../res/app-screenshot.png"
              w="600px"
              opacity="0.4"
              borderRadius="4%"
            />
           </Box>
        </Flex>
      </Box>
      <HomeFooter mt="-10%" initialRef={initialContainer} />
    </>
  );
};

export default MainInitialAbout;
