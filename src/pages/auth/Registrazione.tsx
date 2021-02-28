import {
  Button,
  Center,
  Container,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import TopNavBar from '../../components/nav-bar/TopNavBar';
import { _auth } from '../../utils/firebase';
const Registrazione = () => {
  const [showPasswordText, setShowPasswordText] = useState<boolean>(false);
  const history = useHistory();
  const toast = useToast();
  const showAccountCreatedToast = () =>
    toast({
      title: 'Account Creato con successo, si festeggia!🎉',
      description: 'Controlla la tua E-Mail per la verifica!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  const showAccountCouldNotBeCreatedToast = () =>
    toast({
      title: "Non ci voleva, non è stato possibile creare l'account!😢",
      description: 'Forse hai già usato questa email',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });

  const onSubmit = (data: any) => {
    _auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        showAccountCreatedToast();
        user.user?.sendEmailVerification();
        history.push('/');
      })
      .catch(() => showAccountCouldNotBeCreatedToast());
  };
  const { register, handleSubmit } = useForm();
  return (
    <>
      <TopNavBar />
      <Container mt="8">
        <Stack spacing={3}>
          <Center>
            <Image boxSize="150px" src="../../res/logo.png" />
          </Center>
          <Center>
            <Text fontSize="3xl">Registrazione</Text>
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              border="2px"
              borderColor="green.500"
              placeholder="E-Mail"
              size="lg"
              name="email"
              ref={register}
            />
            <InputGroup>
              <Input
                type={showPasswordText ? 'text' : 'password'}
                border="2px"
                mt="1"
                borderColor="green.500"
                placeholder="Password"
                size="lg"
                name="password"
                ref={register}
                autoFocus
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  mt="4"
                  variant="outline"
                  onClick={() => setShowPasswordText(!showPasswordText)}
                >
                  {showPasswordText ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              size="lg"
              border="2px"
              borderColor="green.500"
              variant="outline"
              type="submit"
              mt="1"
              width="100%"
            >
              Registriamoci! 🌟
            </Button>
          </form>
          <Text fontSize="p">
            Hai già un account? <Link to="/auth">Clicca qui!</Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Registrazione;
