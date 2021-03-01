import {
  Button,
  Center,
  Container,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { _auth } from "../../utils/firebase";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import { useForm } from "react-hook-form";

const PasswordDimenticata = () => {
  const showPasswordResetEmailSentToast = () =>
    toast({
      title: "E-Mail inviata con successo!💪",
      description: "Adesso tocca a te!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  const showPasswordResetEmailErrorToast = () =>
    toast({
      title: "Oh no, c'è stato un problema!😢",
      description: "Eh no, i nostri server non riconoscono questa e-mail!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  const handlePasswordReset = (data: any) =>
    _auth
      .sendPasswordResetEmail(data.email)
      .then(() => showPasswordResetEmailSentToast())
      .catch(() => showPasswordResetEmailErrorToast());
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  return (
    <>
      <TopNavBar />
      <Container mt="8">
        <Stack spacing={3}>
          <Center>
            <Image boxSize="150px" src="../../res/logo.png" />
          </Center>
          <Center>
            <Text fontSize="p">
              Password Dimenticata? Nessun problema, inserisci qui l'E-Mail che
              hai usato durante la registrazione
            </Text>
          </Center>
          <form onSubmit={handleSubmit(handlePasswordReset)}>
            <Input
              autoFocus
              border="2px"
              borderColor="green.500"
              placeholder="E-Mail"
              size="lg"
              name="email"
              ref={register}
            />
            <Button
              size="lg"
              border="2px"
              borderColor="green.500"
              variant="outline"
              width="100%"
              type="submit"
            >
              Controlliamo! 🦾
            </Button>
          </form>
        </Stack>
      </Container>
    </>
  );
};

export default PasswordDimenticata;
